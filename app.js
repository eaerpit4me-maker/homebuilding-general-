const stages = [
  {
    slug: "land-opportunity", short: "Find land", phase: "Portfolio decision",
    title: "Find and control the land", question: "Where could we build—and should we pursue it?",
    summary: "The land team identifies a parcel or finished-lot opportunity, secures a form of site control, tests feasibility and obtains authority to close, retain control or walk away.",
    outcome: "The company has documented ownership or contractual control, an approved investment case, known conditions and an accountable Development owner.",
    input: "Seller or broker lead, parcel reference and market idea", output: "Approved, owned or controlled land opportunity", consumer: "Land Development",
    story: "Willow Creek begins as a Salesforce land opportunity linked to GIS parcels. The team negotiates an option, investigates title, utilities, environmental conditions and market demand, and updates an underwriting model. An investment committee approves the structure and conditions. Title may transfer now, later at option exercise, or by phased takedown—so commercial control, legal ownership and accounting treatment are tracked separately.",
    steps: [
      ["Create the opportunity", "Identify the seller, broker, parcel, geography, asking terms and initial strategy.", "External: Salesforce land opportunity + GIS parcel ID. No standard HBM opportunity record."],
      ["Secure site control", "Execute an option, purchase agreement, takedown, JV or land-bank agreement with clear dates and conditions.", "External: contract repository and title data. Keep legal title separate from commercial control."],
      ["Complete diligence", "Evaluate title, survey, environmental, geotechnical, entitlement, utilities, market and delivery risk.", "External diligence tools; only approved commercial and accounting consequences move into JDE."],
      ["Approve and activate", "Approve the investment and accounting conclusion, complete settlement when applicable, establish JDE controls and hand off the baseline.", "P01012/F0101 parties; P44H101/F44H101 community when authorized; P51006/F0006/F5108/F0901 job structure."]
    ],
    decisions: ["Pursue, renegotiate or walk away", "Buy now, option, takedown, JV or land-bank structure", "Which conditions must remain open after approval?"],
    pitfalls: ["Treating an option as if title already transferred", "Creating JDE lots before a recorded plat or accepted finished-lot purchase", "Allowing the approved underwriting version and JDE budget to diverge"],
    roles: [["Land acquisition", "Owns the opportunity, negotiation and decision package."], ["Legal / title", "Confirms rights, exceptions, settlement and recorded ownership."], ["Finance", "Approves funding, classification, capitalization and project activation."], ["Development", "Accepts the baseline, conditions and next-stage accountability."]],
    handoffs: [["Salesforce / GIS", "Diligence team", "Deal, parcel, parties, control strategy and dates"], ["Approval workflow", "Title / JDE", "Approved structure, model version, legal entity, limits and conditions"], ["Title / registry", "JDE + Salesforce", "Settlement, funding, deed/recording status and legal owner"], ["Acquisition", "Land Development", "Controlled/owned land, baseline budget, open conditions and evidence"]],
    jdeIntro: "JDE records the approved commercial and financial consequences. It is not the parcel, title, diligence or early-stage underwriting system.",
    jdeModules: [["external", "Salesforce + GIS", "Own the land opportunity, activities and spatial evidence."], ["adjacent", "Address Book + Financials", "Create transaction-ready parties and record approved deposits, obligations, payments and cost basis."], ["adjacent", "Job Cost", "Establish the approved business unit, accounts, budget and actual-cost structure."], ["primary", "HBM boundary", "Create authorized community context when appropriate; defer individual home sites until lots exist."]],
    jdeReferences: [
      ["Opportunity and diligence", "Salesforce, GIS, document/title platforms", "External records", "JDE is not the native land-pipeline or parcel-diligence system."],
      ["Community pro forma", "P44H102", "HBM pro forma data + approved underwriting source", "Use the Community Pro Forma to compare plan mix, premiums, options, land and direct cost after the investment assumptions are approved; it does not replace the detailed land underwriting model."],
      ["Community and job activation", "P44H101 · P51006", "F44H101 · F0006 · F5108 · F0901", "Create only after approval and according to the builder's activation policy."],
      ["Parties and suppliers", "P01012 · P04012", "F0101 · F0111 · F0401", "Create transaction-ready sellers, partners and suppliers."],
      ["Approved financial facts", "P0411 / configured journals and budgets", "F0411 · F0902 · F0911", "Record approved deposits, acquisition cost, liabilities and budget facts."],
      ["Integration", "Orchestrator / AIS", "External correlation IDs", "Move approved facts and status; retain source evidence outside JDE."]
    ],
    quiz: { question: "Willow Creek is under an executed land option, but the deed has not transferred. Which statement is most accurate?", options: ["The builder legally owns the land", "The builder controls a contractual right, while recorded ownership remains with the current owner", "JDE must create all future home-site records immediately"], answer: 1, explanation: "An option can provide contractual control without transferring recorded title. Accounting recognition and operational readiness are separate decisions." },
    record: ["Land opportunity", "Deal ID, Parcel ID, control agreement, approved model and conditions"]
  },
  {
    slug: "land-development", short: "Develop land", phase: "Horizontal delivery",
    title: "Entitle and develop the community", question: "How does raw land become serviced, buildable lots?",
    summary: "The Development team secures approvals and installs horizontal infrastructure—earthwork, roads, water, sewer, power, drainage, landscaping and common facilities—while controlling contracts and cost.",
    outcome: "The relevant phase is legally recorded, physically serviced, accepted where required and ready to release governed lots.",
    input: "Owned or controlled land, approved baseline and open conditions", output: "Recorded, serviced and financially controlled phase", consumer: "Community and Lot Setup",
    story: "Willow Creek moves from an investment decision to a delivery program. Civil engineers design the subdivision, municipalities review it, and suppliers perform horizontal work. Development managers need one view of original budget, approved changes, commitments, certified progress, actual cost and remaining forecast. Shared phase cost will later become part of each lot's cost basis.",
    steps: [["Design and entitle", "Complete civil design, permits, agreements, subdivision/plat approval and utility coordination.", "External permitting/CAD records; P44H101/F44H101 and P51006/F0006/F5108 hold the approved community/job context."], ["Contract the work", "Tender and award horizontal scopes using approved suppliers, cost codes and commercial terms.", "P4310 creates purchase orders/subcontracts in F4301/F4311 against the development job and cost-code structure."], ["Execute and certify", "Track field progress, inspections, change orders, retainage, invoices and municipal acceptance.", "P4314 and configured AP processing update F0411/F0911; commitment detail and relief are traceable through F43199."], ["Complete and allocate", "Close the eligible cost pool and allocate approved acquisition/development basis to released lots.", "P512000 reviews F0902 balances and F0911 detail; configured journals allocate eligible cost to released lot jobs."]],
    decisions: ["Which phase is released and when?", "What work is capitalizable under policy?", "Which allocation driver fairly moves shared cost to lots?"],
    pitfalls: ["Managing commitments only in spreadsheets", "Paying progress without certification or change approval", "Releasing lots while mandatory service or permit conditions remain open"],
    roles: [["Land Development", "Owns scope, schedule, budget and field delivery."], ["Civil / permitting", "Owns designs, submissions, inspections and acceptance evidence."], ["Procurement / AP", "Controls contracts, progress, retainage, vouchers and payment."], ["Finance / project controls", "Reviews cost-to-complete, WIP and lot allocation."]],
    handoffs: [["Engineering", "Procurement", "Approved scope, drawings, cost code, schedule and bidder list"], ["Field / certifier", "JDE", "Approved progress, quantity, change, retainage and invoice evidence"], ["JDE", "Project controls", "Budget, commitment, actual, payment and forecast facts"], ["Development", "Lot Setup", "Recorded lots, service status, allocated cost and release conditions"]],
    jdeIntro: "JDE becomes the commercial and cost-control backbone. Civil design, permitting and detailed field collaboration generally remain in specialist platforms.",
    jdeModules: [["adjacent", "Job Cost", "Controls the WBS, budgets, actuals, balances and cost-to-complete basis."], ["adjacent", "Procurement / Subcontracts", "Controls horizontal commitments, commercial changes and progress."], ["adjacent", "AP + General Accounting", "Posts certified cost, retainage, liabilities, payments and allocation entries."], ["external", "Civil / field / permitting", "Owns drawings, schedules, inspection evidence and municipal workflow."]],
    jdeReferences: [
      ["Community and development job", "P44H101 · P51006", "F44H101 · F0006 · F5108 · F0901", "Connect the community to its Job Cost structure."],
      ["Community profitability", "P44H102 Community Pro Forma", "HBM pro forma data + governed source assumptions", "Compare plan mix, lot premiums, option revenue, land/development cost and direct construction cost as the phase plan changes."],
      ["Budget and cost inquiry", "P512000", "F0902 · F0911", "Review original/revised budget, commitments, actuals and projected final amounts."],
      ["Horizontal contracts", "P4310", "F4301 · F4311 · F43199", "Control purchase orders, subcontracts, changes and commitment audit detail."],
      ["Progress and payment", "P4314 + AP payment processing", "F0411 · F0911", "Voucher approved progress and retainage according to configuration."],
      ["Engineering and permitting", "Civil / field / municipal platforms", "External drawings, permits and inspection evidence", "Integrate approved status and references; do not force design documents into transaction tables."]
    ],
    quiz: { question: "A road subcontract is approved but no work has been certified or invoiced. What exists financially?", options: ["A supplier commitment, but normally no AP liability yet", "A posted cash payment", "Recognized home-sale revenue"], answer: 0, explanation: "The subcontract creates a commitment. Actual cost and AP arise from approved progress, receipt, accrual or voucher processing." },
    record: ["Community / phase", "Development job, recorded plan, services, acceptance and cost pool"]
  },
  {
    slug: "lot-product", short: "Ready the lot", phase: "Product and inventory",
    title: "Create the lot and product definition", question: "What can be sold and built on this home site?",
    summary: "The builder creates a governed home-site record, assigns its financial identity, defines eligible plans and elevations, and establishes current pricing, bids, takeoffs, permits and release conditions.",
    outcome: "Lot 27 is uniquely identified, financially structured, saleable and/or buildable, with one valid product and cost definition.",
    input: "Recorded lot, services, allocated basis and release conditions", output: "Governed home site with product, price and cost context", consumer: "Sales and Construction Planning",
    story: "Lot 27 now becomes more than a line on a subdivision plan. It receives an address, status, lot attributes, a Job Cost identity and allowed home products. Product teams define plan and elevation choices. Estimating teams maintain two complementary cost mechanisms: bids choose the applicable supplier/trade price, while takeoffs accumulate material quantities required by the plan, elevation and options.",
    steps: [["Create the home site", "Establish community, phase, lot, address, status and durable source cross-references.", "P44H201 writes the governed lot to F44H201; HBM/Job Cost uses F0006, F5108 and F0901 for the lot job and account structure."], ["Assign product rules", "Define eligible plans, elevations, swings, specifications and option restrictions.", "P44H301/F44H301 define plans and elevations. P44H401/F44H401/F44H402 define options and packages."], ["Define cost", "Maintain effective bids, supplier assignments and cumulative takeoff quantities.", "P44H601 → F44H601/F44H611 bids; P44H602 → F44H602 takeoffs; P44H603/F44H603 pricing; P44H604/F44H604 suppliers."], ["Pass the readiness gate", "Confirm legal, service, permit, product, price, cost and release requirements.", "P44H201 controls lot release. P44H200A provides the operational lot view; F44H002 supplies configured activity rules."]],
    decisions: ["Is the lot saleable, buildable or both?", "Which plans and elevations are permitted?", "Which bid/takeoff version is effective for the intended start?"],
    pitfalls: ["Duplicate lot or business-unit identifiers", "Overlapping effective dates", "Confusing a bid price with a takeoff quantity"],
    roles: [["Community operations", "Owns lot readiness, status and release dates."], ["Product / design", "Owns plans, elevations, specifications and restrictions."], ["Estimating / purchasing", "Owns bids, takeoffs, suppliers and effective cost rules."], ["Finance", "Owns allocated land basis and the lot/job accounting structure."]],
    handoffs: [["Development", "HBM", "Recorded lot, address, service status, allocation and gate conditions"], ["Product", "HBM", "Plan/elevation eligibility, specification and option rules"], ["Estimating", "HBM", "Bid, takeoff, supplier and effective dates"], ["HBM", "Sales / scheduling", "Saleable/buildable status, product eligibility and governed lot ID"]],
    jdeIntro: "This is where Homebuilder Management becomes the lifecycle anchor for the individual home site and connects it to Job Cost, product and future sales/start activity.",
    jdeModules: [["primary", "HBM Home Site", "Owns the community/phase/lot context, status, address and product eligibility."], ["primary", "HBM bids and takeoffs", "Provides applicable supplier/trade cost and accumulated material requirements."], ["adjacent", "Job Cost", "Carries the lot business unit, accounts, budget and allocated developed-land basis."], ["external", "Planning / CRM / documents", "Owns release strategy, customer-facing inventory and detailed design content."]],
    jdeReferences: [
      ["Home site and status", "P44H201 · P44H200A", "F44H201 · F44H201H · F44H002", "Create the lot, manage release/status and review the lot inventory."],
      ["Plan and option masters", "P44H301 · P44H401", "F44H301 · F44H401 · F44H402", "Define plans, elevations, options and packages available to the community."],
      ["Material-item foundation", "P44H600", "F4101 · F44H4101", "Establish the EnterpriseOne items and homebuilder-specific item attributes required before material takeoffs can create valid purchasing demand."],
      ["Bid contracts", "P44H601", "F44H601 · F44H611", "Select the applicable supplier/trade price rule; bid matching is not cumulative."],
      ["Takeoffs and item pricing", "P44H602 · P44H603 · P44H604", "F44H602 · F44H602H · F44H603 · F44H604", "Accumulate all applicable takeoff quantities, price material items and assign suppliers. Configured '+' values can provide less-specific fallback matching."],
      ["Lot job and accounts", "P51006 · P512000", "F0006 · F5108 · F0901 · F0902", "Provide the Job Cost identity, account structure and financial inquiry for the lot."]
    ],
    quiz: { question: "What is the simplest difference between a bid and a takeoff?", options: ["A bid selects price/supplier logic; a takeoff accumulates required quantities", "A bid is for buyers; a takeoff is for title companies", "They are two names for the same record"], answer: 0, explanation: "Bids resolve the applicable trade or supplier price. Takeoffs accumulate material and assembly quantities for the configured home." },
    record: ["Home site / Lot 27", "Address, lot status, job, eligible product, cost basis and release gates"]
  },
  {
    slug: "sell-configure", short: "Sell & configure", phase: "Buyer commitment",
    title: "Sell and configure the home", question: "Who is buying, what are they buying, and on what terms?",
    summary: "Sales qualifies the buyer, validates available inventory, controls reservations, executes the purchase agreement and captures the approved plan, elevation, options, premiums, incentives, deposits and dates.",
    outcome: "The builder has a governed buyer—or an approved spec-home decision—and one revision-controlled home configuration for downstream planning.",
    input: "Saleable lot, eligible product, price and customer interest", output: "Executed contract or approved spec configuration", consumer: "Lot Start and Construction Planning",
    story: "A buyer discovers Willow Creek in Salesforce and selects Lot 27. Salesforce owns the lead, activities and customer journey, but JDE HBM confirms that the lot can be reserved and holds the accepted ERP sale context. The signed agreement stays in the document/e-signature platform. Deposit receipts are controlled financially. Structural options freeze earlier than cosmetic choices, so every downstream team needs the same configuration version.",
    steps: [["Qualify and match", "Connect buyer needs to available communities, lots, plans and price ranges.", "Salesforce owns lead/opportunity activity; P44H500 reads governed lot and sales context from F44H201/F44H501."], ["Validate and reserve", "Ask the authoritative lot record to accept a time-bound hold; do not rely on CRM availability alone.", "P44H500 Sales Workbench controls the accepted HBM sale status in F44H501 and history in F44H501H."], ["Contract and collect", "Execute the agreement, capture approved economics and process deposits under policy.", "P01012/F0101/F0111 establish buyer identity. Deposit accounting uses configured AR/financial processing; F03B11 holds customer ledger items when used."], ["Configure and freeze", "Capture selected options and enforce structural, design-center and cosmetic cutoff dates.", "P44H501 selects plan/elevation/options; F44H501 holds configuration and F44H511/F44H511H hold option selections/history."]],
    decisions: ["Buyer sale or spec start?", "Is the lot truly available and eligible?", "Which price components and incentives are approved?", "Which changes remain allowed after each cutoff?"],
    pitfalls: ["Treating CRM interest as an accepted reservation", "Two buyers promised the same lot", "CRM price differs from the approved contract", "Deposit status is confused with revenue", "Stale option revisions flow into construction purchasing"],
    roles: [["Sales", "Owns the relationship, opportunity and buyer journey."], ["Sales operations", "Owns reservation, contract version, incentives and configuration control."], ["Design center", "Owns buyer selection experience and cutoff workflow."], ["Finance", "Controls deposits, customer identity and approved economic consequences."]],
    handoffs: [["Salesforce", "JDE HBM", "Buyer reference, lot request, hold, contract version, price and options"], ["JDE HBM", "Salesforce", "Accepted availability, reservation, ERP sale reference and milestones"], ["Payment / escrow", "JDE", "Deposit amount, payer, date, tender and external reference"], ["Sales / design", "Lot Start", "Frozen configuration, selected options, effective dates and approved exceptions"]],
    jdeIntro: "Salesforce is normally the engagement system. HBM governs the accepted home-site sale context and configuration used by downstream JDE processing.",
    jdeModules: [["external", "Salesforce / digital sales", "Owns lead, opportunity, activities, communications and customer experience."], ["primary", "HBM Sales Workbench", "Connects buyer, lot, plan, options, premiums, incentives and operational sale status."], ["adjacent", "Address Book / AR", "Creates transaction-ready buyer identity and controls approved receipts/deposit balances."], ["external", "E-signature / design center", "Retains signed documents and the interactive selection experience."]],
    jdeReferences: [
      ["Sales and reservation", "P44H500 Sales Workbench", "F44H501 · F44H501H · F44H201", "Govern the accepted lot, buyer, plan, pricing and operational sales status."],
      ["Configuration and options", "P44H501 Select Options", "F44H511 · F44H511H · F44H401", "Capture selected options and preserve change history for downstream purchasing."],
      ["Buyer identity", "P01012", "F0101 · F0111 · F03012 when AR customer setup is required", "Create the transaction-ready buyer and contacts."],
      ["Deposits and receipts", "Configured Accounts Receivable processing", "F03B11 + related receipt tables", "Apply the builder's accounting policy; HBM does not replace the approved deposit process."],
      ["CRM and documents", "Salesforce · e-signature · Orchestrator/AIS", "CRM Opportunity ID · contract version · JDE sale reference · correlation ID", "Synchronize accepted status and configuration through explicit request/response contracts while signed documents remain in the document platform."]
    ],
    quiz: { question: "Salesforce shows Lot 27 as available, but JDE HBM rejects the reservation. Which status should govern the accepted hold?", options: ["Salesforce, because the salesperson sees it first", "JDE HBM, because it owns the accepted lot reservation/status", "Whichever screen was refreshed most recently"], answer: 1, explanation: "Salesforce presents inventory and coordinates engagement, but the governed JDE/HBM response should determine whether the hold is accepted." },
    record: ["Configuration and sale", "Buyer/spec decision, plan, options, price, deposits, version and cutoffs"]
  },
  {
    slug: "build-home", short: "Start & build", phase: "Vertical execution",
    title: "Start and build the home", question: "How does an approved configuration become coordinated field work?",
    summary: "Lot Start converts the home definition into lot-specific budget and purchasing records. Construction then sequences trades, manages changes and inspections, and accumulates actual cost against the approved plan.",
    outcome: "Lot 27 is complete, inspected, financially reconciled and ready for the controlled closing process.",
    input: "Authorized lot, frozen configuration, effective bids/takeoffs and permits", output: "Completed home with reconciled cost and open-item list", consumer: "Closing Team",
    story: "For Lot 27, the Lot Start engine evaluates the plan, elevation and options against effective bids and cumulative takeoffs. Teams review exceptions such as Supplier TBD before purchase orders and subcontracts are generated. The field platform sequences trades and returns approved completion, change and exception evidence. JDE remains the commercial and financial record while the field platform owns the detailed schedule and site collaboration.",
    steps: [["Authorize the start", "Confirm permits, configuration freeze, current cost rules, supplier readiness and start authority.", "P44H200A/P44H201 expose lot readiness; F44H201 provides the start/configuration context and F44H002 supports configured activity rules."], ["Generate and review", "Run Lot Start in proof/final mode, inspect workfile lines and resolve missing suppliers or invalid quantities.", "R44H700 proof uses F44H71W1; final writes F44H711. P44H711 reviews the lot-start workfile before commitment generation."], ["Create commitments", "Generate controlled purchase orders/subcontracts and expose released work to the field.", "R44H7113 uses the reviewed workfile to create Procurement documents in F4301/F4311 and commitment audit/balance effects in F43199/F0902."], ["Execute and account", "Capture completion, inspections, changes, receipts, vouchers, payments, actual cost and forecast.", "P44H703/F44H711P supports after-start purchasing; P4314/F0411/F0911 and P512000/F0902 support vouchering and job-cost control."]],
    decisions: ["Is every mandatory start gate complete?", "Are exceptions safe to release?", "Is a change buyer-driven, field-driven, design correction or trade back-charge?"],
    pitfalls: ["Generating commitments from an unfrozen configuration", "Duplicate Lot Start runs", "Posting from an unapproved field event"],
    roles: [["Start coordinator", "Validates configuration, workfile and supplier exceptions."], ["Construction", "Owns schedule, quality, inspections and field decisions."], ["Purchasing", "Owns commitments, supplier scope, change and commercial control."], ["AP / Finance", "Owns vouchers, payment, WIP, reconciliation and cost forecast."]],
    handoffs: [["HBM Lot Start", "JDE Procurement", "Lot/job, scope, quantity, cost, supplier and dates"], ["JDE", "Field platform", "Released work package, supplier, schedule need and change status"], ["Field platform", "JDE", "Approved completion, receipt, exception, change and invoice evidence"], ["Construction", "Closing", "Completion, inspections, occupancy readiness, cost status and open items"]],
    jdeIntro: "This is the most distinctive HBM process: configuration and cost rules become lot-specific workfile lines, budgets and supplier commitments.",
    jdeModules: [["primary", "HBM Lot Start", "Resolves the configuration against bids/takeoffs and creates reviewed lot-specific workfile lines."], ["adjacent", "Procurement / Subcontracts", "Creates and controls supplier commitments, changes, receipts and commercial status."], ["adjacent", "Job Cost / AP / GL", "Compares budget, commitments and actuals and posts lot-level construction WIP."], ["external", "Field scheduling", "Owns detailed trade sequence, mobile collaboration, inspections and photos."]],
    jdeReferences: [
      ["Lot readiness and workbench", "P44H200A · P44H201", "F44H201 · F44H002", "Review the lot, configuration, status and construction activity context."],
      ["Lot Start generation and review", "R44H700 · P44H711", "F44H71W1 proof · F44H711 final workfile", "Proof validates without saving final lines; final creates the workfile. Resolve Supplier TBD, holds, quantities, cancellations and history before commitment generation."],
      ["Field package outputs", "R44H7003 Configuration List + configured Notice to Proceed", "Configured report output + JDE lot/document IDs", "Provide the field with the approved home configuration, buyer options and controlled authorization to proceed."],
      ["Commitment generation", "R44H7113 · P4310", "F4301 · F4311 · F43199 · F0902", "Generate purchase orders/subcontracts and expose detail plus configured commitment balances."],
      ["After-start changes", "P44H703", "F44H711P · F44H711", "Stage extra or external purchase-order changes before controlled commitment processing."],
      ["Voucher alternatives", "P0411 · P44H702 · R44H702 · P4314", "F0411 · F0911 · F43199", "Choose manual, workbench, batch/auto or receipt-based vouchering according to evidence, approval and configuration—not convenience."],
      ["Actual cost and inquiry", "P512000", "F0411 · F0911 · F0902", "Compare approved budget, commitment balances, actuals and projected final cost."],
      ["Field integration", "P44H9903 · P44H9904 · Orchestrator/AIS", "F44H790 · JDE document IDs · external event IDs", "Send governed lot and commitment data to scheduling, and receive approved milestone events without making the field tool the financial ledger."]
    ],
    quiz: { question: "What does commitment generation normally create before a supplier invoice exists?", options: ["A purchase order/subcontract and commitment visibility", "A home-sale closing journal", "A warranty claim"], answer: 0, explanation: "Commitment generation creates procurement documents and commitment visibility. AP and actual cost arise later through approved execution and vouchering." },
    record: ["Active home / construction job", "Workfile, budget, commitments, field milestones, actuals and forecast"]
  },
  {
    slug: "close-transfer", short: "Close & transfer", phase: "Settlement and ownership",
    title: "Close, transfer and recognize", question: "How does a completed home become a legally transferred, financially closed sale?",
    summary: "The closing team reconciles the buyer agreement, deposits, lender/title conditions and final settlement statement, confirms legal transfer and funding, then posts the approved revenue, cost and cash consequences.",
    outcome: "Title has transferred to the buyer, proceeds and deposits reconcile, revenue and cost are posted, and the homeowner/warranty handoff is complete.",
    input: "Completed home, buyer contract, deposits and approved settlement package", output: "Legally transferred and financially posted home", consumer: "Warranty / Customer Care",
    story: "Lot 27 is physically ready, but the sale is not complete until legal and financial conditions converge. The title/escrow platform manages the legal closing workflow and statement. Salesforce coordinates customer communications. JDE controls approved receipts and posting. The closing process must reconcile the executed contract, earnest-money deposits, settlement statement, funding, title-transfer evidence and the final inventory/WIP relief.",
    steps: [["Prepare to close", "Confirm inspections/occupancy, lender and title conditions, homeowner walkthrough and final price.", "P44H500/F44H501 provide the governed sale and close context; title, lender and occupancy evidence remain in specialist platforms."], ["Balance settlement", "Reconcile deposits, proceeds, taxes, commissions, concessions, adjustments and disbursements.", "P44H591 prepares the closing worksheet using F44H501/F44H401 and templates from P44H590/F44H590; F44H599 supports configured data mapping."], ["Fund and transfer", "Confirm escrow funding, signatures, legal transfer/recording and key release.", "Title/escrow is authoritative for funding and legal transfer. JDE receives only the approved settlement version and proof references."], ["Post and hand off", "Apply deposits, post revenue and cost of sales, close the operational record and activate warranty.", "P44H591 creates closing entries in F44H591 and the sales journal in F0911; P44H500 can populate F1201/F1217 and F1720/F1721 when Service Management is enabled."]],
    decisions: ["Are all legal and operational prerequisites complete?", "Does the approved settlement balance to contract and deposits?", "Has legal transfer actually occurred?"],
    pitfalls: ["Posting from a draft settlement statement", "Deposits do not reconcile to the buyer contract", "Warranty begins without a governed closed-home snapshot"],
    roles: [["Closing / title / escrow", "Owns legal workflow, statement, funding and transfer evidence."], ["Salesforce / customer team", "Owns communication, appointments and buyer-facing readiness."], ["Finance", "Owns receipts, balanced journals, revenue, COGS and cash reconciliation."], ["Warranty", "Accepts the homeowner, home configuration, dates and open items."]],
    handoffs: [["JDE HBM", "Title / escrow", "Sale reference, legal parties, address, price, deposits and prerequisites"], ["Title / escrow", "JDE", "Approved statement version, funds, disbursements, adjustments and transfer proof"], ["JDE", "Salesforce", "Posted close, final status and customer-lifecycle milestone"], ["JDE / HBM", "Warranty", "Closed home, owner, configuration, close date and open items"]],
    jdeIntro: "Specialist platforms coordinate legal settlement; JDE retains the posted financial result and the auditable link back to the home and buyer.",
    jdeModules: [["primary", "HBM sale / closing context", "Connects the home, buyer, contract economics and operational close status."], ["adjacent", "AR + General Accounting", "Applies deposits/proceeds and posts approved revenue, cost of sales and cash consequences."], ["adjacent", "Job Cost", "Provides accumulated home cost and supports WIP/inventory-to-cost-of-sales reconciliation."], ["external", "Title / escrow + Salesforce", "Owns legal workflow, funding coordination and buyer engagement."]],
    jdeReferences: [
      ["Sale and close context", "P44H500 Sales Workbench", "F44H501 · F44H501H", "Hold the governed buyer, configuration, sale dates, status and closing history."],
      ["Closing template", "P44H590", "F44H590 · F44H599", "Define account instructions and configured mappings for the community closing worksheet."],
      ["Closing worksheet and journal", "P44H591 (W44H591A / W44H591C)", "F44H591 · F0911", "Balance in proof mode, then create the approved sales journal."],
      ["Deposits and proceeds", "Configured AR and receipt processing", "F03B11 + related receipt tables", "Reconcile customer deposits and proceeds to the approved settlement package."],
      ["Optional warranty population", "P44H500 Warranty Management (W44H500K)", "F1201 · F1217 · optionally F1720/F1721", "Create install-base and service-contract records only when Service Management is licensed and configured."],
      ["Legal closing", "Title / escrow platform + Orchestrator/AIS", "Settlement version · funding reference · recording evidence", "The specialist platform owns legal workflow; JDE owns the posted financial result."]
    ],
    quiz: { question: "Who should own the final posted revenue and cost-of-sales facts?", options: ["The title portal", "Salesforce", "JDE Financials"], answer: 2, explanation: "Title/escrow owns legal settlement workflow and Salesforce owns engagement, but JDE Financials owns posted accounting facts." },
    record: ["Closed home", "Legal owner, close date, posted sale, relieved cost basis and warranty start"]
  },
  {
    slug: "warranty", short: "Support owner", phase: "Post-close service",
    title: "Support the homeowner and learn", question: "How does the builder resolve defects and improve the next home?",
    summary: "Customer Care receives requests, checks coverage, diagnoses the issue, dispatches internal or trade work, tracks completion and cost, and feeds root-cause learning back to product, quality and purchasing.",
    outcome: "The claim is resolved, the homeowner is informed, cost/recovery is recorded and reusable defect learning is captured.",
    input: "Closed-home snapshot, coverage terms and homeowner request", output: "Resolved claim, cost, recovery and quality feedback", consumer: "Product / Estimating / Quality",
    story: "After move-in, the Lot 27 homeowner reports a window leak. The warranty platform links the case to the closed home, configuration and responsible trade. A coverage decision is made by policy and authorized staff—not by AI. The repair may use an internal work order or a supplier purchase order. JDE records approved commercial and financial facts, while the customer platform owns communication and appointments.",
    steps: [["Receive and classify", "Identify the home, claimant, issue, urgency, evidence and warranty policy version.", "External warranty/CRM normally owns intake. If JDE Case Management is used, P17500 provides the case-entry path."], ["Decide coverage", "Confirm eligibility, responsibility and the approved repair path.", "P1723 can support entitlement inquiry; F1201/F1217 and F1720/F1721 hold optional install-base and contract context."], ["Dispatch and resolve", "Create internal or supplier work, schedule access, capture completion and homeowner acknowledgement.", "P17714/P48201 create and manage service work orders in F4801/F4801T/F4817; P4310/F4301/F4311 supports supplier repair work."], ["Account and learn", "Record repair cost/recovery and standardize defect, cause, remedy, product and trade feedback.", "F0411/F0911 capture approved cost; correlate case, work order, supplier and defect codes for recovery and analysis."]],
    decisions: ["Is the issue covered?", "Internal repair, supplier callback or paid external work?", "Is a back-charge or recovery supportable?"],
    pitfalls: ["No connection to the original home configuration", "Repair cost is posted without a case/work reference", "Free-text defects cannot be analyzed across communities"],
    roles: [["Customer Care", "Owns communication, triage, appointments and closure."], ["Warranty manager", "Owns coverage and responsibility decisions."], ["Trade / technician", "Performs and documents the remedy."], ["Finance / quality", "Records cost/recovery and turns patterns into prevention."]],
    handoffs: [["Homeowner portal", "Warranty team", "Home, issue, urgency, evidence and preferred contact"], ["Warranty", "JDE / supplier", "Approved work, scope, responsibility, dates and cost authority"], ["JDE", "Warranty", "PO/work/payment and posted-cost status"], ["Warranty analytics", "Product / quality", "Standard defect, cause, remedy, trade and cost pattern"]],
    jdeIntro: "JDE can support work, procurement, inventory and financial control, but many builders use a specialist warranty platform for the homeowner and field experience.",
    jdeModules: [["external", "Warranty / CRM service", "Owns cases, coverage workflow, appointments, communication and homeowner experience."], ["adjacent", "Procurement / AP", "Controls approved supplier repair work, invoices, payment and recoveries."], ["adjacent", "Work Orders / Inventory", "Optionally controls internal work and parts where licensed/configured."], ["adjacent", "Financials / Analytics", "Posts warranty cost or provision usage and provides quality feedback facts."]],
    jdeReferences: [
      ["Install base and warranty contracts", "P44H500 Warranty Management · P1702", "F1201 · F1217 · F1720 · F1721", "Optional JDE Service Management path populated after sale closing."],
      ["Case and entitlement", "P17500 · P1723", "Configured Case Management and service-contract records", "Use only when licensed/configured; many builders keep homeowner cases in a specialist portal."],
      ["Service work order", "P17714 · P48201", "F4801 · F4801T · F4817", "Control internal service work, assignment and service-specific work-order detail."],
      ["Supplier repair", "P4310", "F4301 · F4311 · F43199", "Authorize supplier callback or paid external work with controlled commitments."],
      ["Cost and recovery", "AP / GL processing", "F0411 · F0911", "Post approved warranty cost and supported supplier recovery according to policy."],
      ["Homeowner experience", "Warranty / CRM service platform + Orchestrator/AIS", "Case ID · home/install-base ID · JDE document IDs", "Keep communication and appointments in the engagement platform while JDE retains approved commercial facts."]
    ],
    quiz: { question: "Which platform should normally own the homeowner conversation and appointment experience?", options: ["The warranty/CRM service platform", "The General Ledger", "The lot-start workfile"], answer: 0, explanation: "The warranty or CRM service platform usually owns the engagement experience. JDE retains approved work, procurement, inventory and financial facts." },
    record: ["Homeowner service history", "Case, coverage, work, cost, recovery, defect cause and remedy"]
  }
];

