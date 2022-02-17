import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavBar() {
  const router = useRouter()
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Humans of 42
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={['collapse', 'navbar-collapse'].join(' ')}>
          {' '}
          <Link href="/">
            <a
              className={[
                router.pathname === '/' ? 'active' : '',
                'nav-link', 'nav-item'
              ].join(' ')}
            >
              Home
            </a>
          </Link>
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
        </div>
      </div>
    </nav>
  )
}
