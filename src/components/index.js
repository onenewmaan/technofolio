import ReactDOM from 'react-dom'
import { Suspense } from 'react'
import './styles.css'
import { App } from './App'
import { Pin } from './assets/allSvgs'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <nav className="nav nav--left js-nav">
        <ul>
          <li>
            <a href="https://www.instagram.com/aggie.pictures/" className="is-active"><span>instagram</span></a>
          </li>
        </ul>
      </nav>

      <figure className="logo">
        <img src="camera.png" width="166px" height="200px" />
      </figure>

      <nav className="nav nav--right">
        <ul>
          <li>
            <a href="mailto:aggie.pictures@pm.me" className="is-active"><span>aggie.pictures@pm.me</span></a>
          </li>
        </ul>
      </nav>

      <div className="vert-text">
      <span>
        TAKING PHOTOS TO UNDERSTAND 
        <br />WHAT OUR LIVES MEAN TO US.
      </span>
    </div>
    <div className="pin">
      < Pin height={25} width={35} fill='white'/>
      <p>Located in:
        <br />Calgary</p>
    </div>
    </div>
  )
}

ReactDOM.render(
  <>
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <Overlay />
  </>,
  document.getElementById('root')
)