const foundationControlItems = [
  ["P44H001 · Homebuilder constants", "Set company-level HBM behavior and defaults before communities, sales and Lot Start processing begin."],
  ["P44H002 · Activity rules", "Define permitted sales and construction status transitions, required sequencing and the history expected for each lot."],
  ["UDCs and document types", "Govern activity codes, trade codes, option/takeoff reasons, order types, statuses and reporting classifications."],
  ["Job and account templates", "Standardize the business-unit hierarchy, cost codes, cost types, budget ledgers and posting rules copied to communities and lots."],
  ["Versions and processing options", "Control proof/final behavior, defaults, selection, update paths and batch execution. Treat versions as governed configuration."],
  ["Security and approvals", "Separate master-data maintenance, exception release, commitment generation, vouchering and closing authority." ]
];

const statusModel = [
  ["Available", "Lot and product are approved for customer selection.", "Lot release gate"],
  ["Reserved", "A time-bound buyer hold has been accepted by the authoritative lot process.", "Reservation expiry / release"],
  ["Sold", "An executed agreement and governed configuration exist.", "Contract + buyer identity"],
  ["Under construction", "Start gates passed and the home entered vertical execution.", "Lot Start + start authorization"],
  ["Complete", "Construction and required inspections are complete; close exceptions are visible.", "Completion / occupancy evidence"],
  ["Closed", "Legal transfer and approved financial posting are complete.", "Closing worksheet + transfer proof"]
];

