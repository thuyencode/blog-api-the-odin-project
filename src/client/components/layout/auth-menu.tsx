import { useDetailsElementInteraction } from '@/client/hooks'
import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

const AuthMenu = (): ReactElement => {
  const ref = useDetailsElementInteraction()

  return (
    <details className='dropdown dropdown-end' ref={ref}>
      <summary>
        <Icon className='text-xl' icon='mdi:user' />
        Account
      </summary>

      <ul className='menu dropdown-content z-[1] w-40 rounded-box border border-base-content/50 bg-base-300 p-2 shadow-lg'>
        <li>
          <Link
            className='link-hover link inline-flex items-center gap-2'
            to='/'
          >
            <Icon className='text-xl' icon='mdi:login' />
            Log in
          </Link>
        </li>
        <li>
          <a className='link-hover link inline-flex items-center gap-2'>
            <Icon className='text-xl' icon='mdi:register-outline' />
            Register
          </a>
        </li>
      </ul>
    </details>
  )
}

export default AuthMenu
