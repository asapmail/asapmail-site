import Image from "next/image";

const services = [
  {
    title: "Lifecycle audit and roadmap",
    body: "A focused view of your stack, data, journeys, performance gaps, priorities and quick wins.",
  },
  {
    title: "Implementation and migration",
    body: "Workspace setup, event and attribute models, integrations, migration planning and governance.",
  },
  {
    title: "Journey architecture",
    body: "Onboarding, activation, conversion, retention, renewal, reactivation and win-back systems.",
  },
  {
    title: "Campaign production",
    body: "Strategy, copy, design, responsive HTML, localization, QA and coordinated launch support.",
  },
  {
    title: "Optimization and experimentation",
    body: "Segmentation, testing, deliverability, reporting and a disciplined iteration backlog.",
  },
  {
    title: "Managed CRM operations",
    body: "Ongoing ownership of campaigns, journeys, production quality and platform operations.",
  },
];

const lifecycle = [
  ["Events", "Capture the behaviors that matter."],
  ["Segments", "Turn signals into usable audiences."],
  ["Journeys", "Coordinate timing, logic and channels."],
  ["Messages", "Produce clear, tested communication."],
  ["Retention", "Learn, improve and compound value."],
];

const process = [
  ["Audit", "Goals, stack, data, current lifecycle and constraints."],
  ["Blueprint", "Event taxonomy, segments, journey map and measurement plan."],
  ["Build", "Integrations, workflows, templates, tracking and documentation."],
  ["QA and launch", "Test profiles, edge cases, rendering and production release."],
  ["Optimize", "Experiments, reporting, backlog and continuous improvement."],
];