const reportGroups = [
  {
    title: "Sales and closing",
    reports: [
      ["R44H5000", "Weekly Sales", "Review current sales activity and operational movement."],
      ["R44H5003", "Backlog", "Monitor contracted homes that have not yet closed."],
      ["R44H5004", "Projected Closings", "Coordinate expected closings, workload and cash timing."],
      ["R44H5005", "Cancellations / Transfers", "Review buyer cancellations and lot or contract transfers."],
      ["R44H5006", "Detail Sales Status", "Inspect detailed home-sale status and supporting attributes."]
    ]
  },
  {
    title: "Cost and purchasing",
    reports: [
      ["R44H6001", "Bid Contract Price Variance", "Find differences between expected and effective bid pricing."],
      ["R44H6002", "Bid Form / Contract Confirmation", "Support bid review and supplier confirmation."],
      ["R44H6003", "Base House Cost by Plan", "Compare modeled cost across plans and communities."],
      ["R44H6004", "Option Cost Analysis", "Review cost impact of options and configuration choices."],
      ["R44H6006", "Option Cost by Option", "Inspect cost detail for individual options."],
      ["R44H6007 / R44H6009", "Supplier comparisons", "Compare bid suppliers and review bid content by supplier."]
    ]
  },
  {
    title: "Lot Start and field package",
    reports: [
      ["R44H700", "Lot Start Workfile Generation", "Resolve the approved configuration against effective bids and takeoffs in proof or final mode."],
      ["R44H7003", "Configuration List", "Produce the field-facing configuration list—often called the garage sticker."],
      ["R44H7113", "Commitment Generation", "Create controlled purchase orders and subcontracts from reviewed workfile lines."],
      ["Configured output", "Notice to Proceed", "Issue the approved authorization and scope package using the builder's controlled form and process."]
    ]
  }
];

