import ChapterNavigator from "./ChapterNavigator";

const contributions = [
  {
    number: "01",
    title: "Stakeholder knowledge",
    text: "Capture planning priorities, local knowledge, concerns and alternative visions from policymakers, practitioners and communities.",
  },
  {
    number: "02",
    title: "Open spatial data",
    text: "Use available land, infrastructure, environmental and socioeconomic data to establish the planning context across different cities.",
  },
  {
    number: "03",
    title: "Urban futures simulation",
    text: "Explore where future development, conservation and restoration could occur under different planning assumptions.",
  },
  {
    number: "04",
    title: "Connected assessments",
    text: "Examine implications across buildings, transportation, green infrastructure, zoning and policy, and behavioural responses.",
  },
  {
    number: "05",
    title: "Decision-ready evidence",
    text: "Compare spatial patterns, carbon outcomes and planning trade-offs in a form that supports discussion and revision.",
  },
];

const indicators = [
  ["Buildings", "Renew"],
  ["Transport", "Connect"],
  ["Green space", "Expand"],
  ["Policy", "Align"],
  ["Behaviour", "Engage"],
];

const pathwaySteps = [
  {
    number: "01",
    title: "Define",
    heading: "Frame the planning question",
    text: "Clarify the target year, geographic scope, climate objective and decisions under consideration. Bring planners, policymakers and other stakeholders into a shared problem frame.",
    note: "What needs to change, where, by when—and for whom?",
  },
  {
    number: "02",
    title: "Envision",
    heading: "Describe the future to explore",
    text: "Turn stakeholder visions and policy language into explicit scenario assumptions. AI can help organize qualitative input and connect planning narratives with spatial parameters.",
    note: "Stakeholder priority → scenario assumption",
  },
  {
    number: "03",
    title: "Simulate",
    heading: "Explore urban and landscape change",
    text: "Combine existing conditions, development demand, accessibility, planning restrictions, historic land cover and stakeholder-defined assumptions.",
    note: "Reference landscape → possible patterns of change",
  },
  {
    number: "04",
    title: "Intervene",
    heading: "Assemble coordinated measures",
    text: "Explore measures across connected systems, from compact development and building renewal to transport, nature-based solutions, spatial policy and behaviour.",
    note: "Illustrative functionality",
  },
  {
    number: "05",
    title: "Compare",
    heading: "Examine outcomes and trade-offs",
    text: "Compare alternative futures using a consistent set of spatial, carbon, accessibility and planning indicators.",
    note: "One evidence structure across every scenario",
  },
  {
    number: "06",
    title: "Revise",
    heading: "Improve the pathway through discussion",
    text: "Review results with stakeholders, identify trade-offs, adjust assumptions and test a revised combination of measures as evidence and priorities change.",
    note: "Comparison becomes the next decision",
  },
];

const scenarioIndicators = [
  "Spatial change",
  "Carbon balance",
  "Accessibility",
  "Green provision",
  "Planning compatibility",
  "Target-year pathway",
];

const scenarios = [
  {
    name: "Current trajectory",
    description:
      "Development and travel patterns continue broadly along existing trends, with currently adopted measures.",
    image: "/images/scenarios/project-location.jpg",
    alt: "Sangamon project map showing existing and projected development",
    credit: "Source: LEAM Team",
    values: [
      "Dispersed growth",
      "Current measures",
      "Uneven access",
      "Existing network",
      "Adopted plans",
      "Incremental",
    ],
  },
  {
    name: "Compact growth",
    description:
      "More development is directed toward existing centres, services and public-transport connections.",
    image: "/images/scenarios/land-use-change.jpg",
    alt: "Detailed land-use-change result with a complete category legend",
    credit: "Source: LEAM Team",
    values: [
      "Centres prioritised",
      "Lower travel demand",
      "Services closer",
      "Targeted provision",
      "Plan-led",
      "Accelerated",
    ],
  },
  {
    name: "Green-connected growth",
    description:
      "Development is coordinated with green infrastructure, ecosystem protection, active mobility and targeted renewal.",
    image: "/images/scenarios/stockholm-plan-comparison.jpg",
    alt: "Four-panel comparison between modelled development and the Stockholm regional plan",
    credit: "Source: KTH WaterCentre and LEAM Team",
    values: [
      "Connected pattern",
      "Emissions + sinks",
      "Active links",
      "Expanded network",
      "Priorities aligned",
      "Coordinated",
    ],
  },
];

