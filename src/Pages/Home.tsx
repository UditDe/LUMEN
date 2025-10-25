import React from 'react'
import Header from '../Components/header-component/Header'
import SidebarMain from '../Components/slidebar-component/SidebarMain'

const Home : React.FC = () => {
  return (
    <div className='layout'>
        <Header />
        <div className="main-container">
            <div className="left-container">
                <SidebarMain />
            </div>
            <div className="right-container"></div>
        </div>
    </div>
  )
}

export default Home