import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const read = path => readFileSync(resolve(root, path), "utf8");
const parse = path => JSON.parse(read(path));
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };

const content = parse("data/content.json");
const register = parse("data/reference-register.json");
const html = read("index.html");

assert(Array.isArray(content.stages) && content.stages.length === 7, "The curriculum must contain seven stages.");
const stageSlugs = content.stages.map(stage => stage.slug);
assert(new Set(stageSlugs).size === stageSlugs.length, "Stage slugs must be unique.");

for (const stage of content.stages) {
  for (const field of ["slug", "title", "summary", "outcome", "input", "output", "consumer"]) {
    assert(Boolean(stage[field]), `Stage ${stage.slug || "<unknown>"} is missing ${field}.`);
  }
  assert(Array.isArray(stage.steps) && stage.steps.length > 0, `Stage ${stage.slug} needs process steps.`);
  assert(Array.isArray(stage.jdeReferences), `Stage ${stage.slug} needs a JDE reference array.`);
  assert(stage.quiz && Array.isArray(stage.quiz.options), `Stage ${stage.slug} needs a quiz.`);
  if (stage.quiz?.options) assert(stage.quiz.answer >= 0 && stage.quiz.answer < stage.quiz.options.length, `Stage ${stage.slug} has an invalid quiz answer.`);
}

const objectPattern = /\b[PRFWBV]\d[A-Z0-9]{3,}\b/g;
const contentIds = [...new Set(JSON.stringify(content).match(objectPattern) || [])].sort();
const registeredIds = register.references.map(item => item.id);
const registeredSet = new Set(registeredIds);
assert(registeredSet.size === registeredIds.length, "The reference register contains duplicate IDs.");

for (const id of contentIds) assert(registeredSet.has(id), `Unregistered JDE identifier: ${id}`);
for (const id of registeredIds) assert(contentIds.includes(id), `Reference register entry is no longer used: ${id}`);

const validationSet = new Set(content.referenceRules.needsValidation);
for (const id of validationSet) {
  const entry = register.references.find(item => item.id === id);
  assert(Boolean(entry), `Needs-validation identifier is missing from the register: ${id}`);
  assert(entry?.status === "needsValidation", `Register status must be needsValidation for ${id}`);
}
for (const entry of register.references.filter(item => item.status === "needsValidation")) {
  assert(validationSet.has(entry.id), `Register marks ${entry.id} for validation but content rules do not.`);
}

const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert(new Set(ids).size === ids.length, "index.html contains duplicate element IDs.");
const idSet = new Set(ids);
for (const match of html.matchAll(/href="#([^"]+)"/g)) assert(idSet.has(match[1]), `Broken internal link target: #${match[1]}`);

for (const path of ["index.html", "styles.css", "app.js", "data/content.json", "data/reference-register.json"]) {
  assert(read(path) === read(`dist/${path}`), `Source and dist differ for ${path}`);
}

if (failures.length) {
  console.error(`Validation failed with ${failures.length} problem${failures.length === 1 ? "" : "s"}:`);
  failures.forEach(message => console.error(`- ${message}`));
  process.exit(1);
}

console.log(`Validated ${content.stages.length} stages, ${contentIds.length} JDE identifiers, ${ids.length} HTML IDs and synchronized dist assets.`);
