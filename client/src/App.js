import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticlePage from './pages/ArticlePage'
import ArticlesListPage from './pages/ArticlesListPage'
import NavBar from './NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const appStyles = 'p-10 bg-sevGrey h-screen'
  return (
    <Router>
      <div className={appStyles}>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/about' element={<AboutPage />} exact />
          <Route path='/articles-list' element={<ArticlesListPage />} exact />
          <Route path='/article' element={<ArticlePage />} exact />
        </Routes>
      </div>
    </Router>
  )
}

export default App
