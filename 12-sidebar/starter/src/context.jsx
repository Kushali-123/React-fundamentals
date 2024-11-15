import { createContext, useContext, useState } from 'react'

const AppContext = createContext();

export const useGlobalContext = () => {
   return  useContext(AppContext); 
}

export const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openSideBar = () => {
    setIsSideBarOpen(true)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeSideBar = () => {
    setIsSideBarOpen(false)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSideBarOpen,
        openModal,
        openSideBar,
        closeModal,
        closeSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
