import React from 'react'
import Header from '../Components/header-component/Header'
import SidebarMain from '../Components/slidebar-component/SidebarMain'
import "./Home.scss"

const Home : React.FC = () => {
  return (
    <div className='layout'>
        <Header />
        <div className="main-container">
            <div className="left-container">
                <SidebarMain />
            </div>
            <div className="right-container">
              cacds
            </div>
        </div>
    </div>
  )
}

export default Home