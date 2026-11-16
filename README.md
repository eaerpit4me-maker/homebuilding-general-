# Homebuilding Process Learning · JD Edwards

Educational proof-of-concept website that teaches the residential homebuilding business process first, then maps each stage to JD Edwards EnterpriseOne and Homebuilder Management.

Live learning site: https://homebuilding-process-jde-learning.dharmendra-malviya.chatgpt.site/

## Learning design

- Seven plain-language stages from land opportunity through warranty
- One fictional journey: Willow Creek · Lot 27
- Explicit stage inputs, outputs and accountable handoffs
- Business roles, decisions and common failure points
- Beginner and JDE Practitioner detail modes
- Stage-specific knowledge checks with explanations
- Stage-specific JDE application, report, table and file reference matrices in Practitioner mode
- HBM foundation controls, lifecycle status model and representative report index
- Community Pro Forma, material-item setup, bid/takeoff selection logic and Lot Start outputs
- Salesforce–JDE request/response contract and field-scheduling integration patterns
- Stage 4 reservation sequence, contract price stack and configuration-freeze controls
- Workfile exception, voucher-path and guided practitioner exercises for every stage
- Role-based learning routes for land, sales, purchasing, construction, finance and warranty teams
- Conceptual budget-to-cost-of-sales money flow with explicitly qualified JA/PA/HA/AA ledger references
- Per-reference confidence labels: Source-backed, Configuration-dependent and Needs validation
- Eight-question cumulative assessment with missed-topic guidance
- Searchable homebuilding glossary
- Deep links to a stage, lesson view and detail mode
- Responsive, accessible and dependency-free implementation

## Run locally

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173`.

Example deep link:

`http://localhost:4173/?stage=build-home&lesson=jde&mode=practitioner#learningPath`

## Publish with GitHub Pages

Because the site has no build dependencies, GitHub Pages can serve the repository root directly. In the repository, open **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/ (root)`, and save.

## Files

- `index.html` — semantic page structure
- `styles.css` — responsive learning experience and print design
- `app.js` — rendering, navigation, assessment and interaction logic
- `data/content.json` — curriculum, JDE references, reports, role paths, exercises and confidence rules
- `dist/` — deployment-ready copy of the same source and curriculum data

## Content boundary

This is conceptual educational guidance. References tagged **Needs validation** remain intentionally unresolved until they are confirmed against the demo environment or authoritative documentation. Validate the actual homebuilder process, installed EnterpriseOne release, ESUs, licensed modules, configuration, customizations, security and accounting policy before using it for implementation decisions.
