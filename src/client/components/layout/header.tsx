import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'
import AuthMenu from './auth-menu'
import Search from './search'
import ThemeToggle from './theme-toggle'

const DEFAULT_DETAIL_PROPS = { className: 'dropdown dropdown-end' }
const DEFAULT_UL_PROPS = {
  className:
    'menu dropdown-content z-[1] w-40 rounded-box border border-base-content/50 bg-base-300 p-2 shadow-lg'
}

const Header = (): ReactElement => (
  <header
    className='navbar gap-2 border-b border-b-base-content/50 bg-base-100 px-5 py-1'
    role='navigation'
  >
    <div className='navbar-start gap-1'>
      <Search labelProps={{ className: 'max-lg:hidden w-full max-w-sm' }} />

      <label
        htmlFor='sidebar-toggle'
        className='btn btn-ghost drawer-button lg:hidden'
        aria-label='open sidebar'
      >
        <Icon className='text-xl' icon='mdi:hamburger-close' />
      </label>
    </div>

    <div className='navbar-center gap-1 max-lg:navbar-end'>
      <Link to='/'>
        <h3>Thuyen Blog</h3>
      </Link>
    </div>

    <div className='navbar-end max-lg:hidden'>
      <ul className='menu menu-horizontal items-center'>
        <li>
          <Link to='/secret'>Secret</Link>
        </li>
        <li>
          <ThemeToggle
            detailsProps={DEFAULT_DETAIL_PROPS}
            ulProps={DEFAULT_UL_PROPS}
          />
        </li>

        <li>
          <AuthMenu
            detailsProps={DEFAULT_DETAIL_PROPS}
            ulProps={DEFAULT_UL_PROPS}
          />
        </li>
      </ul>
    </div>
  </header>
)

export default Header