const platformGroups = [
  {
    title: "Customer engagement",
    names: ["Customer.io", "Klaviyo", "Braze", "Iterable", "HubSpot", "ActiveCampaign", "Mautic"],
  },
  {
    title: "Data and integrations",
    names: ["Twilio Segment", "APIs", "Webhooks", "Make", "Zapier"],
  },
  {
    title: "Commerce retention",
    names: ["Shopify", "Attentive", "Postscript"],
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Asapmail home">
          asap<span>mail</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#system">System</a>
          <a href="#process">Process</a>
          <a href="#experience">Experience</a>
          <a href="#platforms">Platforms</a>
        </nav>
        <a className="nav-cta" href="#contact">
          Request an audit <Arrow />
        </a>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Retention • CRM • Lifecycle</p>
            <h1 id="hero-title">
              Turn customer data into journeys that <em>retain.</em>
            </h1>
            <p className="hero-subhead">
              Senior hands-on strategy, implementation and production across email, SMS, push and in-app.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Request an audit <Arrow />
              </a>
              <a className="text-link" href="#process">
                See how we build
              </a>
            </div>
          </div>

          <figure className="hero-visual">
            <Image
              src="/lifecycle-routing-board.webp"
              alt="A lime signal thread moving through five precision routing nodes"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 48vw"
            />
            <figcaption>
              One accountable path from product signal to customer communication.
            </figcaption>
          </figure>
        </section>

        <section className="compatibility" aria-label="Platform compatibility statement">
          <p>Built for modern customer engagement stacks</p>
          <div aria-label="Platforms the team is familiar with">
            <span>Customer.io</span>
            <span>Klaviyo</span>
            <span>Braze</span>
          </div>
          <small>Names indicate familiarity and compatibility, not current partner status.</small>
        </section>

        <section className="problem section" aria-labelledby="problem-title">
          <div className="problem-statement">
            <h2 id="problem-title">Your stack should operate as a system.</h2>
            <p>Not as disconnected campaigns waiting on the next handoff.</p>
          </div>
          <div className="problem-map" aria-label="Common operating problems">
            <p><span>Manual</span> launches slow down learning.</p>
            <p><span>Weak</span> events limit personalization.</p>
            <p><span>Gaps</span> break the customer journey.</p>
            <p><span>Split</span> ownership creates rework.</p>
          </div>
        </section>

        <section className="services section" id="services" aria-labelledby="services-title">
          <div className="section-intro">
            <h2 id="services-title">Senior execution, from strategy to send.</h2>
            <p>One specialist team owns the path across data, integrations, automation, messaging and QA.</p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <article className={index === 0 || index === 3 ? "service service-accent" : "service"} key={service.title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </article>
            ))}
          </div>
          <p className="channels">
            <strong>Channels</strong>
            Email <span>/</span> SMS and MMS <span>/</span> Mobile push <span>/</span> Web push <span>/</span> In-app
          </p>
        </section>

        <section className="system section" id="system" aria-labelledby="system-title">
          <p className="eyebrow">The lifecycle system</p>
          <h2 id="system-title">Every message starts upstream.</h2>
          <p className="system-lede">We connect the decisions that usually sit in different teams.</p>
          <ol className="signal-path">
            {lifecycle.map(([title, body], index) => (
              <li key={title}>
                <div className="signal-node" aria-hidden="true">
                  <span>{index + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="process section" id="process" aria-labelledby="process-title">
          <div className="process-copy">
            <h2 id="process-title">A clear route to production.</h2>
            <p>Start with evidence. Build the operating model. Launch with control.</p>
            <a className="text-link light-link" href="#contact">Discuss an implementation</a>
          </div>
          <ol className="process-list">
            {process.map(([title, body]) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="experience section" id="experience" aria-labelledby="experience-title">
          <p className="eyebrow">Selected experience of the team</p>
          <div className="experience-layout">
            <div>
              <h2 id="experience-title">Proof should be specific, or not published.</h2>
              <p>
                Client names, logos, testimonials and performance figures are intentionally omitted until permission is secured.
              </p>
            </div>
            <aside aria-label="Available private review material">
              <h3>For qualified reviews</h3>
              <p>
                We can discuss relevant roles, implementation scope, operating context and approved outcomes in a private capability review.
              </p>
              <a className="text-link" href="#contact">Request a capability review</a>
            </aside>
          </div>
          <div className="experience-band">
            <span>Strategy</span>
            <span>Event architecture</span>
            <span>Journey design</span>
            <span>Production</span>
            <span>QA</span>
            <span>Optimization</span>
          </div>
        </section>

        <section className="platforms section" id="platforms" aria-labelledby="platforms-title">
          <h2 id="platforms-title">Platform-flexible. System-minded.</h2>
          <p className="platforms-lede">
            We work with the tools already in your stack and recommend changes only when the operating case is clear.
          </p>
          <div className="platform-groups">
            {platformGroups.map((group) => (
              <section key={group.title} aria-labelledby={`platform-${group.title.replaceAll(" ", "-").toLowerCase()}`}>
                <h3 id={`platform-${group.title.replaceAll(" ", "-").toLowerCase()}`}>{group.title}</h3>
                <ul>
                  {group.names.map((name) => <li key={name}>{name}</li>)}
                </ul>
              </section>
            ))}
          </div>
          <p className="disclaimer">
            Platform references communicate working familiarity and compatibility. They do not claim certification, endorsement or partner status.
          </p>
        </section>

        <section className="contact section" id="contact" aria-labelledby="contact-title">
          <div>
            <p>Start with the shortest useful next step.</p>
            <h2 id="contact-title">Make the stack work as one lifecycle system.</h2>
          </div>
          <div className="contact-actions">
            <p className="contact-status">Contact endpoint pending approved domain</p>
            <p>Share your stack, biggest lifecycle gap and the milestone you need to reach.</p>
          </div>
        </section>
      </main>

      <footer>
        <a className="wordmark footer-wordmark" href="#top" aria-label="Asapmail home">
          asap<span>mail</span>
        </a>
        <p>Senior practitioner-led retention, CRM and lifecycle studio.</p>
        <div>
          <span>Corporate contact pending domain approval</span>
          <span>Privacy policy pending legal review</span>
          <span>© Asapmail</span>
        </div>
      </footer>
    </div>
  );
}
