import { cn } from '@/client/libs/tailwind'
import { Icon, type IconifyIconProps } from '@iconify/react'
import { forwardRef, type ComponentProps } from 'react'
import type { FieldError } from 'react-hook-form'

type TextInputFieldProps = Omit<ComponentProps<'input'>, 'className' | 'id'> &
  Pick<IconifyIconProps, 'icon'> & {
    error?: FieldError
  }

export const TextInputField = forwardRef<HTMLInputElement, TextInputFieldProps>(
  ({ name, icon, error, ...props }, ref) => (
    <div className='space-y-1.5'>
      <label
        className={cn('input input-bordered flex items-center gap-2', {
          'input-error': Boolean(error)
        })}
        htmlFor={name}
      >
        <Icon className='text-lg' icon={icon} />
        <input {...props} className='grow' name={name} id={name} ref={ref} />
      </label>

      {error ? <div className='pb-2 text-error'>{error.message}!</div> : null}
    </div>
  )
)
