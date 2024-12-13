import { Icon } from '@iconify/react'
import type { ReactElement } from 'react'
import AuthToggle from './auth-toggle'
import Search from './search'
import ThemeToggle from './theme-toggle'

const Header = (): ReactElement => (
  <header
    className='navbar gap-2 border-b border-b-base-content/50 bg-base-100 px-5 py-1'
    role='navigation'
  >
    <div className='navbar-start gap-1'>
      <Search labelProps={{ className: 'max-md:hidden w-full max-w-sm' }} />

      <label
        htmlFor='sidebar-toggle'
        className='btn btn-ghost drawer-button md:hidden'
        aria-label='open sidebar'
      >
        <Icon className='text-xl' icon='mdi:hamburger-close' />
      </label>
    </div>

    <div className='navbar-center gap-1'>
      <h3>Thuyen Blog</h3>
    </div>

    <div className='navbar-end'>
      <ul className='menu menu-horizontal items-center'>
        <li>
          <ThemeToggle />
        </li>

        <li>
          <AuthToggle />
        </li>
      </ul>
    </div>
  </header>
)

export default Header
