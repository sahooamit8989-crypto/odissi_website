import React from 'react'
import { Outlet } from 'react-router-dom'

const Guruji = () => {
  return (
     <div>
      {/* ===== NESTED CONTENT ===== */}
      <Outlet />
    </div>
  )
}

export default Guruji
