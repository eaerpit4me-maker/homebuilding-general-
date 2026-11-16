let stages = [];
let foundationControlItems = [];
let statusModel = [];
let reportGroups = [];
let stagePractitionerPanels = {};
let salesBusinessSequence = [];
let salesforceIntegrationContract = {};
let practiceExercises = {};
let glossary = [];
let rolePaths = [];
let moneyFlow = [];
let finalAssessment = [];
let referenceRules = { needsValidation: [], configurationSignals: [], labels: {} };

let currentStage = 0;
let currentTab = "understand";
let currentMode = "beginner";
let completed = new Set();
try { completed = new Set(JSON.parse(localStorage.getItem("homebuildingLearningCompleted") || "[]")); } catch { completed = new Set(); }

const stageRail = document.getElementById("stageRail");
const panel = document.getElementById("lessonPanel");
const tabButtons = [...document.querySelectorAll("[data-tab]")];
const modeButtons = [...document.querySelectorAll("[data-mode]")];

function confidenceFor(text, explicit) {
  if (explicit) return explicit;
  const value = String(text || "");
  if (referenceRules.needsValidation.some(id => value.includes(id))) return "validation";
  if (referenceRules.configurationSignals.some(signal => value.toLowerCase().includes(signal.toLowerCase()))) return "configuration";
  return "source";
}

function confidenceBadge(text, explicit) {
  const level = confidenceFor(text, explicit);
  const labels = referenceRules.labels || {};
  return `<span class="confidence-tag ${level}">${labels[level] || level}</span>`;
}

function updateUrl() {
  const url = new URL(location.href);
  url.searchParams.set("stage", stages[currentStage].slug);
  url.searchParams.set("lesson", currentTab);
  url.searchParams.set("mode", currentMode);
  history.replaceState(null, "", url);
}

function renderStageRail() {
  stageRail.innerHTML = stages.map((stage, index) => `<button class="stage-button" type="button" data-stage="${index}" aria-current="${index === currentStage ? "step" : "false"}"><span>${completed.has(index) ? "✓" : String(index + 1).padStart(2,"0")}</span><strong>${stage.short}</strong><small>${stage.phase}</small></button>`).join("");
}

function understandView(stage) {
  const businessSequence = stage.slug === "sell-configure" ? `<section class="business-sequence" aria-labelledby="salesSequenceTitle"><header><span>Stage 4 business sequence</span><h4 id="salesSequenceTitle">Interest becomes a construction-ready commitment in six controlled moves.</h4><p>The status changes only when the responsible system accepts the next business fact.</p></header><div>${salesBusinessSequence.map((item,index) => `<article><span>${String(index+1).padStart(2,"0")}</span><strong>${item[0]}</strong><p>${item[1]}</p></article>`).join("")}</div></section>` : "";
  return `<div class="learn-grid">
    <article class="story-card"><h4>The Willow Creek story</h4><p>${stage.story}</p><div class="process-steps">${stage.steps.map((step,index) => `<div class="process-step"><span>${index+1}</span><div><strong>${step[0]}</strong><p>${step[1]}</p>${currentMode === "practitioner" && step[2] ? `<small class="step-jde"><b>JDE touchpoint</b>${step[2]}</small>` : ""}</div></div>`).join("")}</div></article>
    <div class="support-stack">
      <article class="support-card decision"><h4>Decisions that matter</h4><div class="chip-list">${stage.decisions.map(item => `<span>${item}</span>`).join("")}</div></article>
      <article class="support-card warning"><h4>Common failure points</h4><div class="chip-list">${stage.pitfalls.map(item => `<span>${item}</span>`).join("")}</div></article>
      ${currentMode === "practitioner" ? `<article class="support-card jde-glance"><h4>JDE apps &amp; files</h4><p class="jde-glance-intro">Key EnterpriseOne objects and how the business uses them in this stage.</p><div class="jde-glance-list">${stage.jdeReferences.slice(0,3).map(item => `<section class="jde-glance-item"><div class="reference-label"><strong>${item[0]}</strong>${confidenceBadge(`${item[1]} ${item[2]} ${item[3]}`)}</div><div class="jde-object-line"><span>App</span><code>${item[1]}</code></div><div class="jde-object-line"><span>File</span><code>${item[2]}</code></div><p>${item[3]}</p></section>`).join("")}</div><button class="jde-glance-link" type="button" data-open-jde>Open the full stage reference <span aria-hidden="true">→</span></button></article>` : ""}
    </div>
  </div>${businessSequence}`;
}

