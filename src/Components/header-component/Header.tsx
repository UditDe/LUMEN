import React from 'react'
import "./Header.scss"

const Header : React.FC = () => {
  return (
    <div className='header'>
        <div className="logo-container">
            LUMEN
        </div>
        <div className="account-settings">
            account
        </div>
    </div>
  )
}

export default Header