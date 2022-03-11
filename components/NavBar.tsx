import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function NavBar() {
  const router = useRouter()
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleIsCollapsed = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Humans of 42
        </a>
        <button
          className={['navbar-toggler', isCollapsed ? 'collapsed' : ''].join(
            ' '
          )}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded={isCollapsed ? 'false' : 'true'}
          aria-label="Toggle navigation"
          onClick={toggleIsCollapsed}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={[
            'collapse',
            'navbar-collapse',
            isCollapsed ? '' : 'show',
          ].join(' ')}
          id="navbar"
        >
          <ul className={['navbar-nav', 'me-auto'].join(' ')}>
            <li className="nav-item">
              <Link href="/">
                <a
                  className={[
                    router.pathname === '/' ? 'active' : '',
                    'nav-link',
                  ].join(' ')}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/interviews">
                <a
                  className={[
                    router.pathname === '/interviews' ? 'active' : '',
                    'nav-link',
                  ].join(' ')}
                >
                  interviews
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a
                  className={[
                    router.pathname === '/about' ? 'active' : '',
                    'nav-link',
                  ].join(' ')}
                >
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/login">
                <a
                  className={[
                    router.pathname === '/Login' ? 'active' : '',
                    'nav-link',
                  ].join(' ')}
                >
                  Login
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
