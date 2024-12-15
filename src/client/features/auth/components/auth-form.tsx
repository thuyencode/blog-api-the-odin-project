import type { AuthCredentialInput } from '@/shared/types/auth.type'
import { AuthCredentialSchema } from '@/shared/validation/auth.schema'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { Link } from '@tanstack/react-router'
import type { FunctionComponent } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { TextInputField } from './ui'

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

export const AuthForm: FunctionComponent<AuthFormProps> = ({ type }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm<AuthCredentialInput>({
    resolver: valibotResolver(AuthCredentialSchema)
  })

  const onSubmit: SubmitHandler<AuthCredentialInput> = async (values) => {
    console.log(values)
    await new Promise((resolve) => {
      setTimeout(resolve, 2000)
    })
  }

  return (
    <div
      className='h-min w-full max-w-lg rounded-box border border-base-content/25 px-6 py-5 text-center'
      onSubmit={(event) => {
        void handleSubmit(onSubmit)(event)
      }}
    >
      <div className='space-y-1'>
        <h3 className='block'>{FORM_TEXTS[type].title}</h3>
        <span className='block text-base-content'>
          {FORM_TEXTS[type].sub_title}
        </span>
      </div>

      <div className='divider' />

      <form className='space-y-2.5'>
        <TextInputField
          {...register('username')}
          placeholder='Username'
          icon='mdi:user'
          type='text'
          error={errors.username}
          minLength={2}
          maxLength={25}
          required
        />

        <TextInputField
          {...register('password')}
          placeholder='Password'
          icon='mdi:key'
          type='password'
          error={errors.password}
          minLength={8}
          maxLength={30}
          required
        />

        <button
          className='btn btn-primary btn-block'
          type='submit'
          disabled={isSubmitting}
        >
          {isSubmitting
            ? FORM_TEXTS[type].btn_is_submitting
            : FORM_TEXTS[type].title}
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
}
