import { useCloseDetailsElement } from '@/client/hooks'
import { Icon } from '@iconify/react'
import { useEffect, useState, type FunctionComponent } from 'react'
import { themeChange } from 'theme-change'

const TOGGLE_STATES = {
  default: { name: 'system', icon: 'mdi:computer', theme: '' },
  light: { name: 'light', icon: 'ph:sun-fill', theme: 'light' },
  dark: { name: 'dark', icon: 'ph:moon-fill', theme: 'dark' }
}

const ThemeToggle: FunctionComponent = () => {
  const ref = useCloseDetailsElement()
  const [toggleState, setToggleState] = useState(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- This is fine
    const theme = localStorage.getItem('theme') as 'light' | 'dark' | ''

    return TOGGLE_STATES[!theme ? 'default' : theme]
  })

  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <details className='dropdown dropdown-end' ref={ref}>
      <summary className='gap-2 capitalize'>
        <Icon className='text-xl' icon={toggleState.icon} />
        <span>{toggleState.name}</span>
      </summary>

      <ul className='menu dropdown-content z-[1] w-40 rounded-box border border-base-content/50 bg-base-300 p-2 shadow-lg'>
        {Object.values(TOGGLE_STATES).map((state) => (
          <li key={state.name}>
            <button
              type='button'
              className='capitalize'
              data-set-theme={state.theme}
              data-act-class='ACTIVECLASS'
              onClick={() => {
                setToggleState(state)
              }}
            >
              <Icon className='text-xl' icon={state.icon} />
              {state.name}
            </button>
          </li>
        ))}
      </ul>
    </details>
  )
}

export default ThemeToggle
