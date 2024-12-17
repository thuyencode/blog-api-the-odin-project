import { useAuth } from '@/client/contexts/auth'
import { useDetailsElementInteraction } from '@/client/hooks'
import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'
import type { ComponentProps, FunctionComponent, ReactElement } from 'react'

interface AuthMenuProps {
  detailsProps?: Omit<ComponentProps<'details'>, 'ref'>
  ulProps?: ComponentProps<'ul'>
}

const AuthMenu: FunctionComponent<AuthMenuProps> = ({
  detailsProps,
  ulProps
}) => {
  const { isAuthenticated, logOut } = useAuth()
  const ref = useDetailsElementInteraction()

  const renderMenuItems = (): ReactElement => {
    if (isAuthenticated) {
      return (
        <li>
          <button
            className='inline-flex items-center gap-2'
            type='button'
            onClick={() => {
              void logOut()
            }}
          >
            <Icon className='text-xl' icon='mdi:login' />
            Log out
          </button>
        </li>
      )
    }

    return (
      <>
        <li>
          <Link
            className='link-hover link inline-flex items-center gap-2'
            to='/log-in'
          >
            <Icon className='text-xl' icon='mdi:login' />
            Log in
          </Link>
        </li>
        <li>
          <Link
            className='link-hover link inline-flex items-center gap-2'
            to='/register'
          >
            <Icon className='text-xl' icon='mdi:register-outline' />
            Register
          </Link>
        </li>
      </>
    )
  }

  return (
    <details {...detailsProps} ref={ref}>
      <summary>
        <Icon className='text-xl' icon='mdi:user' />
        Account
      </summary>

      <ul {...ulProps}>{renderMenuItems()}</ul>
    </details>
  )
}

export default AuthMenu
