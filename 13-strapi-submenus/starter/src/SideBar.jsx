import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './Context'
import sublinks from './data'

const SideBar = () => {
  const { isSideBarOpen, closeSideBar } = useGlobalContext()
  return (
    <aside className={isSideBarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSideBar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item) => {
            const { links, page, pageId } = item
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link) => {
                    const { url, icon, label, id } = link
                    return (
                      <a key={id} href={url}>
                        {icon}
                        {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default SideBar
