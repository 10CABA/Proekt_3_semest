import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import Sidebar from './components/Sidebar.jsx'
import HomePage from './pages/HomePage.jsx'
import LibraryPage from './pages/LibraryPage.jsx'
import FavoritesPage from './pages/FavoritesPage.jsx'
import PlaylistsPage from './pages/PlaylistsPage.jsx'
import PlayerBar from './components/PlayerBar.jsx'
import { useParallax } from './hooks/useParallax.js'

export default function App() {
  useParallax(20)

  return (
    <BrowserRouter>
      <div className="space-bg">
        <div className="space-bg__image" />
        <div className="space-bg__overlay" />
      </div>

      <div className="app">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/"           element={<Navigate to="/home" replace />} />
            <Route path="/home"       element={<HomePage />} />
            <Route path="/library"    element={<LibraryPage />} />
            <Route path="/favorites"  element={<FavoritesPage />} />
            <Route path="/playlists"  element={<PlaylistsPage />} />
            <Route path="*"           element={<Navigate to="/home" replace />} />
          </Routes>
        </main>
        <PlayerBar />
      </div>
    </BrowserRouter>
  )
}