const stagePractitionerPanels = {
  "land-opportunity": [
    {
      title: "From underwriting to an HBM pro forma",
      intro: "Keep the detailed land investment model in its governed source. After approval, P44H102 can express the operating assumptions needed to evaluate community profitability inside the homebuilding context.",
      items: [
        ["External underwriting", "Parcel strategy, timing, financing, scenario analysis and acquisition conditions remain in the approved modeling source."],
        ["P44H102 Community Pro Forma", "Compare plan mix, lot premiums, option revenue, direct construction cost and land/development assumptions."],
        ["Controlled handoff", "Carry the approved model version, assumptions, approval reference and effective date so Finance can reconcile later changes."]
      ]
    }
  ],
  "land-development": [
    {
      title: "Refresh profitability before phase release",
      intro: "Horizontal cost, lot yield and product mix change during development. The release decision should compare the current governed assumptions—not the original deal model alone.",
      items: [
        ["Update", "Approved lot yield, lot mix, developed-lot basis, premiums and revised direct-cost assumptions."],
        ["Compare", "Current community pro forma against the investment baseline and Job Cost commitments/actuals."],
        ["Decide", "Release, re-phase, re-price or hold—with the decision and model version retained as evidence."]
      ]
    }
  ],
  "lot-product": [
    {
      title: "Build the material-item foundation first",
      intro: "A takeoff cannot create reliable demand if its material items are not governed. Establish the item and its homebuilder attributes before quantity rules are authored.",
      items: [
        ["1 · EnterpriseOne item", "P44H600 works with F4101 item identity and the F44H4101 homebuilder-specific extension."],
        ["2 · Purchasing attributes", "Confirm branch/plant, unit of measure, supplier strategy, cost and effective dates required by the implementation."],
        ["3 · Takeoff use", "Reference governed items in cumulative plan, elevation and option quantity rules; do not hide new items inside free-text descriptions."]
      ]
    },
    {
      title: "How selection logic resolves",
      intro: "Bids and takeoffs solve different problems. The configuration may use less-specific '+' values as controlled fallbacks, but effective dates and precedence must still produce an explainable result.",
      items: [
        ["Bid selection", "Search from the most specific eligible combination toward a broader configured fallback and select the applicable supplier/trade price."],
        ["Takeoff accumulation", "Accumulate every applicable quantity row across base plan, elevation, structural choice and selected option."],
        ["Control test", "For one test lot, document why the winning bid was selected and how every material quantity was accumulated."]
      ]
    }
  ],
  "sell-configure": [
    {
      title: "Read the contract price as a stack",
      intro: "The buyer sees one contract total, but the business must preserve the components that explain margin, approvals and later changes.",
      items: [
        ["Base home", "The approved starting price for the selected plan and community."],
        ["Lot and elevation premiums", "Location and exterior-design adjustments that should remain separately explainable."],
        ["Options and upgrades", "Buyer selections with effective sell price, cost effect, tax treatment and cutoff status."],
        ["Incentives and concessions", "Approved reductions or credits with reason, authority and version history."],
        ["Deposits", "Cash received or customer-ledger activity applied according to policy; a deposit is not automatically earned revenue."],
        ["Net contract baseline", "The revision-controlled total accepted for downstream planning, closing and margin analysis."]
      ]
    },
    {
      title: "Freeze the construction baseline deliberately",
      intro: "Sales can continue to serve the buyer while construction protects scope. Each cutoff should identify what is frozen, who may approve an exception and which downstream records must be regenerated or changed.",
      items: [
        ["Structural cutoff", "Freeze choices that affect engineering, permits, foundation, framing or long-lead commitments before Lot Start."],
        ["Design-center cutoff", "Freeze coordinated finish packages after compatibility, price and availability validation."],
        ["Late-change exception", "Require impact review for price, cost, schedule, permit and existing commitment consequences."],
        ["Accepted version", "Pass one configuration version—with buyer/spec identity, plan, elevation, swing and option lines—to Lot Start."]
      ]
    }
  ],
  "build-home": [
    {
      title: "Lot Start deliverables",
      intro: "Commitments are only one output. The field also needs a controlled description of what to build and evidence that the work is authorized.",
      items: [
        ["Configuration List · R44H7003", "Field-facing plan, elevation and approved buyer-option detail—the commonly named garage sticker."],
        ["Notice to Proceed", "Configured authorization that communicates scope, timing and commercial permission to the trade."],
        ["PO / subcontract package", "F4301/F4311 commitments with supplier, lot job, scope, quantity, dates and price traceable to the workfile."]
      ]
    },
    {
      title: "Workfile exception controls",
      intro: "P44H711 is an exception-control step, not a ceremonial review. Resolve the conditions below before R44H7113 creates legal commitments.",
      items: [
        ["Supplier TBD", "Assign the approved supplier or hold the line; never allow a placeholder to become an unowned field obligation."],
        ["Hold / release", "Retain an explicit reason, owner and release condition for lines blocked by design, permit, price or scope uncertainty."],
        ["Quantity revision", "Capture the approved reason and verify that the revised quantity still agrees with the configured home."],
        ["Cancel / history", "Cancel superseded work in a way that preserves the audit trail and correctly relieves or replaces related commitments."]
      ]
    },
    {
      title: "Choose the voucher path by evidence",
      intro: "The correct path depends on how completion is approved, how the supplier invoices and what control the builder requires.",
      items: [
        ["P0411 · Standard voucher", "Use for controlled AP entry when invoice evidence and account distribution are approved outside an automated HBM path."],
        ["P44H702 · Voucher Workbench", "Review eligible HBM purchasing activity and resolve exceptions before voucher creation."],
        ["R44H702 · Auto Voucher", "Create vouchers in batch only when milestone, supplier, log, amount and approval controls are reliable."],
        ["P4314 · Voucher Match", "Match invoice or approved progress against the procurement document where the configured receipt/progress process requires it."]
      ]
    },
    {
      title: "Field scheduling integration",
      intro: "JDE remains authoritative for governed lots and commercial commitments. The scheduling platform owns detailed trade sequence and field collaboration.",
      items: [
        ["P44H9903 · Lot outbound", "Publish the governed lot, configuration and status context required by the field platform."],
        ["P44H9904 · Commitment outbound", "Publish released purchase-order/subcontract content and revisions with stable JDE document keys."],
        ["F44H790 · Third-party milestones", "Receive and map approved external milestone activity so HBM can update governed status and trigger configured follow-on controls."],
        ["Control envelope", "Use correlation IDs, idempotency, acknowledgements, retry/error queues and reconciliation so no event silently disappears or posts twice."]
      ]
    }
  ]
};

