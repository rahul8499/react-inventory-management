import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import sData from './sidebarData'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className="container  ">
        <div
          style={{
            width: isOpen ? '12vw' : '4vw',
            height: '100vh',
          }}
        >
          {sData.map((item, index) => (
            <NavLink
              className={` tagHover inactive  `}
              to={item.path}
              key={index}

            >
              <div className={item.icon} title={isOpen ? '' : item.title}>
                {' '}
              </div>

              <div
                className="link_text "
                style={{ display: isOpen ? 'block' : 'none' }}
              >
                {item.name}
                {/* <div style={{color:"black"}}>{item.hr}</div> */}
              </div>
            </NavLink>
          ))}

          <hr />
          <div>
            <NavLink to="/logout" className=" tagHover inactive  ">
              <i
                className="bi bi-box-arrow-right "
                title={isOpen ? '' : 'logout'}
              ></i>
              <span
                style={{
                  display: isOpen ? 'inline-block' : 'none',
                }}
              >
                Logout
              </span>
            </NavLink>
          </div>

          <div className="toggleButton">
            <div style={{ display: isOpen ? 'block' : 'none' }}>
              <i
                className="bi bi-chevron-double-right fixed-bottom"
                onClick={toggle}
                style={{ fontSize: '2vw', width: '12vw' }}
              ></i>
            </div>
            <div style={{ display: isOpen ? 'none' : 'block' }}>
              <i
                onClick={toggle}
                className="bi bi-chevron-double-left fixed-bottom"
                style={{ fontSize: '2vw', width: '5vw' }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
