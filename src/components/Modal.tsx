import clsx from 'clsx'
import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { IoIosClose } from 'react-icons/io'
import useClickAway from '../hooks/useClickAway'
import { useKeyDown } from '../hooks/useKeyDown'

interface IModal {
  isOpen?: boolean
  onClose: () => void
  children: ReactNode
  title: string
  className?: string
  overlay?: boolean
}

const Modal: FC<IModal> = ({
  isOpen = true,
  onClose,
  children,
  title,
  className,
  overlay = true
}) => {
  const element = document.getElementById('modal')

  const ref = useClickAway(() => onClose())
  useKeyDown((e) => {
    if (e.key === 'Escape') onClose()
  })

  if (!element) return
  return (
    isOpen &&
    createPortal(
      <>
        <div
          ref={ref}
          className={clsx(
            'fixed left-1/2 top-1/2 z-30 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-4 shadow-xl',
            className
          )}
        >
          <header className='flex items-center justify-between gap-4 pb-4'>
            <span className='text-lg font-medium'>{title}</span>
            <button onClick={onClose}>
              <IoIosClose size={28} />
            </button>
          </header>
          {children}
        </div>
        {overlay && (
          <div className='fixed left-0 top-0 z-20 h-full w-full bg-black/50' />
        )}
      </>,
      element
    )
  )
}

export default Modal
