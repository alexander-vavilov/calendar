import { useState } from 'react'

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null)
  const [modalTitle, setModalTitle] = useState('')

  const openModal = (content: JSX.Element, title: string) => {
    setModalContent(content)
    setIsModalOpen(true)
    setModalTitle(title)
  }

  return {
    isModalOpen,
    openModal,
    closeModal: () => setIsModalOpen(false),
    modalContent,
    modalTitle
  }
}

export default useModal