function peopleView(stage) {
  return `<div class="roles-grid">${stage.roles.map((role,index) => `<article class="role-card"><span>Role ${String(index+1).padStart(2,"0")}</span><h4>${role[0]}</h4><p>${role[1]}</p></article>`).join("")}</div>
    <div class="handoff-table" role="table" aria-label="Stage information handoffs"><div class="handoff-row handoff-head" role="row"><span role="columnheader">From</span><span role="columnheader">To</span><span role="columnheader">What moves</span></div>${stage.handoffs.map(item => `<div class="handoff-row" role="row"><strong role="rowheader">${item[0]}</strong><span role="cell">${item[1]}</span><span role="cell">${item[2]}</span></div>`).join("")}</div>`;
}

function practitionerStageView(stage) {
  if (currentMode !== "practitioner") return "";
  const panels = stagePractitionerPanels[stage.slug] || [];
  const panelMarkup = panels.map((section,index) => `<section class="practitioner-panel"><header><span>Practitioner deep dive ${String(index+1).padStart(2,"0")}</span><h4>${section.title}</h4><p>${section.intro}</p></header><div class="deep-dive-grid">${section.items.map(item => `<article><strong>${item[0]}</strong><p>${item[1]}</p></article>`).join("")}</div></section>`).join("");
  const contractMarkup = stage.slug === "sell-configure" ? `<section class="practitioner-panel integration-panel"><header><span>Integration design</span><h4>${salesforceIntegrationContract.title}</h4><p>${salesforceIntegrationContract.intro}</p></header><div class="integration-table" role="table" aria-label="Salesforce and JDE integration contract"><div class="integration-row integration-head" role="row">${salesforceIntegrationContract.headers.map(header => `<span role="columnheader">${header}</span>`).join("")}</div>${salesforceIntegrationContract.rows.map(row => `<div class="integration-row" role="row">${row.map((cell,index) => index === 0 ? `<strong role="rowheader">${cell}</strong>` : `<span role="cell">${cell}</span>`).join("")}</div>`).join("")}</div></section>` : "";
  if (!panelMarkup && !contractMarkup) return "";
  return `<div class="practitioner-stage-detail">${contractMarkup}${panelMarkup}</div>`;
}

function jdeView(stage) {
  return `<div class="jde-intro"><strong>JDE in this stage</strong><p>${stage.jdeIntro}</p></div><div class="jde-module-grid">${stage.jdeModules.map(item => `<article class="jde-module-card ${item[0]}"><span>${item[0] === "primary" ? "JDE HBM" : item[0] === "adjacent" ? "Adjacent JDE" : "Specialist / integration"}</span><h4>${item[1]}</h4><p>${item[2]}</p></article>`).join("")}</div><section class="technical-reference" ${currentMode === "practitioner" ? "" : "hidden"}><div class="reference-heading"><div><strong>JDE application and file reference</strong><p>Confidence labels distinguish source-backed references from configuration choices and items awaiting demo-system validation.</p><div class="confidence-legend">${confidenceBadge("", "source")}${confidenceBadge("", "configuration")}${confidenceBadge("", "validation")}</div></div><a href="https://docs.oracle.com/en/applications/jd-edwards/project-management/9.2/eoahm/toc.htm" target="_blank" rel="noopener noreferrer">Oracle HBM guide <span aria-hidden="true">↗</span></a></div><div class="reference-table" role="table" aria-label="JDE applications, programs and tables for this stage"><div class="reference-row reference-head" role="row"><span role="columnheader">Capability</span><span role="columnheader">Applications / reports</span><span role="columnheader">Tables / files</span><span role="columnheader">How it supports the process</span><span role="columnheader">Confidence</span></div>${stage.jdeReferences.map(item => { const text = `${item[1]} ${item[2]} ${item[3]}`; return `<div class="reference-row" role="row"><strong role="rowheader">${item[0]}</strong><span role="cell"><code>${item[1]}</code></span><span role="cell"><code>${item[2]}</code></span><span role="cell">${item[3]}</span><span role="cell">${confidenceBadge(text)}</span></div>`; }).join("")}</div></section>${practitionerStageView(stage)}`;
}

