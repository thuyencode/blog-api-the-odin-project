import { Icon } from '@iconify/react'
import type { FunctionComponent } from 'react'
import { createPortal } from 'react-dom'
import AuthMenu from './auth-menu'
import Search from './search'
import ThemeToggle from './theme-toggle'

const sidebarElement = document.getElementById('sidebar')

if (!sidebarElement) {
  throw new Error("There's no element with id 'sidebar'")
}

const Sidebar: FunctionComponent = () =>
  createPortal(
    <div className='size-full max-w-md space-y-3.5 border-r border-r-base-content/50 bg-base-200 p-2 pt-3.5 lg:hidden'>
      <div className='flex items-center justify-between text-base-content'>
        <h4 className='inline-flex items-center gap-1 font-bold'>
          Thuyen Blog
        </h4>

        <label
          htmlFor='sidebar-toggle'
          className='btn btn-outline btn-error btn-sm xl:hidden'
          aria-label='open sidebar'
        >
          <Icon className='text-xl' icon='mdi:hamburger-open' />
        </label>
      </div>

      <Search />

      <ul className='menu p-0'>
        <li>
          <AuthMenu />
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </div>,
    sidebarElement
  )

export default Sidebar
