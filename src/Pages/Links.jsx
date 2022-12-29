import React from 'react'
import { Outlet } from 'react-router'
import Subnavigation from '../Components/Dashboard/Subnavigation'

const Links = () => {
  return (
    <div>
    <Subnavigation />
    <Outlet />
    </div>
  )
}

export default Links