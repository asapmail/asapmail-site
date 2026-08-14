import type { Metadata } from "next";
import Link from "next/link";
import { SavingsCalculator } from "./calculator";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ASAP Mail — AI Email Production System",
  description: "A brand-trained AI production system that turns an email brief into copy, design and responsive HTML in one workflow.",
};

const audiences = [
  ["CRM & retention teams", "Increase campaign output without adding another production handoff."],
  ["Email marketers", "Create, revise and export branded email without writing HTML."],
  ["Marketing agencies", "Scale multi-brand production without scaling design and development headcount at the same rate."],
  ["E-commerce & DTC", "Ship frequent promotional and lifecycle messages from a reusable brand system."],
  ["SaaS, FinTech & digital", "Build onboarding, product education and reactivation messages around real product moments."],
  ["Lean marketing teams", "Replace the routine designer-to-developer chain for day-to-day email production."],
];

const outputs = ["Promotional emails", "Newsletters & digests", "Welcome series", "Triggered emails", "Transactional messages", "Reactivation campaigns", "Master templates", "Brand module libraries"];

const workflow = [
  ["01", "Learn the brand", "Share brand files, existing emails, references and technical constraints."],
  ["02", "Build the system", "We configure reusable modules, layout rules, responsive behavior and production instructions."],
  ["03", "Describe the email", "Your marketer writes the task in normal language and adds the content or objective."],
  ["04", "Generate & revise", "The system creates copy, design and preview; feedback is handled in the same workspace."],
  ["05", "Complete & export", "Fix the approved production version and receive responsive HTML ready for your workflow."],
];

const comparison = [
  ["Production flow", "Copywriter → designer → developer", "One guided workflow"],
  ["Lead time", "Days or weeks across queues", "Target: hours for routine work"],
  ["Commercial model", "Pay for each email and revision", "One-time setup + usage plan"],
  ["Brand consistency", "Depends on every handoff", "Reusable rules and modules"],
  ["Team autonomy", "New ticket for every change", "Marketer iterates directly"],
];

const setupPlans = [
  { name: "Foundation", price: "$590", note: "For a focused first use case", items: ["Brand and email audit", "Core visual rules", "One master-template direction", "Reusable essential modules", "One pilot email", "Team handover"] },
  { name: "Brand system", price: "$790", featured: true, note: "Best starting point for a working team", items: ["Everything in Foundation", "Expanded component library", "Multiple content patterns", "Responsive behavior rules", "Three pilot email types", "Team onboarding session"] },
  { name: "Multi-format", price: "$990", note: "For broader production needs", items: ["Everything in Brand system", "Multiple template structures", "Lifecycle and promotional patterns", "Extended snippet library", "Complex responsive cases", "Priority implementation"] },
];

const usagePlans = [
  ["Starter", "Up to 5 completed production versions", "For one marketer or a controlled pilot"],
  ["Team", "Up to 15 completed production versions", "For recurring campaign and lifecycle work"],
  ["Scale", "Up to 40 completed production versions", "For high-volume teams and multiple streams"],
  ["Agency / Enterprise", "Custom brands, users and volume", "For multi-client or governed environments"],
];

