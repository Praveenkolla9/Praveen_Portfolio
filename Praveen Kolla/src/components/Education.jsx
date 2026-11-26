import { GraduationCap, Award, MapPin, BadgeCheck } from 'lucide-react';
import { formatDateRange } from '../utils/formatDate';

export default function Education({ education, certifications }) {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Academic Background</div>
          <h2 className="section-title">Education &amp; Certifications</h2>
        </div>

        <div className="edu-grid">
          {education.map((edu) => (
            <div key={`${edu.institution}-${edu.degree}`} className="card">
              <div className="exp-header" style={{ marginBottom: '8px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent)', fontWeight: 600, fontSize: '0.88rem' }}>
                  <GraduationCap size={17} />
                  {edu.degree} in {edu.field}
                </div>
                <span className="date-badge">
                  {formatDateRange(edu.start_date, edu.end_date)}
                </span>
              </div>

              <h3 style={{ fontSize: '1.12rem', fontWeight: 700, marginBottom: '6px' }}>
                {edu.institution}
              </h3>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'var(--text-muted)', fontSize: '0.86rem' }}>
                <MapPin size={14} />
                {edu.location}
              </div>
            </div>
          ))}
        </div>

        {certifications?.length > 0 && (
          <div className="cert-section">
            <div className="cert-header">
              <div className="cert-heading-wrap">
                <Award size={19} color="var(--accent)" />
                <h3 className="cert-heading">Licenses &amp; Certifications</h3>
              </div>
              <span className="cert-count">{certifications.length} Credentials</span>
            </div>

            <div className="cert-grid">
              {certifications.map((cert) => (
                <div key={cert.name} className="cert-card">
                  <div className="cert-icon-box" aria-hidden="true">
                    <BadgeCheck size={20} />
                  </div>
                  <div className="cert-body">
                    <div className="cert-name">{cert.name}</div>
                    <div className="cert-issuer">
                      {cert.issuer ? cert.issuer : 'Professional Certification'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
