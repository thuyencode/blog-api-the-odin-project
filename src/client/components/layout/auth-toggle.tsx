import { useCloseDetailsElement } from '@/client/hooks'
import { Icon } from '@iconify/react'
import type { ReactElement } from 'react'

const AuthToggle = (): ReactElement => {
  const ref = useCloseDetailsElement()

  return (
    <details className='dropdown dropdown-end' ref={ref}>
      <summary className='inline-flex items-center gap-2'>
        <Icon className='text-xl' icon='mdi:login' />
        <a className='link-hover link link-primary'>Log in</a>
      </summary>

      <ul className='menu dropdown-content z-[1] w-40 rounded-box border border-base-content/50 bg-base-300 p-2 shadow-lg'>
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

export default AuthToggle
