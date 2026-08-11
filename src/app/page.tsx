const services = [
  {
    number: "01",
    title: "Lifecycle audit & roadmap",
    body: "A focused diagnostic of your stack, data, journeys, operating model, and the gaps worth fixing first.",
    deliverable: "Prioritized roadmap",
  },
  {
    number: "02",
    title: "Implementation & migration",
    body: "Workspace setup, event and attribute models, integrations, migration, tracking, and governance.",
    deliverable: "A usable foundation",
  },
  {
    number: "03",
    title: "Journey architecture",
    body: "Onboarding, activation, conversion, retention, renewal, reactivation, and win-back built as one system.",
    deliverable: "Connected journeys",
  },
  {
    number: "04",
    title: "Campaign production",
    body: "Strategy, copy, design, responsive builds, localization, quality assurance, and launch across channels.",
    deliverable: "Launch-ready messages",
  },
  {
    number: "05",
    title: "Optimization & experimentation",
    body: "Segmentation, testing, deliverability, reporting, and a disciplined backlog for continuous improvement.",
    deliverable: "A learning loop",
  },
  {
    number: "06",
    title: "Managed CRM operations",
    body: "Ongoing ownership of campaigns, journeys, production, platform operations, and performance reviews.",
    deliverable: "Senior execution",
  },
];

const process = [
  ["01", "Audit", "Goals, stack, data, current lifecycle, performance, constraints."],
  ["02", "Blueprint", "Event taxonomy, segments, journey map, channel roles, measurement."],
  ["03", "Build", "Integrations, workflows, templates, tracking, documentation."],
  ["04", "QA & launch", "Test profiles, edge cases, rendering, deliverability, release."],
  ["05", "Optimize", "Experiments, reporting, backlog, and continuous improvement."],
];

const experience = [
  {
    field: "SaaS & subscription",
    scope: "Activation systems",
    detail: "Onboarding, product education, conversion, retention, renewal, and reactivation across the customer lifecycle.",
  },
  {
    field: "FinTech",
    scope: "Behavior-led communication",
    detail: "Event-triggered programs where data quality, message governance, timing, and operational control matter.",
  },
  {
    field: "Web3 & digital products",
    scope: "Lifecycle operations",
    detail: "Cross-functional journey planning for fast-moving products with fragmented ownership and evolving data.",
  },
  {
    field: "E-commerce",
    scope: "Repeat purchase systems",
    detail: "Email and SMS programs spanning acquisition handoff, post-purchase, retention, and win-back.",
  },
];

