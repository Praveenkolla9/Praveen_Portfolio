import { useMemo, useState } from 'react';
import { ArrowUpRight, Star } from 'lucide-react';

export default function Projects({ projects, onNavigateExperience }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.category)));
    return ['All', ...unique];
  }, [projects]);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Selected Work</div>
          <h2 className="section-title">Projects &amp; Case Studies</h2>
          <p className="section-desc">
            Quantifiable initiatives spanning IT portfolio governance, real estate investment modeling, revenue optimization, and predictive analytics.
          </p>
        </div>

        <div className="filter-bar" role="tablist" aria-label="Filter projects by category">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project) => (
            <article key={project.id} className="project-card">
              <div>
                <div className="project-top">
                  <span className="category-badge">{project.category}</span>
                  {project.featured && (
                    <span className="featured-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Star size={11} fill="currentColor" />
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-context">{project.context}</p>

                {project.outcomes?.length > 0 && (
                  <div className="outcomes-row">
                    {project.outcomes.map((out, idx) => (
                      <div key={idx} className="outcome-box">
                        <div className="outcome-val">{out.value}</div>
                        <div className="outcome-lbl">{out.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <ul className="achievement-list">
                  {project.contributions.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="project-footer">
                <div className="tag-list">
                  {project.tools.map((tool) => (
                    <span key={tool} className="tag tag-mono">
                      {tool}
                    </span>
                  ))}
                </div>

                {project.experience_id && (
                  <button
                    type="button"
                    className="exp-jump-btn"
                    onClick={() => onNavigateExperience(project.experience_id)}
                  >
                    Related role <ArrowUpRight size={14} />
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
