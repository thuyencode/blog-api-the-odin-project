import type { ReactElement } from 'react'
import ThemeToggle from './theme-toggle'

const Header = (): ReactElement => (
  <header
    className='navbar border-b border-b-base-content/50 bg-base-100 px-5 py-1'
    role='navigation'
  >
    <div className='navbar-start gap-1'></div>

    <div className='navbar-end'>
      <ul className='menu menu-horizontal items-center'>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </div>
  </header>
)

export default Header
