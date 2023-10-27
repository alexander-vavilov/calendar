import { FC, ReactNode, createContext } from 'react'
import Modal from '../components/Modal'
import useModal from '../hooks/useModal'
import { ModalContextType } from '../types'

export const ModalContext = createContext<ModalContextType | null>(null)

export const ModalContextProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const { isModalOpen, openModal, closeModal, modalContent, modalTitle } =
    useModal()

  const value = {
    openModal,
    closeModal
  }

  return (
    <ModalContext.Provider value={value}>
      {children}
      <Modal isOpen={isModalOpen} onClose={closeModal} title={modalTitle}>
        {modalContent}
      </Modal>
    </ModalContext.Provider>
  )
}
