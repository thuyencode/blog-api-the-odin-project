import { Icon } from '@iconify/react'
import type { FunctionComponent } from 'react'

const Footer: FunctionComponent = () => (
  <footer className='footer footer-center bg-base-300 p-3 text-base-content'>
    <aside>
      <a
        className='link-hover link inline-flex items-center gap-1 text-sm font-semibold'
        href='https://github.com/thuyencode/file-uploader-the-odin-project'
        target='_blank'
        rel='noreferrer noopener'
      >
        <Icon className='text-base' icon='mdi:copyright' /> THUYEN CODE
      </a>
    </aside>
  </footer>
)

export default Footer
