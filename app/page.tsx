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
                  rel="noreferrer"
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
                  rel="noreferrer"
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
                  rel="noreferrer"
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
                  rel="noreferrer"
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

        <section className="next-chapter" id="futures" aria-label="Comparing futures preview">
          <span>Next chapter</span>
          <strong>Compare possible futures before choices are fixed</strong>
          <span aria-hidden="true">05 ↘</span>
        </section>

        <div id="resources" className="future-anchor" />
        <div id="about" className="future-anchor" />
      </main>
    </>
  );
}