function checkView(stage) {
  const exercise = practiceExercises[stage.slug];
  const practiceMarkup = currentMode === "practitioner" && exercise ? `<article class="practice-card"><span>Guided practitioner exercise</span><h4>${exercise[0]}</h4><dl><div><dt>Task</dt><dd>${exercise[1]}</dd></div><div><dt>Evidence of understanding</dt><dd>${exercise[2]}</dd></div></dl></article>` : "";
  return `<div class="check-layout"><article class="check-card"><span class="stage-index">Stage ${currentStage+1} knowledge check</span><h4>${stage.quiz.question}</h4><p>Choose the strongest answer. The explanation connects the business rule to the system boundary.</p><div class="answer-list">${stage.quiz.options.map((option,index) => `<button type="button" data-answer="${index}">${String.fromCharCode(65+index)}. ${option}</button>`).join("")}</div><div class="answer-feedback" id="answerFeedback" hidden aria-live="polite"></div></article>${practiceMarkup}</div>`;
}

function renderPanel() {
  const stage = stages[currentStage];
  const views = {understand: understandView, people: peopleView, jde: jdeView, check: checkView};
  panel.innerHTML = views[currentTab](stage);
}

function renderRecordJourney() {
  document.getElementById("recordJourney").innerHTML = stages.map((stage,index) => `<div class="record-node ${index === currentStage ? "active" : ""}"><span>${String(index+1).padStart(2,"0")} · ${stage.phase}</span><strong>${stage.record[0]}</strong><small>${stage.record[1]}</small></div>`).join("");
}

function renderPractitionerToolkit() {
  document.getElementById("foundationControls").innerHTML = foundationControlItems.map((item,index) => `<article><span>${String(index+1).padStart(2,"0")}</span><div><div class="reference-label"><strong>${item[0]}</strong>${confidenceBadge(`${item[0]} ${item[1]}`)}</div><p>${item[1]}</p></div></article>`).join("");
  document.getElementById("statusFlow").innerHTML = statusModel.map((item,index) => `<article><span>${String(index+1).padStart(2,"0")}</span><strong>${item[0]}</strong><p>${item[1]}</p><small>${item[2]}</small></article>`).join("");
  document.getElementById("reportGroups").innerHTML = reportGroups.map(group => `<article class="report-group"><h5>${group.title}</h5><div>${group.reports.map(report => `<section><code>${report[0]}</code><div><strong>${report[1]}</strong>${confidenceBadge(`${report[0]} ${report[1]}`)}</div><p>${report[2]}</p></section>`).join("")}</div></article>`).join("");
  document.getElementById("moneyFlow").innerHTML = moneyFlow.map((item,index) => `<article><span>${String(index+1).padStart(2,"0")}</span><strong>${item.step}</strong><p>${item.business}</p><small>${item.jde}</small><div><code>${item.ledger}</code>${confidenceBadge("", item.confidence)}</div></article>`).join("");
}

function renderRolePaths() {
  document.getElementById("rolePathGrid").innerHTML = rolePaths.map((path,index) => `<button type="button" class="role-path-card" data-role-stage="${path.start}"><span>${String(index+1).padStart(2,"0")} · ${path.stages}</span><strong>${path.name}</strong><small>${path.audience}</small><p>${path.focus}</p><em>Start this route →</em></button>`).join("");
}

function renderFinalAssessment() {
  const card = document.getElementById("assessmentCard");
  card.innerHTML = `<form id="assessmentForm"><div class="assessment-questions">${finalAssessment.map((item,index) => `<fieldset><legend><span>${String(index+1).padStart(2,"0")}</span>${item.question}</legend>${item.options.map((option,optionIndex) => `<label><input type="radio" name="assessment-${index}" value="${optionIndex}" required><span>${option}</span></label>`).join("")}</fieldset>`).join("")}</div><div class="assessment-actions"><button type="submit">Score my assessment</button><p>Answers stay in this browser and are not sent anywhere.</p></div></form><div class="assessment-result" id="assessmentResult" hidden aria-live="polite"></div>`;
}

