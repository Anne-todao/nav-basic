import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Sobre from './components/Sobre'
import style from './App.module.css'

function App() {
  return (
    <div>

      <nav className={style.nav}>
        <Link className={style.Link} to="/">
          Home
        </Link>
        <Link className={style.Link} to="/sobre">
          Sobre
        </Link>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </div>
  )
}

export default App