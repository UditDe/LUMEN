import React from 'react'
import Header from '../Components/header-component/Header'

const Home : React.FC = () => {
  return (
    <div className='layout'>
        <Header />
        <div className="main-container">
            <div className="left-container"></div>
            <div className="right-container"></div>
        </div>
    </div>
  )
}

export default Home