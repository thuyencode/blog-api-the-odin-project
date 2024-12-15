import { Icon } from '@iconify/react/dist/iconify.js'
import { Link } from '@tanstack/react-router'
import type { FunctionComponent } from 'react'

const FORM_TEXTS = {
  'log-in': {
    title: 'Log in',
    sub_title: 'Log in using your username and password',
    second_choice: "I don't have an account",
    second_choice_link: '/register',
    btn_is_submitting: 'Logging in...'
  },
  register: {
    title: 'Register',
    sub_title: 'Create a new account using username and password',
    second_choice: 'I have an account already',
    second_choice_link: '/log-in',
    btn_is_submitting: 'Registering...'
  }
} as const

interface AuthFormProps {
  type: keyof typeof FORM_TEXTS
}

export const AuthForm: FunctionComponent<AuthFormProps> = ({ type }) => (
  <div className='h-min w-full max-w-lg rounded-box border border-base-content/25 px-6 py-5 text-center'>
    <div className='space-y-1'>
      <h3 className='block'>{FORM_TEXTS[type].title}</h3>
      <span className='block text-base-content'>
        {FORM_TEXTS[type].sub_title}
      </span>
    </div>

    <div className='divider' />

    <form className='space-y-2.5'>
      <div className='space-y-1.5'>
        <label className='input input-bordered flex items-center gap-2'>
          <Icon className='text-lg' icon='mdi:user' />
          <input type='text' className='grow' placeholder='Username' />
        </label>

        <div className='pb-2 text-error'>Error!</div>
      </div>

      <div className='space-y-1.5'>
        <label className='input input-bordered flex items-center gap-2'>
          <Icon className='text-lg' icon='mdi:key' />
          <input type='text' className='grow' placeholder='Password' />
        </label>

        <div className='pb-2 text-error'>Error!</div>
      </div>

      <button className='btn btn-primary btn-block' type='submit'>
        {FORM_TEXTS[type].title}
      </button>

      <Link
        className='btn btn-link btn-block font-medium text-base-content no-underline hover:underline'
        to={FORM_TEXTS[type].second_choice_link}
      >
        {FORM_TEXTS[type].second_choice}
      </Link>
    </form>
  </div>
)
