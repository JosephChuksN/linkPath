import React from 'react'
import { Outlet } from 'react-router'
import Subnavigation from '../Components/Dashboard/Links/Subnavigation'

const Links = () => {
  return (
    <div>
    <Subnavigation />
    <Outlet />
    </div>
  )
}

export default Links