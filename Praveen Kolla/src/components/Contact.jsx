import { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import { LinkedInIcon } from './SocialIcons';

export default function Contact({ contact, profile }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  };

  return (
    <>
      <section id="contact" className="section" style={{ paddingTop: '24px' }}>
        <div className="container">
          <div className="contact-banner">
            <div>
              <h2>{contact.heading}</h2>
              <p>{contact.description}</p>
            </div>

            <div className="contact-actions">
              <a href={`mailto:${contact.email}`} className="btn btn-primary">
                <Mail size={16} />
                Email {contact.email}
              </a>

              <button type="button" onClick={handleCopy} className="btn btn-dark-ghost">
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? 'Copied!' : 'Copy email'}
              </button>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark-ghost"
              >
                <LinkedInIcon size={16} />
                LinkedIn
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </span>
          <div style={{ display: 'flex', gap: '18px' }}>
            {profile.social_links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
            <a href={`mailto:${profile.email}`} className="nav-link">
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
