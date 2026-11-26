import { ClipboardCheck, TrendingUp, Database } from 'lucide-react';

const ICON_MAP = {
  'project-management': ClipboardCheck,
  'financial-analytics': TrendingUp,
  technology: Database,
};

export default function Expertise({ expertise }) {
  return (
    <section id="expertise" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Core Capabilities</div>
          <h2 className="section-title">Areas of Expertise</h2>
          <p className="section-desc">
            Bridging project governance, financial modeling, and technical business intelligence.
          </p>
        </div>

        <div className="expertise-grid">
          {expertise.map((domain) => {
            const Icon = ICON_MAP[domain.id] || Database;
            return (
              <div key={domain.id} className="expertise-card">
                <div className="expertise-icon">
                  <Icon size={20} />
                </div>
                <h3 className="expertise-title">{domain.title}</h3>
                <div className="tag-list">
                  {domain.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
