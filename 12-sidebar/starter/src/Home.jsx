import React from 'react'
import { useGlobalContext } from './context'
import { FaBars } from 'react-icons/fa'

const Home = () => {
  const { openSideBar, openModal } = useGlobalContext()
  console.log(openSideBar)

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSideBar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show Modal
      </button>
    </main>
  )
}

export default Home