type Resource = {
  name: string;
  description: string;
  domain: string;
  href: string;
  action: string;
  image?: string;
  alt?: string;
  note?: string;
  document?: boolean;
};

type ResourceGroup = {
  title: string;
  resources: Resource[];
};

const resourceGroups: ResourceGroup[] = [
  {
    title: "Integrated urban tools",
    resources: [
      {
        name: "Nature-Based Solutions Dashboard",
        description:
          "Explore spatial indicators and the allocation and visualization of urban nature-based solutions.",
        domain: "mit-dusp-nbs.github.io",
        href: "https://mit-dusp-nbs.github.io/dusp-nbs/",
        action: "Open dashboard",
        image: "/images/resources/nbs-dashboard.jpg",
        alt: "Nature-Based Solutions Dashboard allocation map",
      },
      {
        name: "Last-Mile Transportation Tool",
        description:
          "Examine last-mile transportation choices and associated emissions.",
        domain: "leam.illinois.edu",
        href: "http://leam.illinois.edu/lastmile/",
        action: "Open tool",
        image: "/images/resources/last-mile-fallback.jpg",
        alt: "Broader LEAM mobility example used because the legacy tool could not be captured",
        note: "Project-owned fallback visual",
      },
      {
        name: "LEAM land-use modelling",
        description:
          "Learn about the Land-use Evolution and Impact Assessment Model and its applications.",
        domain: "leam.uiuc.edu",
        href: "http://www.leam.uiuc.edu/",
        action: "Visit website",
        image: "/images/resources/leam-fallback.png",
        alt: "LEAM forest land-cover project map used as a representative project visual",
        note: "Project-owned fallback visual",
      },
    ],
  },
  {
    title: "Ecosystem and carbon scenarios",
    resources: [
      {
        name: "Conserved and protected land",
        description:
          "Examine conserved land, protection programmes and estimated carbon sequestration.",
        domain: "sequestration.web.illinois.edu",
        href: "https://sequestration.web.illinois.edu/currently-conserved/",
        action: "Open assessment",
        image: "/images/resources/currently-conserved.jpg",
        alt: "Map of conserved and protected land",
      },
      {
        name: "Historic land cover",
        description:
          "Compare historic and current land-cover patterns and use the historic landscape as a scenario reference.",
        domain: "sequestration.web.illinois.edu",
        href: "https://sequestration.web.illinois.edu/historic-landcover/",
        action: "Open explorer",
        image: "/images/resources/historic-landcover.jpg",
        alt: "Historic and current land-cover comparison map",
      },
      {
        name: "Restoring forests",
        description:
          "Compare forest-restoration scenarios and their estimated conservation and carbon outcomes.",
        domain: "sequestration.web.illinois.edu",
        href: "https://sequestration.web.illinois.edu/restoring-forests/",
        action: "Open scenarios",
        image: "/images/resources/restoring-forests.jpg",
        alt: "Forest-restoration scenario map",
      },
      {
        name: "Restoring wetlands",
        description:
          "Explore historic and current wetlands and the implications of wetland restoration.",
        domain: "sequestration.web.illinois.edu",
        href: "https://sequestration.web.illinois.edu/restoring-wetlands/",
        action: "Open scenarios",
        image: "/images/resources/restoring-wetlands.jpg",
        alt: "Historic and current wetland restoration map",
      },
    ],
  },
  {
    title: "Projects, methods and learning",
    resources: [
      {
        name: "Sangamon model tour",
        description:
          "Follow a guided introduction to a previous LEAM land-use application.",
        domain: "leam.illinois.edu",
        href: "http://leam.illinois.edu/springfield2016/tour.html",
        action: "Start the tour",
        image: "/images/resources/sangamon-tour.jpg",
        alt: "Sangamon projected-development map used as a project-owned fallback",
        note: "Project-owned fallback visual",
      },
      {
        name: "LEAM project collection",
        description:
          "Explore examples of spatial modelling, planning-support and environmental applications.",
        domain: "geoscilab.web.illinois.edu",
        href: "https://geoscilab.web.illinois.edu/projects.html",
        action: "View projects",
        image: "/images/resources/leam-projects.jpg",
        alt: "Collection of LEAM project examples",
      },
      {
        name: "LEAM model technical guide",
        description:
          "Learn how the land-use model is configured and used.",
        domain: "plone.rehearsal.uiuc.edu",
        href: "http://plone.rehearsal.uiuc.edu/gLEAM/report/LEAM_Model_Technical.pdf",
        action: "Open technical guide",
        document: true,
        note: "PDF · legacy endpoint",
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Carbon-Neutral Futures Explorer home">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>Carbon-Neutral Futures Explorer</span>
        </a>

        <nav aria-label="Primary navigation">
          <details className="nav-menu">
            <summary>
              <span>Menu</span>
              <span className="menu-lines" aria-hidden="true" />
            </summary>
            <div className="nav-links">
              <a href="#challenge">The challenge</a>
              <a href="#pathway">Planning pathway</a>
              <a href="#systems">Urban systems</a>
              <a href="#futures">Compare futures</a>
              <a href="#resources">Tools and resources</a>
              <a href="#about">About</a>
            </div>
          </details>
        </nav>
      </header>
      <ChapterNavigator />

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Urban planning for a climate-neutral future</p>
            <h1 id="hero-title">Carbon-Neutral Futures Explorer</h1>
            <p className="descriptor">
              An AI-supported urban decision platform for exploring pathways to
              carbon neutrality.
            </p>
            <p className="intro">
              Cities need to make connected choices about growth, mobility,
              buildings, land, nature and human behaviour. The Explorer brings
              these choices into a shared planning pathway, helping
              decision-makers examine how alternative urban futures could
              affect emissions, carbon sequestration and wider planning
              outcomes.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#pathway">
                Explore the planning pathway
                <span aria-hidden="true">↓</span>
              </a>
              <a className="button button-secondary" href="#resources">
                View existing tools
              </a>
            </div>
            <p className="hero-note">
              <span aria-hidden="true">●</span>
              From shared priorities to spatial scenarios and measurable outcomes
            </p>
          </div>

          <div className="hero-visual">
            <div className="hero-image" role="img" aria-label="Illustrative future city with a tree-lined boulevard, green roofs and a waterfront" />
            <div className="map-contours contour-one" aria-hidden="true" />
            <div className="map-contours contour-two" aria-hidden="true" />
            <aside className="concept-panel" aria-label="Concept interface summary">
              <div className="panel-heading">
                <div>
                  <span className="status-label">Concept interface</span>
                  <strong>Green-connected growth</strong>
                </div>
                <span className="year">2045</span>
              </div>
              <div className="indicator-list">
                {indicators.map(([label, value], index) => (
                  <div className="indicator" key={label}>
                    <span className="indicator-icon" aria-hidden="true">
                      {index + 1}
                    </span>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
              <div className="path-line" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
              <p>Shared scenario · connected assessment</p>
            </aside>
            <p className="image-credit">Illustrative future-city visual: project team</p>
          </div>
        </section>

        <section className="challenge" id="challenge" aria-labelledby="challenge-title">
          <div className="section-number" aria-hidden="true">02</div>
          <div className="challenge-heading">
            <p className="eyebrow">The planning challenge</p>
            <h2 id="challenge-title">Carbon neutrality is a spatial planning challenge</h2>
            <div className="challenge-intro">
              <p>
                Urban climate actions interact. New development changes travel
                demand. Transport investment influences where people and
                businesses locate. Zoning affects growth patterns. Green
                infrastructure stores carbon, manages water and changes access
                to nature.
              </p>
              <p>
                Policies and behavioural responses shape whether interventions
                achieve their intended effects. Decisions made separately can
                miss these connections. A shared planning environment allows
                cities to examine them together.
              </p>
            </div>
          </div>

          <figure className="connected-figure">
            <div className="figure-frame">
              <picture>
                <source srcSet="/images/challenge/connected-city.webp" type="image/webp" />
                <img
                  src="/images/challenge/connected-city.png"
                  alt="Aerial urban image with restrained overlays identifying buildings, streets, vehicles and tree canopy"
                  width="2816"
                  height="1536"
                />
              </picture>
              <span className="figure-tag tag-buildings">Buildings</span>
              <span className="figure-tag tag-streets">Streets</span>
              <span className="figure-tag tag-vehicles">Vehicles</span>
              <span className="figure-tag tag-trees">Tree canopy</span>
            </div>
            <figcaption>
              <span>Urban features can be translated into structured spatial information.</span>
              <span>Source: KTH WaterCentre. Image enhanced for presentation.</span>
            </figcaption>
          </figure>

          <div className="contributions">
            <div className="contributions-heading">
              <p className="eyebrow">A shared evidence base</p>
              <h3>What the Explorer brings together</h3>
            </div>
            <div className="contribution-list">
              {contributions.map((item) => (
                <article key={item.number}>
                  <span>{item.number}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mobility-band">
            <figure>
              <picture>
                <source srcSet="/images/challenge/mobility-patterns.webp" type="image/webp" />
                <img
                  src="/images/challenge/mobility-patterns.jpg"
                  alt="Three mapped residential mobility patterns with movement trajectories for different income groups"
                  width="2198"
                  height="1274"
                  loading="lazy"
                />
              </picture>
              <figcaption>Source: LEAM Team</figcaption>
            </figure>
            <div>
              <p className="eyebrow">Social and spatial context</p>
              <h3>Land cover tells only part of the story</h3>
              <p>
                Residential mobility patterns reveal how urban change affects
                different groups. Bringing this evidence into the same planning
                conversation helps make distributional effects visible.
              </p>
              <p className="closing-line">
                The purpose is to make alternative futures visible, comparable
                and open to discussion.
              </p>
            </div>
          </div>
        </section>

        <section className="pathway-section" id="pathway" aria-labelledby="pathway-title">
          <div className="section-number" aria-hidden="true">03</div>
          <div className="section-heading pathway-heading">
            <div>
              <p className="eyebrow">Planning pathway</p>
              <h2 id="pathway-title">From a planning question to a revised urban pathway</h2>
            </div>
            <p>
              The Explorer organizes planning as an iterative process. Planners
              and stakeholders define the problem, translate priorities into
              assumptions, simulate change, assemble interventions, compare
              outcomes and revise the pathway.
            </p>
          </div>

          <div className="pathway-roadmap">
            <div className="roadmap-line" aria-hidden="true" />
            <ol className="pathway-steps">
              {pathwaySteps.map((step, index) => (
                <li className={`pathway-step step-${index + 1}`} key={step.title}>
                  <details open={index === 0}>
                    <summary>
                      <span>{step.number}</span>
                      <strong>{step.title}</strong>
                    </summary>
                    <div className="step-detail">
                      <h3>{step.heading}</h3>
                      <p>{step.text}</p>
                      <small>{step.note}</small>
                    </div>
                  </details>
                </li>
              ))}
            </ol>
            <p className="roadmap-credit">Illustrative workshop visual: project team</p>
          </div>

          <div className="pathway-evidence">
            <article className="evidence-card interface-card">
              <div className="evidence-copy">
                <span className="status-label">Concept interface</span>
                <h3>Translate priorities into scenario settings</h3>
                <p>
                  Envision and Intervene connect policy narratives and
                  stakeholder input with structured measures and model inputs.
                </p>
              </div>
              <iframe
                src="/interfaces/policy-translation-interface.html"
                title="Concept interface translating policy and stakeholder input into scenario parameters"
                loading="lazy"
              />
            </article>

            <article className="evidence-card">
              <div className="evidence-copy">
                <span className="evidence-step">Simulate</span>
                <h3>Explore urban and landscape change</h3>
                <p>
                  Establish a reference landscape, then examine where
                  development, conservation or restoration could occur.
                </p>
                <a
                  className="text-link"
                  href="https://sequestration.web.illinois.edu/historic-landcover/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore historic land cover ↗
                </a>
              </div>
              <figure>
                <img
                  src="/images/pathway/estimated-land-use-change-interface-v1.png"
                  alt="Concept interface showing an estimated land-use change map and its legend"
                  loading="lazy"
                />
                <figcaption>Source: KTH WaterCentre</figcaption>
              </figure>
            </article>

            <article className="evidence-card">
              <div className="evidence-copy">
                <span className="evidence-step">Compare</span>
                <h3>Bring interventions into one spatial view</h3>
                <p>
                  Compare multiple nature-based solutions without separating
                  them from the wider urban pathway.
                </p>
              </div>
              <figure>
                <img
                  src="/images/pathway/nbs-allocation-interface-v1.png"
                  alt="Concept interface comparing the spatial allocation of nature-based solutions"
                  loading="lazy"
                />
                <figcaption>Source: LEAM Team</figcaption>
              </figure>
            </article>
          </div>

          <p className="pathway-closing">
            Planning is iterative: each comparison creates a clearer basis for
            the next decision.
          </p>
        </section>

        <section className="systems-section" id="systems" aria-labelledby="systems-title">
          <div className="section-number" aria-hidden="true">04</div>
          <div className="section-heading systems-heading">
            <div>
              <p className="eyebrow">Connected urban systems</p>
              <h2 id="systems-title">One urban future, five connected systems</h2>
            </div>
            <p>
              Carbon-neutral planning requires more than a single model or
              intervention. The Explorer connects several systems around a
              shared spatial scenario so planners can see reinforcement and
              trade-offs.
            </p>
          </div>

          <div className="systems-list">
            <article className="system-module">
              <div className="system-copy">
                <span className="system-index">01 / Buildings</span>
                <h3>Where can renewal and low-carbon development contribute most?</h3>
                <p>
                  Explore the spatial distribution of buildings, jobs and
                  activities. Define renewal areas and compare future
                  development forms and densities.
                </p>
                <div className="status-row">
                  <span className="status-label">Concept visualisation</span>
                  <span className="tbd-label">Detailed building assessment: TBD</span>
                </div>
              </div>
              <figure>
                <img
                  src="/images/systems/buildings-employment-intensity-interface-v1.png"
                  alt="Concept visualisation of employment intensity in a three-dimensional urban map"
                  loading="lazy"
                />
                <figcaption>A three-dimensional view of employment intensity can support spatial targeting. · Source: LEAM Team</figcaption>
              </figure>
            </article>

            <article className="system-module">
              <div className="system-copy">
                <span className="system-index">02 / Transportation</span>
                <h3>How do urban form and mobility choices influence emissions?</h3>
                <p>
                  Examine how development location, accessibility and
                  last-mile choices affect transportation outcomes, including
                  improved connections, mode shifts and compact growth.
                </p>
                <a
                  className="text-link"
                  href="http://leam.illinois.edu/lastmile/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore the Last-Mile tool ↗
                </a>
              </div>
              <figure>
                <img
                  src="/images/systems/mobility-patterns.jpg"
                  alt="Broader LEAM mobility example showing residential movement patterns across income groups"
                  loading="lazy"
                />
                <figcaption>Broader LEAM mobility example; not a Last-Mile interface screenshot. · Source: LEAM Team</figcaption>
              </figure>
            </article>

            <article className="system-module system-module-wide">
              <div className="system-copy">
                <span className="system-index">03 / Green infrastructure</span>
                <h3>Where can nature-based solutions provide combined value?</h3>
                <p>
                  Explore green roofs, corridors, streetscape vegetation and
                  access improvements while considering carbon, biodiversity,
                  heat, water and access to nature together.
                </p>
                <a
                  className="text-link"
                  href="https://mit-dusp-nbs.github.io/dusp-nbs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open the Nature-Based Solutions Dashboard ↗
                </a>
              </div>
              <div className="paired-figures">
                <figure>
                  <img
                    src="/images/systems/green-streetscape.png"
                    alt="Illustrative coordinated streetscape with planting, shade, active mobility and public space"
                    loading="lazy"
                  />
                  <figcaption>Illustrative intervention visual: project team</figcaption>
                </figure>
                <figure>
                  <img
                    src="/images/systems/nbs-allocation-interface-v1.png"
                    alt="Interface showing the spatial allocation of multiple nature-based solutions"
                    loading="lazy"
                  />
                  <figcaption>Illustrative allocation across Stockholm County. · Source: LEAM Team</figcaption>
                </figure>
              </div>
            </article>

            <article className="system-module">
              <div className="system-copy">
                <span className="system-index">04 / Zoning and policy</span>
                <h3>How do plans, protection and conservation shape change?</h3>
                <p>
                  Represent spatial policies as scenario conditions. Compare
                  simulated development with established plans and incorporate
                  protected or conserved land into the policy baseline.
                </p>
                <a
                  className="text-link"
                  href="https://sequestration.web.illinois.edu/currently-conserved/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open the conserved-land assessment ↗
                </a>
              </div>
              <div className="paired-figures vertical-pair">
                <figure>
                  <img
                    src="/images/systems/leam-regional-plan-comparison-v1.png"
                    alt="Comparison of simulated urban development with regional planning priorities"
                    loading="lazy"
                  />
                  <figcaption>Source: KTH WaterCentre and LEAM Team</figcaption>
                </figure>
                <figure>
                  <img
                    src="/images/systems/currently-conserved-map.jpg"
                    alt="Map of conserved and protected land used as a policy baseline"
                    loading="lazy"
                  />
                  <figcaption>Source: Illinois project team</figcaption>
                </figure>
              </div>
            </article>

            <article className="system-module">
              <div className="system-copy">
                <span className="system-index">05 / Behavioural nudges</span>
                <h3>How might people and organizations respond?</h3>
                <p>
                  Connect policy measures with uptake assumptions, translate
                  stakeholder concerns into scenario parameters and revise
                  expectations as evidence becomes available.
                </p>
                <div className="status-row">
                  <span className="status-label">Concept interface</span>
                  <span className="tbd-label">Behavioural module: TBD</span>
                </div>
              </div>
              <figure className="workshop-detail">
                <img
                  src="/images/systems/stakeholder-workshop.png"
                  alt="Illustrative stakeholder workshop focused on hands and map annotations"
                  loading="lazy"
                />
                <figcaption>Stakeholder priorities can inform assumptions and intervention design. · Project team</figcaption>
              </figure>
            </article>
          </div>

          <p className="systems-closing">
            Each module contributes evidence to the same planning pathway.
          </p>
        </section>

        <section className="futures-section" id="futures" aria-labelledby="futures-title">
          <div className="section-number" aria-hidden="true">05</div>
          <div className="section-heading futures-heading">
            <div>
              <p className="eyebrow">Comparing futures</p>
              <h2 id="futures-title">Compare possible futures before choices are fixed</h2>
            </div>
            <p>
              Scenarios help planners examine how different combinations of
              growth, policy and investment could shape the city. They are
              structured explorations informed by explicit assumptions.
            </p>
          </div>

          <div className="comparison-label">
            <span>Shared comparison workspace</span>
            <strong>Illustrative scenario values</strong>
          </div>

          <div className="comparison-grid">
            <div className="indicator-rail" aria-hidden="true">
              <div className="rail-spacer">Common indicators</div>
              {scenarioIndicators.map((indicator) => (
                <span key={indicator}>{indicator}</span>
              ))}
            </div>
            <div className="scenario-scroll">
              {scenarios.map((scenario) => (
                <article className="scenario-column" key={scenario.name}>
                  <header>
                    <h3>{scenario.name}</h3>
                    <p>{scenario.description}</p>
                  </header>
                  <figure>
                    <a
                      href={scenario.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Expand map for ${scenario.name}`}
                    >
                      <img src={scenario.image} alt={scenario.alt} loading="lazy" />
                      <span>Expand map ↗</span>
                    </a>
                    <figcaption>{scenario.credit}</figcaption>
                  </figure>
                  <dl>
                    {scenarioIndicators.map((indicator, index) => (
                      <div key={indicator}>
                        <dt>{indicator}</dt>
                        <dd>{scenario.values[index]}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}
            </div>
          </div>

          <div className="restoration-block">
            <div className="restoration-heading">
              <p className="eyebrow">Landscape restoration</p>
              <h3>What if restoration expands?</h3>
              <p>
                Urban climate pathways can include ecosystem restoration
                alongside changes to buildings, transport and development.
              </p>
            </div>
            <div className="restoration-links">
              <a
                href="https://sequestration.web.illinois.edu/restoring-forests/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/resources/restoring-forests.jpg" alt="" loading="lazy" />
                <span>
                  <strong>Restore forests</strong>
                  Compare 30%, 50% and full historic-extent scenarios.
                </span>
                <i aria-hidden="true">↗</i>
              </a>
              <a
                href="https://sequestration.web.illinois.edu/restoring-wetlands/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/resources/restoring-wetlands.jpg" alt="" loading="lazy" />
                <span>
                  <strong>Restore wetlands</strong>
                  Examine conservation and carbon implications.
                </span>
                <i aria-hidden="true">↗</i>
              </a>
              <a
                href="https://mit-dusp-nbs.github.io/dusp-nbs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/resources/nbs-dashboard.jpg" alt="" loading="lazy" />
                <span>
                  <strong>Allocate urban NbS</strong>
                  Explore allocation using spatial needs and priorities.
                </span>
                <i aria-hidden="true">↗</i>
              </a>
            </div>
          </div>

          <details className="city-evidence">
            <summary>
              <span>Evidence across cities</span>
              <strong>Open six-city comparison</strong>
            </summary>
            <figure>
              <img
                src="/images/scenarios/six-city-nbs.jpg"
                alt="Nature-based-solution combinations across six European cities"
                loading="lazy"
              />
              <figcaption>
                Examples of nature-based-solution combinations across six
                European cities. · Source: LEAM Team
              </figcaption>
            </figure>
          </details>

          <aside className="interpretation-panel">
            <div>
              <span className="status-label">Concept interface</span>
              <p className="eyebrow">AI-supported interpretation</p>
              <h3>Move between priorities, inputs and understandable results</h3>
              <p>
                AI can help align stakeholder input with scenario settings,
                retrieve relevant measures, draft intervention descriptions
                and summarize important differences between scenarios.
              </p>
              <ul>
                <li>Policy and stakeholder priorities</li>
                <li>Spatial or numerical model inputs</li>
                <li>Clear comparison summaries</li>
              </ul>
            </div>
            <figure>
              <span className="status-label">Concept visualisation</span>
              <img
                src="/images/systems/green-streetscape.png"
                alt="Illustrative green-connected streetscape with active mobility and nature-based solutions"
                loading="lazy"
              />
              <figcaption>
                Illustrative intervention visual: project team. This view is
                not a verified model output.
              </figcaption>
            </figure>
          </aside>

          <p className="trust-note">
            These tools support exploratory scenario assessment. Their outputs
            should be considered alongside local evidence, planning processes
            and stakeholder knowledge.
          </p>
        </section>

        <section className="resources-section" id="resources" aria-labelledby="resources-title">
          <div className="section-number" aria-hidden="true">06</div>
          <div className="section-heading resources-heading">
            <div>
              <p className="eyebrow">Existing tools and resources</p>
              <h2 id="resources-title">Explore the tools behind the planning pathway</h2>
            </div>
            <p>
              The Explorer brings together existing applications, project
              examples and learning materials. Each resource opens at its
              source in a new tab.
            </p>
          </div>

          <div className="resource-groups">
            {resourceGroups.map((group) => (
              <section className="resource-group" key={group.title} aria-labelledby={`resource-${group.title.replaceAll(" ", "-").toLowerCase()}`}>
                <h3 id={`resource-${group.title.replaceAll(" ", "-").toLowerCase()}`}>{group.title}</h3>
                <div className="resource-grid">
                  {group.resources.map((resource) => (
                    <a
                      className={`resource-card${resource.document ? " document-card" : ""}`}
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={resource.name}
                      aria-label={`${resource.action}: ${resource.name} (opens external site in a new tab)`}
                    >
                      {resource.document ? (
                        <div className="document-visual" aria-hidden="true">
                          <span>PDF</span>
                          <strong>LEAM</strong>
                          <small>Model technical guide</small>
                        </div>
                      ) : (
                        <img src={resource.image ?? ""} alt={resource.alt ?? ""} loading="lazy" />
                      )}
                      <div className="resource-copy">
                        <span className="resource-domain">{resource.domain}</span>
                        <h4>{resource.name}</h4>
                        <p>{resource.description}</p>
                        {resource.note && <small>{resource.note}</small>}
                        <strong>{resource.action} ↗</strong>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="section-number" aria-hidden="true">07</div>
          <div className="about-visual">
            <img
              src="/images/project/stockcake-urban-green-corridor-original.jpg"
              alt="Tree-lined urban corridor with pedestrians, cycling space and integrated greenery"
              loading="lazy"
            />
            <p>
              Adapted with AI from an original image by StockCake; used with
              permission.
            </p>
          </div>

          <div className="about-content">
            <p className="eyebrow">About the project</p>
            <h2 id="about-title">Research shaped around practical planning needs</h2>
            <p className="about-lead">
              The Carbon-Neutral Futures Explorer is being developed through{" "}
              <strong>
                AI-Driven Sustainable Spatial Planning: Advancing
                Climate-Neutral Cities through Digital Innovation
              </strong>{" "}
              (2025–2028).
            </p>
            <p>
              The project combines research on climate action, AI-supported
              urban planning and nature-based solutions to support cities in
              developing effective climate strategies through spatial
              planning. It builds on the earlier{" "}
              <strong>AI-powered knowledge integration to Carbon-neutral Cities</strong>{" "}
              project and extends the decision-support approach for large,
              medium and small urban contexts.
            </p>
            <p>
              The tools are being co-developed with planners and other
              stakeholders so that scenario assumptions, model results and
              visualizations respond to practical planning needs.
            </p>
            <a
              className="about-project-link"
              href="https://www.kth.se/water/research/research-themes/society/extreme-events/on-going-projects/ai-driven-sustainable-spatial-planning-advancing-climate-neutral-cities-through-digital-innovation-1.1408101"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read about the project at KTH ↗
            </a>

            <div className="about-meta">
              <div>
                <span>Project lead</span>
                <strong>KTH through WaterCentre@KTH</strong>
              </div>
              <div>
                <span>Principal investigator</span>
                <strong>Zahra Kalantari</strong>
              </div>
              <div>
                <span>Project period</span>
                <strong>2025–2028</strong>
              </div>
              <div>
                <span>Funding</span>
                <strong>Formas through Smart Built Environment</strong>
              </div>
            </div>

            <div className="contact-card">
              <div>
                <span className="eyebrow">Contact</span>
                <strong>Zahra Kalantari</strong>
                <p>Professor, KTH Royal Institute of Technology · Project Principal Investigator</p>
              </div>
              <div className="contact-links">
                <a href="mailto:zahrak@kth.se">zahrak@kth.se</a>
                <a href="mailto:watercentre@kth.se">watercentre@kth.se</a>
              </div>
            </div>
          </div>
        </section>

        <section className="partner-band" aria-labelledby="partners-title">
          <div className="partner-band-heading">
            <p className="eyebrow">Project consortium</p>
            <h2 id="partners-title">Research and planning partners</h2>
            <p>
              Led by KTH Royal Institute of Technology through
              WaterCentre@KTH, with research and planning partners across the
              consortium.
            </p>
          </div>
          <div className="logo-grid">
            <figure className="logo-kth">
              <img src="/images/logos/KTH_logo_RGB_bla.png" alt="KTH Royal Institute of Technology" loading="lazy" />
              <figcaption>WaterCentre@KTH</figcaption>
            </figure>
            <figure><img src="/images/logos/logo-colors-mit-red.png" alt="Massachusetts Institute of Technology" loading="lazy" /></figure>
            <figure><img src="/images/logos/University_of_Illinois_at_Urbana-Champaign_Wordmark.svg.webp" alt="University of Illinois Urbana-Champaign" loading="lazy" /></figure>
            <figure><img src="/images/logos/Sjtu-logo-standard-red.png" alt="Shanghai Jiao Tong University" loading="lazy" /></figure>
            <figure><img src="/images/logos/Region_Stockholm.svg.webp" alt="Region Stockholm" loading="lazy" /></figure>
            <figure><img src="/images/logos/tbg-kommun.svg" alt="Trelleborg Municipality" loading="lazy" /></figure>
          </div>
          <div className="funder-row">
            <span>Funded by</span>
            <img src="/images/logos/formas.png" alt="Formas" loading="lazy" />
            <span>through</span>
            <img src="/images/logos/smart_built_env.png" alt="Smart Built Environment" loading="lazy" />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
            <span>Carbon-Neutral Futures Explorer</span>
          </a>
          <p>AI-supported urban decision-making for carbon-neutral futures.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="https://www.kth.se/water/research/research-themes/society/extreme-events/on-going-projects/ai-driven-sustainable-spatial-planning-advancing-climate-neutral-cities-through-digital-innovation-1.1408101" target="_blank" rel="noopener noreferrer">Project information ↗</a>
          <a href="#resources">Tools and resources</a>
          <a href="mailto:watercentre@kth.se">Contact</a>
          <a href="#top">Return to the beginning ↑</a>
        </nav>
        <div className="footer-credits">
          <strong>Image and research credits</strong>
          <p>Selected visuals and maps: KTH WaterCentre and the LEAM Team.</p>
          <p>Adapted StockCake visual: adapted with AI from an original image by StockCake; used with permission.</p>
        </div>
      </footer>
    </>
  );
}
