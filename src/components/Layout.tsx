import { Outlet, NavLink } from 'react-router-dom';
import { Bot, Github, ExternalLink } from 'lucide-react';

const NAV_LINKS = [
  { to: '/', label: 'Overview' },
  { to: '/benchmark/simpler-env', label: 'SIMPLER' },
  { to: '/benchmark/calvin', label: 'CALVIN' },
  { to: '/benchmark/libero', label: 'LIBERO' },
  { to: '/benchmark/libero-pro', label: 'LIBERO-PRO' },
  { to: '/benchmark/meta-world', label: 'Meta-World' },
  { to: '/benchmark/vlabench', label: 'VLABench' },
  { to: '/benchmark/robotwin', label: 'RoboTwin' },
];

export function Layout() {
  return (
    <div className="layout">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <NavLink to="/" className="logo">
            <Bot size={28} strokeWidth={2.5} />
            <span>VLA Leaderboard</span>
          </NavLink>
          
          <nav className="nav-links">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <a
              href="https://github.com/k1000dai/vlaleaderboard"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-button"
              title="GitHub Repository"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>
            © 2025 VLA Leaderboard • 
            <a href="https://k1000dai.github.io/" target="_blank" rel="noopener noreferrer">
              k1000dai
              <ExternalLink size={12} style={{ marginLeft: 4 }} />
            </a>
          </p>
          <p className="footer-note">
            A community benchmark for Vision-Language-Action models in robotic manipulation.
          </p>
          <p className="footer-contribution">
            We welcome contributions! Found a model or benchmark missing? 
            <a href="https://github.com/k1000dai/vlaleaderboard" target="_blank" rel="noopener noreferrer">
              Submit a Pull Request on GitHub
              <Github size={12} style={{ marginLeft: 4 }} />
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
