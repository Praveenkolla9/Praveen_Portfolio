import { ArrowRight, ArrowDownRight, MapPin, Mail } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';

export default function Hero({ profile, hero, highlights, onNavigateExperience }) {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero-eyebrow-row">
          <span className="pill pill-accent">
            <span className="status-dot" />
            {profile.headline}
          </span>
          <span className="pill">
            <MapPin size={14} />
            {profile.location}
          </span>
        </div>

        <h1 className="hero-title">{hero.headline}</h1>
        <p className="hero-subtitle">{hero.description}</p>

        <div className="hero-cta-row">
          <a href={hero.primary_cta.href} className="btn btn-primary">
            {hero.primary_cta.label}
            <ArrowRight size={16} />
          </a>
          <a href={hero.secondary_cta.href} className="btn btn-secondary">
            {hero.secondary_cta.label}
          </a>

          {profile.social_links.map((link) => {
            const Icon = link.label.toLowerCase().includes('linkedin') ? LinkedInIcon : GitHubIcon;
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="social-chip"
              >
                <Icon size={15} />
                {link.label}
              </a>
            );
          })}

          <a href={`mailto:${profile.email}`} className="social-chip">
            <Mail size={15} />
            {profile.email}
          </a>
        </div>

        <div className="highlights-grid" aria-label="Career impact highlights">
          {highlights.map((item) => (
            <button
              key={`${item.value}-${item.label}`}
              type="button"
              className="highlight-card"
              onClick={() => onNavigateExperience(item.experience_id)}
              title="Jump to related experience"
            >
              <div>
                <div className="highlight-value">{item.value}</div>
                <div className="highlight-label">{item.label}</div>
              </div>
              <span className="highlight-link-hint">
                View role <ArrowDownRight size={12} />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