const salesBusinessSequence = [
  ["Discover", "Salesforce records interest and buyer activity. No lot is locked."],
  ["Request", "Sales asks JDE HBM to reserve a specific eligible lot."],
  ["Accept hold", "HBM accepts or rejects the request and returns an authoritative expiry."],
  ["Contract", "The parties execute the approved agreement and its price baseline."],
  ["Configure", "Plan, elevation, premiums, incentives and options are version controlled."],
  ["Freeze & release", "Cutoffs are complete and one accepted configuration moves to Lot Start."]
];

const salesforceIntegrationContract = {
  title: "Salesforce–JDE integration contract",
  intro: "The rows below are a recommended architecture pattern—not standard out-of-the-box behavior. Define the authority, trigger, identifiers and response before building the interface.",
  headers: ["Flow", "Trigger", "Authoritative owner", "Minimum contract", "Required response / control"],
  rows: [
    ["JDE → Salesforce inventory", "Lot or product availability changes", "JDE HBM for accepted operational status", "Community, lot, product eligibility, price/effective date, JDE version", "Upsert acknowledgement; stale-version rejection; reconciliation count"],
    ["Salesforce → JDE reservation", "Sales user requests a hold", "JDE HBM decides acceptance", "CRM opportunity/buyer, lot, requested expiry, user, correlation ID", "Accepted/rejected response with JDE sale reference, reason and authoritative expiry"],
    ["JDE → Salesforce reservation result", "HBM accepts, releases or expires a hold", "JDE HBM", "JDE sale reference, lot, status, effective timestamp, correlation ID", "CRM confirmation; exception queue if the matching opportunity is missing"],
    ["Salesforce / design → JDE contract", "Executed agreement or approved selection revision", "Signed document platform for evidence; HBM for accepted configuration", "Buyer, contract version, plan/elevation/options, premiums, incentives, cutoffs", "Validation result with rejected lines and accepted configuration version"],
    ["JDE → Salesforce financial milestone", "Deposit posted or home closed", "JDE Financials for posted fact", "Amount/status only as needed, JDE document, posting date, close milestone", "CRM acknowledgement; no autonomous change to the posted accounting fact"]
  ]
};