function syncModeVisibility() {
  document.querySelectorAll("[data-practitioner-only]").forEach(element => { element.hidden = currentMode !== "practitioner"; });
}

function selectStage(index, updateLink = true) {
  currentStage = Math.max(0, Math.min(stages.length-1,index));
  const stage = stages[currentStage];
  document.getElementById("stageIndex").textContent = `Stage ${currentStage+1} of ${stages.length}`;
  document.getElementById("stageQuestion").textContent = stage.question;
  document.getElementById("stageTitle").textContent = stage.title;
  document.getElementById("stageSummary").textContent = stage.summary;
  document.getElementById("stageOutcome").textContent = stage.outcome;
  document.getElementById("stageInput").textContent = stage.input;
  document.getElementById("stageOutput").textContent = stage.output;
  document.getElementById("stageConsumer").textContent = stage.consumer;
  document.getElementById("progressText").textContent = `${currentStage+1} of ${stages.length}`;
  document.getElementById("progressBar").style.width = `${((currentStage+1)/stages.length)*100}%`;
  document.getElementById("prevStage").disabled = currentStage === 0;
  document.getElementById("nextStage").disabled = currentStage === stages.length-1;
  renderStageRail(); renderPanel(); renderRecordJourney();
  if (updateLink) updateUrl();
}

function activateTab(tab, updateLink = true) {
  if (!["understand","people","jde","check"].includes(tab)) return;
  currentTab = tab;
  tabButtons.forEach(button => { const selected = button.dataset.tab === tab; button.setAttribute("aria-selected", String(selected)); button.tabIndex = selected ? 0 : -1; });
  renderPanel();
  if (updateLink) updateUrl();
}

function setMode(mode) {
  if (!["beginner","practitioner"].includes(mode)) return;
  currentMode = mode;
  modeButtons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.mode === mode)));
  renderPanel(); syncModeVisibility(); updateUrl();
}

stageRail.addEventListener("click", event => { const button = event.target.closest("[data-stage]"); if (button) selectStage(Number(button.dataset.stage)); });
tabButtons.forEach((button,index) => {
  button.addEventListener("click", () => activateTab(button.dataset.tab));
  button.addEventListener("keydown", event => { if (!["ArrowRight","ArrowLeft","Home","End"].includes(event.key)) return; event.preventDefault(); let next=index; if(event.key==="ArrowRight") next=(index+1)%tabButtons.length; if(event.key==="ArrowLeft") next=(index-1+tabButtons.length)%tabButtons.length; if(event.key==="Home") next=0; if(event.key==="End") next=tabButtons.length-1; activateTab(tabButtons[next].dataset.tab); tabButtons[next].focus(); });
});
modeButtons.forEach(button => button.addEventListener("click", () => setMode(button.dataset.mode)));
document.getElementById("prevStage").addEventListener("click", () => selectStage(currentStage-1));
document.getElementById("nextStage").addEventListener("click", () => selectStage(currentStage+1));
document.getElementById("rolePathGrid").addEventListener("click", event => {
  const route = event.target.closest("[data-role-stage]");
  if (!route) return;
  selectStage(Number(route.dataset.roleStage));
  document.getElementById("learningPath").scrollIntoView({behavior: "smooth", block: "start"});
});
panel.addEventListener("click", event => {
  const jdeReference = event.target.closest("[data-open-jde]");
  if (jdeReference) { activateTab("jde"); tabButtons.find(button => button.dataset.tab === "jde")?.focus(); return; }
  const answer = event.target.closest("[data-answer]");
  if (!answer) return;
  const selected = Number(answer.dataset.answer);
  const quiz = stages[currentStage].quiz;
  panel.querySelectorAll("[data-answer]").forEach(button => { button.disabled = true; if (Number(button.dataset.answer) === quiz.answer) button.classList.add("correct"); });
  if (selected !== quiz.answer) answer.classList.add("incorrect");
  const feedback = document.getElementById("answerFeedback");
  feedback.hidden = false;
  feedback.innerHTML = `<strong>${selected === quiz.answer ? "Correct." : "Not quite."}</strong> ${quiz.explanation}`;
  if (selected === quiz.answer) { completed.add(currentStage); try { localStorage.setItem("homebuildingLearningCompleted", JSON.stringify([...completed])); } catch {} renderStageRail(); }
});

