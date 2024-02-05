import React from 'react'
import { Outlet } from 'react-router-dom'
import "../index.css"

const Layout = () => {
  return (
    <>
        <Outlet/>
        <footer>
            <span className="layOut">05.02.2024</span>
        </footer>
    </>
  )
}

export default Layout