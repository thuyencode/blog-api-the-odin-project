import { useDetailsElementInteraction } from '@/client/hooks'
import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'
import type { ComponentProps, FunctionComponent } from 'react'

interface AuthMenuProps {
  detailsProps?: Omit<ComponentProps<'details'>, 'ref'>
  ulProps?: ComponentProps<'ul'>
}

const AuthMenu: FunctionComponent<AuthMenuProps> = ({
  detailsProps,
  ulProps
}) => {
  const ref = useDetailsElementInteraction()

  return (
    <details {...detailsProps} ref={ref}>
      <summary>
        <Icon className='text-xl' icon='mdi:user' />
        Account
      </summary>

      <ul {...ulProps}>
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
