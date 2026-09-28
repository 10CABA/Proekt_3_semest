const MENU_ITEMS = [
    {id: 'home', label: "Home", icon: '/icons/home.png'},
    {id: 'library', label: "My Music", icon: '/icons/library.png'},
    {id: 'favorites', label: "Favorites", icon: '/icons/heart.png'},
    {id: 'playlists', label: "Playlists", icon: '/icons/playlist.png'},
]

export default function Sidebar({ activeSection, onChange }) {
    return (
        <aside className="sidebar">
            <div className="sidebar__logo">
            <img
                //src="/icons/logo.svg"
                //alt="Retro Wave"
                //className="sidebar_logo-icon"
                />
                <span className="sidebar__logo-text">Stellar Music</span>
            </div>

            <nav className="sidebar__nav">
                {MENU_ITEMS.map((item) => (
                    <button
                        key={item.id}
                        className={
                        'sidebar__item' +
                        (activeSection === item.id ? ' sidebar__item--active' : '')
                        }
                        onClick={() => onChange(item.id)}
                    >
                        <img
                        src={item.icon}
                        alt=""
                        className="sidebar__item-icon"
                        />
                        <span className="sidebar__item-label">{item.label}</span>
                    </button>
                ))}
            </nav>
        </aside>
    )
}