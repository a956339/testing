import React from 'react'
import homeCss from "../Dashboard/Home.module.css"
import Sidebar from './SideBar/Sidebar';
import Navbar from '../Navbar/Navbar';
const Home = () => {
   
    return (
        <div className={homeCss.mainCointainer_dasboard}>
            <div className={homeCss.Main_dasboard}>
                <Navbar />
                <Sidebar />
            </div>
        </div>
    )
}

export default Home;