const practiceExercises = {
  "land-opportunity": ["Classify control versus ownership", "Given an option agreement, parcel ID and approval memo, identify which system owns the opportunity, title evidence and posted financial consequence.", "A one-page ownership matrix that does not treat an option as a deed transfer."],
  "land-development": ["Reconcile the development job", "For one horizontal contract, trace original budget, approved change, commitment detail, certified progress, AP and actual cost.", "The remaining commitment and project balance agree to the supporting commercial evidence."],
  "lot-product": ["Explain one configured cost", "Choose one material item and trace item setup, takeoff quantities, bid selection, supplier assignment and effective dates for Lot 27.", "Another practitioner can reproduce both the selected price and accumulated quantity."],
  "sell-configure": ["Control a buyer commitment", "Draft the Salesforce request and JDE response for a 48-hour hold, then reconcile base price, premiums, options, incentives and deposit status before naming the configuration version released to Lot Start.", "A duplicate request cannot create two reservations; the contract total is explainable; deposits are not treated as revenue; and downstream teams receive one accepted configuration version."],
  "build-home": ["Clear a Lot Start exception", "Review a Supplier TBD workfile line, determine its owner, resolve or hold it, and choose the evidence required before commitment and voucher creation.", "The line has an approved supplier or explicit hold; later PO and voucher paths remain traceable."],
  "close-transfer": ["Balance the closing package", "Reconcile executed contract, deposits, settlement statement, funded proceeds, transfer proof and the proposed JDE closing journal.", "No draft settlement amount posts, deposits are neither omitted nor duplicated, and legal transfer is evidenced."],
  "warranty": ["Trace a callback to learning", "Follow one defect from homeowner case through coverage, work order or supplier PO, posted cost/recovery and root-cause code.", "The case, home, responsible trade, remedy and financial outcome can be analyzed together."]
};