const platformGroups = [
  {
    label: "Customer engagement",
    names: ["Customer.io", "Klaviyo", "Braze", "Iterable", "HubSpot", "ActiveCampaign", "Mautic"],
  },
  {
    label: "Data & integration",
    names: ["Twilio Segment", "APIs", "Webhooks", "Make", "Zapier"],
  },
  {
    label: "Commerce & messaging",
    names: ["Shopify", "Attentive", "Postscript"],
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" className={diagonal ? "arrow arrow-diagonal" : "arrow"} viewBox="0 0 20 20">
      <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function Mark() {
  return (
    <svg aria-hidden="true" className="brand-mark" viewBox="0 0 34 34">
      <path d="M7 25 17 6l10 19M11 18h12" fill="none" stroke="currentColor" strokeLinecap="square" strokeWidth="2.4" />
      <circle cx="7" cy="25" r="2.6" />
      <circle cx="17" cy="6" r="2.6" />
      <circle cx="27" cy="25" r="2.6" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Asapmail home">
          <Mark />
          <span>Asapmail</span>
        </a>
        <nav aria-label="Primary navigation" className="primary-nav">
          <a href="#services">Services</a>
          <a href="#system">System</a>
          <a href="#process">Process</a>
          <a href="#experience">Experience</a>
        </nav>
        <a className="header-cta" href="#contact">Request an audit <Arrow /></a>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span>Retention</span><span>CRM</span><span>Lifecycle</span></p>
            <h1 id="hero-title">Turn customer data into journeys that <em>keep people moving.</em></h1>
            <p className="hero-intro">We design and implement lifecycle systems across email, SMS, push, and in-app — from event architecture to launch and optimization.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Request a lifecycle audit <Arrow /></a>
              <a className="text-link" href="#process">See how we work <Arrow /></a>
            </div>
          </div>

          <div className="signal-board" aria-label="Lifecycle system: events flow through segments, journeys, and messages into retention">
            <div className="board-topline">
              <span>Lifecycle signal map</span>
              <span className="board-live"><i /> System view</span>
            </div>
            <div className="signal-flow">
              <div className="signal-stage stage-events">
                <span className="stage-index">01 / INPUT</span>
                <strong>Events</strong>
                <div className="event-list" aria-hidden="true">
                  <span><i /> trial_started</span>
                  <span><i /> feature_used</span>
                  <span><i /> plan_expiring</span>
                </div>
              </div>
              <div className="flow-line" aria-hidden="true"><i /><i /><i /></div>
              <div className="signal-stage stage-segments">
                <span className="stage-index">02 / LOGIC</span>
                <strong>Segments</strong>
                <div className="segment-stack" aria-hidden="true"><i /><i /><i /></div>
              </div>
              <div className="signal-stage stage-journeys">
                <span className="stage-index">03 / ORCHESTRATE</span>
                <strong>Journeys</strong>
                <div className="journey-route" aria-hidden="true"><i /><i /><i /><i /></div>
              </div>
              <div className="signal-stage stage-messages">
                <span className="stage-index">04 / DELIVER</span>
                <strong>Messages</strong>
                <div className="channel-pills" aria-hidden="true"><span>Email</span><span>SMS</span><span>Push</span><span>In-app</span></div>
              </div>
              <div className="retention-output">
                <span className="stage-index">05 / OUTCOME</span>
                <strong>Retention</strong>
                <span>Activate · retain · grow</span>
              </div>
            </div>
            <div className="board-caption"><span>One connected operating system</span><span>Events → outcomes</span></div>
          </div>

          <div className="compatibility-note">
            <span>Built for modern engagement stacks</span>
            <p>Customer.io, Klaviyo, Braze, and more. Platform names indicate familiarity and compatibility — not current partner status.</p>
          </div>
        </section>

        <section className="problem-section" aria-labelledby="problem-title">
          <div className="section-label"><span>01</span> The operating problem</div>
          <div className="problem-heading">
            <h2 id="problem-title">Your engagement stack should operate as a system — not a collection of disconnected campaigns.</h2>
          </div>
          <ul className="problem-list">
            <li><span>01</span><p>Campaigns stay manual, fragmented, or slow to launch.</p></li>
            <li><span>02</span><p>Events and attributes cannot support useful personalization.</p></li>
            <li><span>03</span><p>Critical onboarding and retention journeys have gaps.</p></li>
            <li><span>04</span><p>Ownership is split across product, data, marketing, and design.</p></li>
            <li><span>05</span><p>Templates, QA, reporting, and experiments do not scale.</p></li>
          </ul>
          <p className="problem-close">We close the space between product behavior and customer communication.</p>
        </section>

        <section className="services-section" id="services" aria-labelledby="services-title">
          <div className="section-heading-row">
            <div className="section-label light"><span>02</span> What we build</div>
            <div>
              <h2 id="services-title">Strategy that ships.<br />Systems that stay usable.</h2>
              <p>Senior hands-on execution across data, integrations, messaging, and ongoing operations.</p>
            </div>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
                <span className="service-output"><i /> {service.deliverable}</span>
              </article>
            ))}
          </div>
          <div className="channels-bar">
            <span>Core channels</span>
            <ul aria-label="Core channels"><li>Email</li><li>SMS / MMS</li><li>Mobile push</li><li>Web push</li><li>In-app</li></ul>
          </div>
        </section>

        <section className="system-section" id="system" aria-labelledby="system-title">
          <div className="section-label"><span>03</span> The lifecycle system</div>
          <div className="system-intro">
            <h2 id="system-title">One team owns the path from product signal to customer message.</h2>
            <p>Fewer handoffs. Clearer decisions. Faster launches. Every layer is designed to make the next one more precise.</p>
          </div>
          <ol className="system-steps">
            <li><span className="step-number">1</span><div><strong>Events</strong><p>Capture the product and customer behaviors that matter.</p></div><Arrow /></li>
            <li><span className="step-number">2</span><div><strong>Segments</strong><p>Translate behavior and context into useful audiences.</p></div><Arrow /></li>
            <li><span className="step-number">3</span><div><strong>Journeys</strong><p>Sequence moments across the complete lifecycle.</p></div><Arrow /></li>
            <li><span className="step-number">4</span><div><strong>Messages</strong><p>Deliver relevant communication in the right channel.</p></div><Arrow /></li>
            <li className="step-outcome"><span className="step-number">5</span><div><strong>Retention</strong><p>Learn, improve, and compound customer value.</p></div><span className="loop-mark" aria-hidden="true">↺</span></li>
          </ol>
        </section>

        <section className="process-section" id="process" aria-labelledby="process-title">
          <div className="process-sticky">
            <div className="section-label"><span>04</span> How we work</div>
            <h2 id="process-title">A straight line from uncertainty to a working system.</h2>
            <p>Start with a focused audit or enter at the implementation milestone you already understand.</p>
            <a className="text-link" href="#contact">Discuss your next milestone <Arrow /></a>
          </div>
          <ol className="process-list">
            {process.map(([number, title, description]) => (
              <li key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="experience-section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading-row">
            <div className="section-label light"><span>05</span> Relevant operating range</div>
            <div>
              <h2 id="experience-title">Selected experience of the team.</h2>
              <p>Experience is shown by domain and scope, not borrowed client logos or undisclosed performance claims.</p>
            </div>
          </div>
          <div className="experience-grid">
            {experience.map((item, index) => (
              <article className="experience-card" key={item.field}>
                <div className="experience-meta"><span>0{index + 1}</span><span>{item.field}</span></div>
                <h3>{item.scope}</h3>
                <p>{item.detail}</p>
                <span className="scope-label">Team experience · details shared where permitted</span>
              </article>
            ))}
          </div>
        </section>

        <section className="platform-section" aria-labelledby="platform-title">
          <div className="section-label"><span>06</span> Platforms & ecosystem</div>
          <div className="platform-intro">
            <h2 id="platform-title">Platform-aware.<br />System-first.</h2>
            <p>We work with the tools already in your stack and design an operating model that does not collapse at the next campaign.</p>
          </div>
          <div className="platform-groups">
            {platformGroups.map((group) => (
              <div className="platform-group" key={group.label}>
                <h3>{group.label}</h3>
                <ul>{group.names.map((name) => <li key={name}>{name}</li>)}</ul>
              </div>
            ))}
          </div>
          <p className="platform-disclaimer"><i /> Platform names describe familiarity or technical compatibility. They do not imply endorsement, certification, or current official partner status.</p>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-kicker"><span>Ready when you are</span><span>Start with one useful conversation</span></div>
          <h2 id="contact-title">Make your customer engagement stack work as <em>one lifecycle system.</em></h2>
          <p>Start with a focused audit or discuss the next implementation milestone. We will review your stack, data, journeys, and operating model — then recommend the shortest path forward.</p>
          <div className="contact-options" aria-label="Ways to start">
            <div><span>01</span><strong>Lifecycle audit</strong><p>Fixed-scope diagnostic and prioritized roadmap.</p></div>
            <div><span>02</span><strong>Implementation sprint</strong><p>Fixed milestones for setup, migration, or launch.</p></div>
            <div><span>03</span><strong>Managed operations</strong><p>Ongoing execution, testing, and ownership.</p></div>
            <div><span>04</span><strong>Fractional lead</strong><p>Senior strategy, governance, and enablement.</p></div>
          </div>
          <div className="contact-action">
            <p>Contact channel is shared directly during the current review phase.</p>
            <a className="button button-light" href="#top">Review the system <Arrow /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><a className="brand" href="#top"><Mark /><span>Asapmail</span></a><p>Senior-led retention, CRM, and lifecycle systems.</p></div>
        <div className="footer-nav"><span>Navigate</span><a href="#services">Services</a><a href="#system">System</a><a href="#process">Process</a><a href="#experience">Experience</a></div>
        <div className="footer-meta"><span>Channels</span><p>Email · SMS · Push · In-app</p><p>SaaS · FinTech · Web3 · E-commerce</p></div>
        <div className="footer-bottom"><span>© Asapmail</span><span>Independent senior practitioner-led studio</span><span>No partner status claimed</span></div>
      </footer>
    </>
  );
}
