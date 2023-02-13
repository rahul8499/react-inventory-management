import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import navW from '../../Assects/Images/nav.png'

// import navW from './navbarImage/nav.png'

const Navbar = () => {
  // let [nowTime, SetTime] = useState(new Date().toLocaleTimeString('en-GB', { hour12: true } )
  //  let [nowDate, setDate] = useState(new Date().getDate() + " "+ Intl.DateTimeFormat('en', { month: 'short' }).format(
  //  new Date(),
  // ) +" "+ new Date().getFullYear())

  let [nowTime, SetTime] = useState(
    new Date().toLocaleTimeString('en-GB', { hour12: true }) +
      ' ' +
      new Date().getDate() +
      ' ' +
      Intl.DateTimeFormat('en', { month: 'short' }).format(new Date()) +
      ' ' +
      new Date().getFullYear(),
  )

  useEffect(() => {
    setInterval(() => {
      SetTime(
        new Date().toLocaleTimeString('en-GB', { hour12: true }) +
          ' ' +
          new Date().getDate() +
          ' ' +
          Intl.DateTimeFormat('en', { month: 'short' }).format(new Date()) +
          ' ' +
          new Date().getFullYear(),
      )
      // SetTime(new Date().toLocaleTimeString('en-GB', { hour12: true }))

      //     setDate(new Date().getDate() + " "+ Intl.DateTimeFormat('en', { month: 'short' }).format(
      //  new Date(),
      // ) +" "+ new Date().getFullYear()  )
    }, 1000)
  })

  return (
    <>
      <nav>
        <ul className="d-flex fw-bold ">
          <li className="CompanyName col-2 col-md-2">
            <span className="">BUILD</span>
            MAX
          </li>

          <div className="col-2 col-md-4 ">
            <li className="GobackIcon">
              <Link to="/">
                <i className="bi bi-chevron-compact-left"></i> Go back
              </Link>
            </li>
          </div>

          <div className=" col-4 col-md-4 col-sm-6">
            <div className="dateTime">{nowTime}</div>
          </div>
          <div>
            <li>
              <Link to="/ " className="link-dark">
                <i className="bi bi-bell notificationIcon ">
                  <span className="position-absolute  badge rounded-pill  notificationCount">
                    1
                  </span>
                </i>
              </Link>
            </li>
          </div>
          <div className="userName">
            <li>Adam Smith</li>
            Manager
          </div>

          <div>
            <img
              src={navW}
              className="rounded-pill  navbarimage "
              alt="userImage"
            />
          </div>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
