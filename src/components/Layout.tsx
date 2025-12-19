import { Outlet, NavLink } from 'react-router-dom';
import { Bot, Github, ExternalLink } from 'lucide-react';

const NAV_LINKS = [
  { to: '/', label: 'Overview' },
  { to: '/benchmark/simpler-env', label: 'SIMPLER' },
  { to: '/benchmark/calvin', label: 'CALVIN' },
  { to: '/benchmark/libero', label: 'LIBERO' },
  { to: '/benchmark/meta-world', label: 'Meta-World' },
  { to: '/benchmark/rlbench', label: 'RLBench' },
  { to: '/benchmark/maniskill', label: 'ManiSkill' },
  { to: '/benchmark/aloha', label: 'ALOHA' },
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
              href="https://github.com/matsuolab/vlaleaderboard"
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
            © 2024 VLA Leaderboard • 
            <a href="https://www.matsuo-lab.net/" target="_blank" rel="noopener noreferrer">
              Matsuo Lab
              <ExternalLink size={12} style={{ marginLeft: 4 }} />
            </a>
          </p>
          <p className="footer-note">
            A community benchmark for Vision-Language-Action models in robotic manipulation.
          </p>
        </div>
      </footer>
    </div>
  );
}

