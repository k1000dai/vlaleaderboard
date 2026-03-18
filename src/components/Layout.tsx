import { useEffect, useState } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Bot, Github, ExternalLink, Menu, Moon, Sun, X } from 'lucide-react';
import { getAllBenchmarks } from '../data';

type ThemeMode = 'dark' | 'light';

const OVERVIEW_LINK = { to: '/', label: 'Overview' };
const MODELS_LINK = { to: '/models', label: 'Models' };
const PRIMARY_LINKS = [OVERVIEW_LINK, MODELS_LINK];
const BENCHMARK_LINKS = getAllBenchmarks().map((benchmark) => ({
  to: `/benchmark/${benchmark.id}`,
  label: benchmark.shortName || benchmark.name,
}));
const THEME_STORAGE_KEY = 'vlaleaderboard-theme';

function getInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  return storedTheme === 'light' ? 'light' : 'dark';
}

export function Layout() {
  const [isBenchmarkMenuOpen, setIsBenchmarkMenuOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const location = useLocation();
  const isBenchmarkRoute = location.pathname.startsWith('/benchmark/');

  useEffect(() => {
    setIsBenchmarkMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    if (!isBenchmarkMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsBenchmarkMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isBenchmarkMenuOpen]);

  return (
    <div className="layout">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <NavLink to="/" className="logo">
            <Bot size={28} strokeWidth={2.5} />
            <span>VLA Leaderboard</span>
          </NavLink>

          <nav className="header-primary-nav" aria-label="Primary navigation">
            {PRIMARY_LINKS.map((link) => (
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
            <button
              type="button"
              className="icon-button"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={() =>
                setTheme((currentTheme) =>
                  currentTheme === 'dark' ? 'light' : 'dark'
                )
              }
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <div className="benchmark-menu-wrapper">
              <button
                type="button"
                className={`menu-toggle ${isBenchmarkMenuOpen || isBenchmarkRoute ? 'active' : ''}`}
                aria-expanded={isBenchmarkMenuOpen}
                aria-controls="benchmark-menu"
                aria-haspopup="true"
                onClick={() => setIsBenchmarkMenuOpen((open) => !open)}
              >
                {isBenchmarkMenuOpen ? <X size={18} /> : <Menu size={18} />}
                <span>Benchmarks</span>
              </button>

              <div
                id="benchmark-menu"
                className={`benchmark-menu ${isBenchmarkMenuOpen ? 'open' : ''}`}
              >
                <div className="benchmark-menu-header">
                  <p>Benchmark List</p>
                  <span>{BENCHMARK_LINKS.length} benchmarks</span>
                </div>

                <nav className="benchmark-menu-links" aria-label="Benchmark navigation">
                  {BENCHMARK_LINKS.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className={({ isActive }) =>
                        `benchmark-menu-link ${isActive ? 'active' : ''}`
                      }
                      onClick={() => setIsBenchmarkMenuOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </nav>
              </div>
            </div>

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

      {isBenchmarkMenuOpen && (
        <button
          type="button"
          className="menu-backdrop"
          aria-label="Close benchmark menu"
          onClick={() => setIsBenchmarkMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>
            © 2025 VLA Leaderboard • Maintained by{' '}
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