const glossary = [
  ["Acquisition", "The process of identifying, controlling, approving and obtaining rights to land or finished lots."],
  ["Site control", "A contractual right—such as an option or purchase agreement—that may exist before legal title transfers."],
  ["Entitlement", "Government approval that permits a planned land use, density or subdivision."],
  ["Horizontal development", "Land work such as grading, roads, utilities, drainage and common infrastructure."],
  ["Vertical construction", "Building the house itself: foundation, framing, MEP, finishes and completion."],
  ["Community / phase / lot", "The hierarchy that moves from a development, to a delivery phase, to an individual home site."],
  ["Plan / elevation", "The floor plan and exterior architectural style of a home."],
  ["Option", "A buyer- or spec-selected feature that changes price, materials, scope or schedule."],
  ["Reservation", "A time-bound, accepted hold on a specific lot. Customer interest in CRM is not a reservation until the authoritative lot process accepts it."],
  ["Configuration baseline", "The approved plan, elevation, swing, options, premiums, incentives and effective version released to downstream planning."],
  ["Option cutoff", "The last point at which a category of buyer choices may change without a formally approved exception."],
  ["Bid", "Supplier/trade pricing logic used to determine who should perform work and at what agreed cost."],
  ["Takeoff", "The accumulated quantity of materials or assemblies needed for a configured home."],
  ["Lot Start", "The HBM process that converts a home configuration and cost rules into lot-specific workfile lines and commitments."],
  ["Commitment", "Authorized supplier spend, normally represented by a purchase order or subcontract before an invoice becomes AP."],
  ["WIP", "Work in process: qualifying accumulated cost held before the home is closed or otherwise recognized under policy."],
  ["Cost of sales", "The accumulated land, development and construction cost relieved when the home sale is recognized."],
  ["Escrow", "A controlled closing arrangement that holds and disburses funds/documents when agreed conditions are satisfied."],
  ["Back-charge", "An approved recovery or offset against a responsible supplier for damage, rework or another contractual obligation."],
  ["System of record", "The application authorized to own a specific business fact—not necessarily every screen where that fact appears."],
  ["Orchestrator / AIS", "JDE integration capabilities that expose validated business actions and data without making an external system the ERP ledger."]
];

