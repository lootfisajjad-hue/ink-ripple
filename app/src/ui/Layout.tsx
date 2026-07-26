/**
 * App shell: a scrollable content area plus a fixed bottom navigation bar
 * (mobile-first). Nav items use large touch targets and are keyboard/AT
 * accessible.
 */
import { NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Layout.css';

const NAV = [
  { to: '/', key: 'home', icon: HomeIcon, end: true },
  { to: '/learn', key: 'learn', icon: BookIcon, end: false },
  { to: '/review', key: 'review', icon: CardsIcon, end: false },
  { to: '/citizenship', key: 'citizenship', icon: FlagIcon, end: false },
  { to: '/settings', key: 'profile', icon: GearIcon, end: false },
] as const;

export function Layout() {
  const { t } = useTranslation();
  return (
    <div className="shell">
      <main className="shell-content" id="main">
        <Outlet />
      </main>
      <nav className="bottom-nav" aria-label={t('nav.home')}>
        {NAV.map(({ to, key, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `nav-item ${isActive ? 'nav-item-active' : ''}`
            }
          >
            <Icon />
            <span>{t(`nav.${key}`)}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

function HomeIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M3 11l9-8 9 8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10v10h14V10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function BookIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path
        d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function CardsIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="3" y="7" width="14" height="12" rx="2" />
      <path d="M7 4h11a2 2 0 0 1 2 2v9" strokeLinecap="round" />
    </svg>
  );
}
function FlagIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M5 21V4" strokeLinecap="round" />
      <path d="M5 4h12l-2 4 2 4H5" strokeLinejoin="round" />
    </svg>
  );
}
function GearIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path
        d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { NAV };
