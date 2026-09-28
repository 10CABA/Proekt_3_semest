import { NavLink } from 'react-router'

const MENU_ITEMS = [
  { to: '/home',      label: 'Home',      icon: '/icons/home.png' },
  { to: '/library',   label: 'My Music',  icon: '/icons/library.png' },
  { to: '/favorites', label: 'Favorites', icon: '/icons/heart-filled.png' },
  { to: '/playlists', label: 'Playlists', icon: '/icons/playlist.png' },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <span className="sidebar__logo-text">Stellar Music</span>
      </div>

      <nav className="sidebar__nav">
        {MENU_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              'sidebar__item' + (isActive ? ' sidebar__item--active' : '')
            }
          >
            <img
              src={item.icon}
              alt=""
              className="sidebar__item-icon"
            />
            <span className="sidebar__item-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}