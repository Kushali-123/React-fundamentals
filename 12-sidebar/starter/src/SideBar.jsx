import React from 'react'
import { useGlobalContext } from './context'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { links, social } from './data'

const SideBar = () => {
  const { isSideBarOpen, closeSideBar } = useGlobalContext()
  return (
    <aside className={isSideBarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="sidebar-header">
        <img src={logo} alt="coding addict" className="logo"></img>
        <button onClick={closeSideBar} className="close-btn">
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, icon, text } = link
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          )
        })}
      </ul>

      <ul className="social-links">
        {social.map((link) => {
          const { id, url, icon} = link
          return (
            <li key={id}>
              <a href={url}>
                {icon}
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default SideBar
