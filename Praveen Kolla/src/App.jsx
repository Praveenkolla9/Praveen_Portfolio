import { useCallback, useRef, useState } from 'react';
import portfolioData from './data/portfolioData.json';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Expertise from './components/Expertise';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  const [highlightedExpId, setHighlightedExpId] = useState(null);
  const timerRef = useRef(null);

  const handleNavigateExperience = useCallback((expId) => {
    if (!expId) return;
    const target = document.getElementById(`exp-${expId}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setHighlightedExpId(expId);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setHighlightedExpId(null);
      }, 2400);
    }
  }, []);

  return (
    <div className="app-shell">
      <Navbar name={portfolioData.profile.name} />
      <main>
        <Hero
          profile={portfolioData.profile}
          hero={portfolioData.hero}
          highlights={portfolioData.highlights}
          onNavigateExperience={handleNavigateExperience}
        />
        <About about={portfolioData.about} />
        <Experience
          experience={portfolioData.experience}
          highlightedExpId={highlightedExpId}
        />
        <Projects
          projects={portfolioData.projects}
          onNavigateExperience={handleNavigateExperience}
        />
        <Expertise expertise={portfolioData.expertise} />
        <Education
          education={portfolioData.education}
          certifications={portfolioData.certifications}
        />
        <Contact
          contact={portfolioData.contact}
          profile={portfolioData.profile}
        />
      </main>
    </div>
  );
}
