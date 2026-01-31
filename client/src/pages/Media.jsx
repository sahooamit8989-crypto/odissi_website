import React from 'react'
import { Outlet } from 'react-router-dom'

const Media = () => {
  return (
     <div>
      {/* ===== NESTED CONTENT ===== */}
      <Outlet/>
    </div>
  )
}

export default Media
