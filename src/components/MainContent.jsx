export default function MainContent({ activeSection }) {
    return (
      <main className="main-content">
        {activeSection === 'home'      && <h1>Home</h1>}
        {activeSection === 'library'   && <h1>My Music</h1>}
        {activeSection === 'favorites' && <h1>Favorites</h1>}
        {activeSection === 'playlists' && <h1>Playlists</h1>}
      </main>
    )
  }