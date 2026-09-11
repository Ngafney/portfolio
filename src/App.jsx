import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Resume from './pages/Resume.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import NotFound from './pages/NotFound.jsx'
import { projects } from './data/projects.js'

export default function App() {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\/+|\/+$/g, '')
  // Project pages open with a full-bleed photo hero, so the (transparent) header
  // overlays it, exactly like the reference site. Every other page sits below the header.
  const overlay = projects.some((p) => p.slug === slug)

  return (
    <div className={`page${overlay ? '' : ' page--offset'}`}>
      <ScrollToTop />
      <Header overlay={overlay} />
      <main className="page__content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          {projects.map((p) => (
            <Route key={p.slug} path={`/${p.slug}`} element={<ProjectDetail project={p} />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}
