import { useState } from 'react';
import { Building2, ChevronDown, ChevronUp } from 'lucide-react';
import { formatDateRange } from '../utils/formatDate';

export default function Experience({ experience, highlightedExpId }) {
  const [expandedParents, setExpandedParents] = useState(() => {
    const initial = {};
    experience.forEach((item) => {
      if (item.subsidiary_roles?.length) {
        initial[item.id] = true;
      }
    });
    return initial;
  });

  const toggleParent = (id) => {
    setExpandedParents((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Career Trajectory</div>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-desc">
            Track record across IT project governance, $100M hospitality revenue management, real estate cost estimation, and enterprise analytics.
          </p>
        </div>

        <div className="timeline">
          {experience.map((exp) => {
            const isHighlighted = highlightedExpId === exp.id;
            const hasSubsidiaries = Boolean(exp.subsidiary_roles?.length);
            const isExpanded = Boolean(expandedParents[exp.id]);

            return (
              <article key={exp.id} id={`exp-${exp.id}`} className="timeline-item">
                <span
                  className={`timeline-dot ${exp.is_current ? 'timeline-dot-current' : ''}`}
                  aria-hidden="true"
                />

                <div className={`exp-card ${isHighlighted ? 'exp-card-highlighted' : ''}`}>
                  <div className="exp-header">
                    <div>
                      <h3 className="exp-role">{exp.title}</h3>
                      <div className="exp-company">{exp.company}</div>
                    </div>

                    <div className="exp-meta">
                      {exp.is_current && <span className="current-badge">Current</span>}
                      <span className="date-badge">
                        {formatDateRange(exp.start_date, exp.end_date, exp.is_current)}
                      </span>
                    </div>
                  </div>

                  <ul className="achievement-list">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>

                  {hasSubsidiaries && (
                    <div className="subsidiaries-wrap">
                      <button
                        type="button"
                        className="subsidiaries-toggle"
                        onClick={() => toggleParent(exp.id)}
                        aria-expanded={isExpanded}
                      >
                        <Building2 size={15} />
                        {isExpanded ? 'Hide' : 'Show'} {exp.subsidiary_roles.length} Portfolio Company Assignments
                        {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                      </button>

                      {isExpanded && (
                        <div className="subsidiaries-grid">
                          {exp.subsidiary_roles.map((sub) => {
                            const subHighlighted = highlightedExpId === sub.id;
                            return (
                              <div
                                key={sub.id}
                                id={`exp-${sub.id}`}
                                className={`sub-role-card ${subHighlighted ? 'exp-card-highlighted' : ''}`}
                              >
                                <div className="exp-header">
                                  <div>
                                    <h4 className="exp-role" style={{ fontSize: '1.02rem' }}>
                                      {sub.company}
                                    </h4>
                                    <div className="exp-company" style={{ fontSize: '0.88rem' }}>
                                      {sub.title}
                                    </div>
                                  </div>
                                  <span className="date-badge">
                                    {formatDateRange(sub.start_date, sub.end_date, sub.is_current)}
                                  </span>
                                </div>

                                <ul className="achievement-list">
                                  {sub.achievements.map((ach, idx) => (
                                    <li key={idx}>{ach}</li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
