import React, { useRef } from 'react'
import { useGlobalContext } from './Context'
import sublinks from './data'

const SubMenu = () => {
  const { pageId } = useGlobalContext()
  const submenuContainer = useRef(null);

  const currentPage = sublinks.find((item) => item.pageId === pageId)

  const handleMouseLeave = (event) => {
    const submenu = submenuContainer.current;
    const {left, right, bottom} = submenu.getBoundingClientRect();
    const {clientX, clientY} = event

    if(clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1){
      setPageId(null);
    }
  }

  return (
    <div
      className={currentPage ? 'submenu show-submenu' : 'submenu'}
      ref={submenuContainer}
      onMouseLeave={handleMouseLeave}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default SubMenu
