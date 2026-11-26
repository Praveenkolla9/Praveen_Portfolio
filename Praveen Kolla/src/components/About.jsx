import { Briefcase } from 'lucide-react';

export default function About({ about }) {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Profile</div>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="card">
            <p className="about-summary">{about.summary}</p>
          </div>

          <div className="card">
            <div className="roles-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Briefcase size={16} color="var(--accent)" />
              Target Roles
            </div>
            <div className="tag-list">
              {about.target_roles.map((role) => (
                <span key={role} className="tag">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
