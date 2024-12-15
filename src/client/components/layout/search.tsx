import { cn } from '@/client/libs/tailwind'
import { Icon } from '@iconify/react'
import type { ComponentProps, FunctionComponent } from 'react'

interface SearchProps {
  labelProps?: ComponentProps<'label'>
}

const defaultLabelProps: ComponentProps<'label'> = {}

const Search: FunctionComponent<SearchProps> = ({
  labelProps = defaultLabelProps
}) => {
  const { className: labelClassName, ...restLabelProps } = labelProps

  return (
    <label
      {...restLabelProps}
      className={cn(
        'input input-bordered flex items-center gap-2',
        labelClassName
      )}
    >
      <input type='text' className='grow' placeholder='Search' />
      <Icon className='text-xl' icon='mdi:search' />
    </label>
  )
}

export default Search