const faqs = [
  ["Do we still need a designer or developer?", "Not for the routine emails covered by the configured system. New art directions, complex custom interactions or unsupported edge cases may still require specialist work."],
  ["Which email platforms are supported?", "The output is responsive HTML designed for common ESP workflows. Exact compatibility with Customer.io, Klaviyo, Braze, Iterable, HubSpot, Salesforce Marketing Cloud or another platform is confirmed during setup."],
  ["Can we use our existing master template?", "Yes. We can audit and convert an existing master template into reusable system rules and modules instead of starting from zero."],
  ["How is usage counted?", "Drafting and iteration do not become a production credit by themselves. A credit is used when an approved version is completed and its working HTML is unlocked for export."],
  ["What if the result is not right?", "The email remains in draft while you revise it. The setup scope includes agreed pilot iterations; additional system-level redesigns are quoted separately."],
  ["Who owns the exported HTML?", "The client can use the completed HTML in its own email operations. Product access, system instructions and reusable platform logic remain governed by the service agreement."],
  ["Can we connect several brands?", "Yes. Each brand needs its own rules, component library and quality checks. Multi-brand access is handled through Agency or Enterprise scope."],
  ["Does it work with Outlook and mobile clients?", "The system is built around responsive email constraints and conservative markup. Target clients and test coverage are agreed during setup because rendering support differs by platform and version."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function EmailProductionPage() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#main">Skip to content</a>
      <header className={styles.header}>
        <Link className={styles.brand} href="/"><i /> ASAP MAIL</Link>
        <nav aria-label="Email production navigation">
          <a href="#system">System</a><a href="#economics">Economics</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a>
        </nav>
        <a className={styles.headerCta} href="https://t.me/starcv" target="_blank" rel="noopener noreferrer">Discuss implementation <Arrow /></a>
      </header>

      <main id="main">
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>PERSONAL AI EMAIL PRODUCTION / 01</p>
            <h1>From email brief to <em>brand-ready HTML.</em></h1>
            <p className={styles.heroLead}>A personalized AI production system that creates copy, design and responsive email HTML in one controlled workflow — trained on your brand, components and rules.</p>
            <div className={styles.actions}>
              <a className={styles.primaryButton} href="https://t.me/starcv" target="_blank" rel="noopener noreferrer">Discuss implementation <Arrow /></a>
              <a className={styles.secondaryButton} href="#workflow">See how it works ↓</a>
            </div>
            <div className={styles.heroFacts}><span>Brand-trained</span><span>Reusable modules</span><span>Responsive HTML</span></div>
          </div>
          <div className={styles.productionBoard} aria-label="Email production workflow from brief to responsive HTML">
            <div className={styles.boardHeader}><span>PRODUCTION RUN / LIVE</span><i /></div>
            <div className={styles.emailPreview}>
              <div className={styles.previewBar}><span /><span /><span /></div>
              <div className={styles.previewHero}><b>YOUR BRAND</b><strong>One brief.<br />A complete email.</strong><i /></div>
              <div className={styles.previewModules}><span /><span /><span /></div>
              <div className={styles.previewCta}>PRIMARY CTA</div>
            </div>
            <div className={styles.codePanel}><span>&lt;table role=&quot;presentation&quot;&gt;</span><span>&nbsp;&nbsp;&lt;td class=&quot;module hero&quot;&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;responsive content</span><span>&nbsp;&nbsp;&lt;/td&gt;</span><span>&lt;/table&gt;</span></div>
            <div className={styles.boardFooter}><span>DESKTOP ✓</span><span>MOBILE ✓</span><span>HTML READY</span></div>
          </div>
        </section>

        <section className={styles.problemSection}>
          <div className={styles.sectionTag}>THE PRODUCTION PROBLEM / 02</div>
          <div className={styles.problemIntro}><h2>One email should not need three separate production queues.</h2><p>Traditional production splits copy, design and HTML across people, tickets and approvals. Every handoff adds delay, cost and another chance for the brand to drift.</p></div>
          <div className={styles.costRail}>
            <div><span>01</span><strong>Copy</strong><p>Briefing, writing and revisions</p></div><b>→</b><div><span>02</span><strong>Design</strong><p>Layout, assets and approvals</p></div><b>→</b><div><span>03</span><strong>HTML</strong><p>Responsive build and fixes</p></div>
          </div>
          <div className={styles.benchmark}><strong>$100–200</strong><span>market benchmark for coding one email</span><strong>$474–949</strong><span>estimated full-cycle production benchmark</span><small>Planning benchmarks from prior market research; actual cost varies by scope, geography and QA requirements.</small></div>
        </section>

        <section className={styles.systemSection} id="system">
          <div className={styles.sectionTag}>WHAT THE PRODUCT IS / 03</div>
          <div className={styles.systemHeadline}><h2>Your brand becomes a reusable email-production system.</h2><p>Not a generic prompt and not another drag-and-drop template. The implementation encodes the client&apos;s visual language, approved components, content patterns and email constraints.</p></div>
          <div className={styles.systemGrid}>
            <article><span>INPUT</span><h3>Brand intelligence</h3><p>Guidelines, references, previous campaigns, modules and technical requirements.</p></article>
            <article><span>LOGIC</span><h3>Client-specific rules</h3><p>Layout behavior, typography, spacing, hierarchy, mobile states and quality constraints.</p></article>
            <article><span>OUTPUT</span><h3>Working production</h3><p>Copy, visual direction, responsive preview and exportable HTML in one flow.</p></article>
          </div>
        </section>

        <section className={styles.audienceSection}>
          <div className={styles.sectionTag}>BUILT FOR / 04</div><h2>For teams where email is a recurring commercial channel.</h2>
          <div className={styles.audienceGrid}>{audiences.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        </section>

        <section className={styles.outputSection}>
          <div className={styles.sectionTag}>WHAT YOU CAN CREATE / 05</div>
          <div className={styles.outputSplit}><div><h2>One system.<br />Every recurring email format.</h2><p>Use the same brand logic across campaigns, journeys and operational messages instead of rebuilding the visual language each time.</p></div><ul>{outputs.map((output, index) => <li key={output}><span>{String(index + 1).padStart(2, "0")}</span>{output}</li>)}</ul></div>
        </section>

        <section className={styles.workflowSection} id="workflow">
          <div className={styles.sectionTag}>HOW IT WORKS / 06</div><h2>Configure once. Produce repeatedly.</h2>
          <ol>{workflow.map(([number, title, body]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol>
        </section>

        <section className={styles.deliverablesSection}>
          <div className={styles.sectionTag}>WHAT THE CLIENT RECEIVES / 07</div>
          <div className={styles.deliverableGrid}>
            <div className={styles.deliverableLead}><h2>A production capability — not a pile of one-off files.</h2><p>The system stays useful after the initial setup because each new email can reuse the same approved building blocks and behavior.</p></div>
            {["Branded master template", "Reusable module library", "Production instructions", "Responsive HTML output", "Self-serve email workflow", "Consistent communication system"].map((item, index) => <div className={styles.deliverable} key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}
          </div>
          <div className={styles.examples}>
            <p>ILLUSTRATIVE MVP OUTPUTS — NOT CLIENT CASE STUDIES</p>
            {[ ["01", "Product launch", "Dynamic hero · feature modules · CTA hierarchy"], ["02", "Lifecycle onboarding", "Progressive education · tips · activation prompt"], ["03", "Weekly digest", "Editorial modules · repeatable sections · mobile scan"] ].map(([number, title, detail]) => <article key={number}><span>{number}</span><div className={styles.exampleMock}><i /><b>{title}</b><em /><em /><small>VIEW HTML</small></div><p>{detail}</p></article>)}
          </div>
        </section>

        <section className={styles.comparisonSection}>
          <div className={styles.sectionTag}>THE OPERATING DIFFERENCE / 08</div><h2>Replace handoffs with one controlled production loop.</h2>
          <div className={styles.comparisonTable}><div className={styles.tableHead}><span>FACTOR</span><span>TRADITIONAL PRODUCTION</span><span>ASAP MAIL SYSTEM</span></div>{comparison.map(([factor, traditional, system]) => <div className={styles.tableRow} key={factor}><strong>{factor}</strong><span>{traditional}</span><span>{system}</span></div>)}</div>
        </section>

        <section className={styles.economicsSection} id="economics">
          <div className={styles.sectionTag}>ECONOMICS / 09</div><div className={styles.economicsIntro}><h2>Use your own numbers. See where the production model changes.</h2><p>The calculator separates the one-time system setup from recurring usage and compares it with your current per-email production cost.</p></div>
          <SavingsCalculator />
        </section>

        <section className={styles.pricingSection} id="pricing">
          <div className={styles.sectionTag}>IMPLEMENTATION / 10</div><h2>The setup turns brand materials into a working production system.</h2>
          <div className={styles.planGrid}>{setupPlans.map((plan) => <article className={plan.featured ? styles.featuredPlan : undefined} key={plan.name}>{plan.featured && <span className={styles.recommended}>RECOMMENDED</span>}<h3>{plan.name}</h3><strong>{plan.price}</strong><p>{plan.note}</p><ul>{plan.items.map((item) => <li key={item}>↳ {item}</li>)}</ul></article>)}</div>
          <div className={styles.usageHeader}><h3>Usage plans</h3><p>Usage is based on completed or exported production versions — not every draft or conversation.</p></div>
          <div className={styles.usageGrid}>{usagePlans.map(([name, volume, note]) => <article key={name}><h4>{name}</h4><strong>{volume}</strong><p>{note}</p><a href="https://t.me/starcv" target="_blank" rel="noopener noreferrer">Request pilot pricing <Arrow /></a></article>)}</div>
          <p className={styles.creditRule}>A draft does not count as a finished email. Re-downloading the same completed version is free. A credit is used when a working production version is fixed and its HTML is unlocked.</p>
        </section>

        <section className={styles.scopeSection}>
          <div className={styles.sectionTag}>WORKING TERMS / 11</div>
          <div className={styles.scopeColumns}><div><h2>Clear setup. Clear boundary.</h2><p>Final scope, timeline, payment schedule and iterations are fixed before implementation.</p></div><div><h3>Included in setup</h3><ul><li>Brand and current-email review</li><li>System and module configuration</li><li>Responsive behavior rules</li><li>Agreed pilot emails and iterations</li><li>Team handover and instructions</li></ul></div><div><h3>Quoted separately</h3><ul><li>Uploading into the ESP</li><li>Campaign launch and operations</li><li>Segmentation and strategy</li><li>Analytics and reporting</li><li>Major new design directions</li></ul></div></div>
        </section>

        <section className={styles.faqSection} id="faq">
          <div className={styles.sectionTag}>FREQUENT QUESTIONS / 12</div><h2>What teams usually need to know before a pilot.</h2>
          <div className={styles.faqList}>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </section>

        <section className={styles.finalCta}>
          <p>START WITH ONE REAL EMAIL</p><h2>Turn a recurring production bottleneck into a capability your team owns.</h2><span>We can use one current brief to show how the system would learn your brand, handle revisions and produce working HTML.</span>
          <div className={styles.actions}><a className={styles.primaryButton} href="https://t.me/starcv" target="_blank" rel="noopener noreferrer">Request a one-email demo <Arrow /></a><a className={styles.secondaryButton} href="https://t.me/starcv" target="_blank" rel="noopener noreferrer">Discuss implementation</a></div>
        </section>
      </main>
      <footer className={styles.footer}><Link href="/">ASAP MAIL</Link><span>Personal AI email-production systems</span><a href="https://t.me/starcv" target="_blank" rel="noopener noreferrer">Telegram · @starcv</a></footer>
    </div>
  );
}
