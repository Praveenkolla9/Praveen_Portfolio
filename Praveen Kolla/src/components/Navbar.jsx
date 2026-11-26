import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Education', href: '#education' },
];

export default function Navbar({ name }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="brand">
          <span>{name}</span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="btn btn-primary btn-sm">
            Get in touch
            <ArrowUpRight size={15} />
          </a>
          <button
            type="button"
            className="mobile-menu-btn"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className={`mobile-drawer ${open ? 'open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn btn-primary btn-sm"
          onClick={() => setOpen(false)}
        >
          Get in touch
          <ArrowUpRight size={15} />
        </a>
      </div>
    </header>
  );
}
