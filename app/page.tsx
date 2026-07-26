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

        <section className="next-chapter" id="pathway" aria-label="Planning pathway preview">
          <span>Next chapter</span>
          <strong>From a planning question to a revised urban pathway</strong>
          <span aria-hidden="true">03 ↘</span>
        </section>

        <div id="systems" className="future-anchor" />
        <div id="futures" className="future-anchor" />
        <div id="resources" className="future-anchor" />
        <div id="about" className="future-anchor" />
      </main>
    </>
  );
}