function renderGlossary(query="") {
  const normalized=query.trim().toLowerCase();
  const matches=glossary.filter(item => !normalized || `${item[0]} ${item[1]}`.toLowerCase().includes(normalized));
  document.getElementById("glossaryGrid").innerHTML = matches.map(item => `<article class="glossary-item"><strong>${item[0]}</strong><span>${item[1]}</span></article>`).join("");
  document.getElementById("glossaryEmpty").hidden = matches.length > 0;
}
document.getElementById("glossarySearch").addEventListener("input", event => renderGlossary(event.target.value));

document.getElementById("assessmentCard").addEventListener("submit", event => {
  if (event.target.id !== "assessmentForm") return;
  event.preventDefault();
  const formData = new FormData(event.target);
  let score = 0;
  const missed = [];
  finalAssessment.forEach((item,index) => {
    const answer = Number(formData.get(`assessment-${index}`));
    const fieldset = event.target.querySelectorAll("fieldset")[index];
    fieldset.classList.toggle("correct", answer === item.answer);
    fieldset.classList.toggle("incorrect", answer !== item.answer);
    if (answer === item.answer) score += 1;
    else missed.push(item.topic);
  });
  const result = document.getElementById("assessmentResult");
  const passed = score >= 6;
  result.hidden = false;
  result.className = `assessment-result ${passed ? "passed" : "review"}`;
  result.innerHTML = `<strong>${score} / ${finalAssessment.length} · ${passed ? "Working model established" : "Review recommended"}</strong><p>${missed.length ? `Revisit: ${missed.join(", ")}.` : "You connected every scenario to the correct business and system boundary."}</p><button type="button" data-reset-assessment>Try again</button>`;
  result.scrollIntoView({behavior: "smooth", block: "center"});
});

document.getElementById("assessmentCard").addEventListener("click", event => {
  if (!event.target.closest("[data-reset-assessment]")) return;
  renderFinalAssessment();
  document.getElementById("assessmentTitle").scrollIntoView({behavior: "smooth", block: "start"});
});

async function initialize() {
  const response = await fetch("data/content.json");
  if (!response.ok) throw new Error(`Unable to load curriculum data (${response.status})`);
  const content = await response.json();
  ({ stages, foundationControlItems, statusModel, reportGroups, stagePractitionerPanels, salesBusinessSequence, salesforceIntegrationContract, practiceExercises, glossary, rolePaths, moneyFlow, finalAssessment, referenceRules } = content);

  const initial = new URL(location.href);
  const stageIndex = stages.findIndex(stage => stage.slug === initial.searchParams.get("stage"));
  const requestedTab = initial.searchParams.get("lesson");
  const requestedMode = initial.searchParams.get("mode");
  currentStage = stageIndex >= 0 ? stageIndex : 0;
  currentTab = ["understand","people","jde","check"].includes(requestedTab) ? requestedTab : "understand";
  currentMode = ["beginner","practitioner"].includes(requestedMode) ? requestedMode : "beginner";
  tabButtons.forEach(button => { const selected = button.dataset.tab === currentTab; button.setAttribute("aria-selected", String(selected)); button.tabIndex = selected ? 0 : -1; });
  modeButtons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.mode === currentMode)));
  renderRolePaths();
  renderPractitionerToolkit();
  renderFinalAssessment();
  syncModeVisibility();
  selectStage(currentStage, false);
  renderGlossary();
}

initialize().catch(error => {
  console.error(error);
  panel.innerHTML = `<div class="load-error"><strong>The curriculum could not load.</strong><p>Refresh the page. If the problem continues, confirm that <code>data/content.json</code> is deployed with the site.</p></div>`;
});