let currentStage = 0;
let currentTab = "understand";
let currentMode = "beginner";
let completed = new Set();
try { completed = new Set(JSON.parse(localStorage.getItem("homebuildingLearningCompleted") || "[]")); } catch { completed = new Set(); }

const stageRail = document.getElementById("stageRail");
const panel = document.getElementById("lessonPanel");
const tabButtons = [...document.querySelectorAll("[data-tab]")];
const modeButtons = [...document.querySelectorAll("[data-mode]")];

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
      ${currentMode === "practitioner" ? `<article class="support-card jde-glance"><h4>JDE apps &amp; files</h4><p class="jde-glance-intro">Key EnterpriseOne objects and how the business uses them in this stage.</p><div class="jde-glance-list">${stage.jdeReferences.slice(0,3).map(item => `<section class="jde-glance-item"><strong>${item[0]}</strong><div class="jde-object-line"><span>App</span><code>${item[1]}</code></div><div class="jde-object-line"><span>File</span><code>${item[2]}</code></div><p>${item[3]}</p></section>`).join("")}</div><button class="jde-glance-link" type="button" data-open-jde>Open the full stage reference <span aria-hidden="true">→</span></button></article>` : ""}
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
  return `<div class="jde-intro"><strong>JDE in this stage</strong><p>${stage.jdeIntro}</p></div><div class="jde-module-grid">${stage.jdeModules.map(item => `<article class="jde-module-card ${item[0]}"><span>${item[0] === "primary" ? "JDE HBM" : item[0] === "adjacent" ? "Adjacent JDE" : "Specialist / integration"}</span><h4>${item[1]}</h4><p>${item[2]}</p></article>`).join("")}</div><section class="technical-reference" ${currentMode === "practitioner" ? "" : "hidden"}><div class="reference-heading"><div><strong>JDE application and file reference</strong><p>Representative EnterpriseOne 9.2 objects. Validate ESUs, processing options, licensing and local configuration.</p></div><a href="https://docs.oracle.com/en/applications/jd-edwards/project-management/9.2/eoahm/toc.htm" target="_blank" rel="noopener noreferrer">Oracle HBM guide <span aria-hidden="true">↗</span></a></div><div class="reference-table" role="table" aria-label="JDE applications, programs and tables for this stage"><div class="reference-row reference-head" role="row"><span role="columnheader">Capability</span><span role="columnheader">Applications / reports</span><span role="columnheader">Tables / files</span><span role="columnheader">How it supports the process</span></div>${stage.jdeReferences.map(item => `<div class="reference-row" role="row"><strong role="rowheader">${item[0]}</strong><span role="cell"><code>${item[1]}</code></span><span role="cell"><code>${item[2]}</code></span><span role="cell">${item[3]}</span></div>`).join("")}</div></section>${practitionerStageView(stage)}`;
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
  document.getElementById("foundationControls").innerHTML = foundationControlItems.map((item,index) => `<article><span>${String(index+1).padStart(2,"0")}</span><div><strong>${item[0]}</strong><p>${item[1]}</p></div></article>`).join("");
  document.getElementById("statusFlow").innerHTML = statusModel.map((item,index) => `<article><span>${String(index+1).padStart(2,"0")}</span><strong>${item[0]}</strong><p>${item[1]}</p><small>${item[2]}</small></article>`).join("");
  document.getElementById("reportGroups").innerHTML = reportGroups.map(group => `<article class="report-group"><h5>${group.title}</h5><div>${group.reports.map(report => `<section><code>${report[0]}</code><strong>${report[1]}</strong><p>${report[2]}</p></section>`).join("")}</div></article>`).join("");
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

const initial = new URL(location.href);
const stageIndex = stages.findIndex(stage => stage.slug === initial.searchParams.get("stage"));
const requestedTab = initial.searchParams.get("lesson");
const requestedMode = initial.searchParams.get("mode");
currentStage = stageIndex >= 0 ? stageIndex : 0;
currentTab = ["understand","people","jde","check"].includes(requestedTab) ? requestedTab : "understand";
currentMode = ["beginner","practitioner"].includes(requestedMode) ? requestedMode : "beginner";
tabButtons.forEach(button => { const selected = button.dataset.tab === currentTab; button.setAttribute("aria-selected", String(selected)); button.tabIndex = selected ? 0 : -1; });
modeButtons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.mode === currentMode)));
renderPractitionerToolkit();
syncModeVisibility();
selectStage(currentStage, false);
renderGlossary();
