import { useDetailsElementInteraction } from '@/client/hooks'
import { Icon } from '@iconify/react'
import {
  useEffect,
  useState,
  type ComponentProps,
  type FunctionComponent
} from 'react'
import { themeChange } from 'theme-change'

interface ThemeToggleProps {
  detailsProps?: Omit<ComponentProps<'details'>, 'ref'>
  ulProps?: ComponentProps<'ul'>
}

const TOGGLE_STATES = {
  default: { name: 'system', icon: 'mdi:computer', theme: '' },
  light: { name: 'light', icon: 'ph:sun-fill', theme: 'light' },
  dark: { name: 'dark', icon: 'ph:moon-fill', theme: 'dark' }
}

const ThemeToggle: FunctionComponent<ThemeToggleProps> = ({
  detailsProps,
  ulProps
}) => {
  const ref = useDetailsElementInteraction()
  const [toggleState, setToggleState] = useState(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- This is fine
    const theme = localStorage.getItem('theme') as 'light' | 'dark' | ''

    return TOGGLE_STATES[!theme ? 'default' : theme]
  })

  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <details {...detailsProps} ref={ref}>
      <summary className='capitalize'>
        <Icon className='text-xl' icon={toggleState.icon} />
        <span>{toggleState.name}</span>
      </summary>

      <ul {...ulProps}>
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
