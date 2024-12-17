import { Icon, type IconifyIconProps } from '@iconify/react'
import type { ComponentProps, FunctionComponent, ReactNode } from 'react'
import type { FieldError, GlobalError } from 'react-hook-form'

interface ErrorMessageProps extends ComponentProps<'div'> {
  error?: FieldError | (Record<string, GlobalError> & GlobalError)
  icon?: IconifyIconProps['icon']
  iconClassName?: ComponentProps<'svg'>['className']
}

export const ErrorMessage: FunctionComponent<ErrorMessageProps> = ({
  error,
  icon,
  iconClassName,
  ...props
}) => {
  const renderIcon = (): ReactNode => {
    if (icon) {
      return <Icon className={iconClassName} icon={icon} />
    }

    return null
  }

  if (error) {
    return (
      <div {...props}>
        {renderIcon()}
        {error.message}!
      </div>
    )
  }

  return null
}
