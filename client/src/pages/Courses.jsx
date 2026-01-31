import React from 'react'
import { Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <div>
      {/* ===== NESTED CONTENT ===== */}
      <Outlet />
    </div>
  )
}

export default Courses
