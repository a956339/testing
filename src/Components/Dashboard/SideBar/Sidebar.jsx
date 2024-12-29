import React, { useState } from 'react'
import "../SideBar/Sidebar.css"
import { MdDashboard } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { BsExclamationLg } from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import HomeContent from '../../SideBarContent/HomeContent/HomeContent';
import Setting from '../../SideBarContent/Setting/Setting';

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState('Dashboard');
    const navigate = useNavigate();

    const tabs = {
        Dashboard: <HomeContent />,  
        Setting : <Setting />,
    };

    return (
        <div className="main_content">

       
        <div className="sidebar">
            <div className="profile_Image">
                <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_1280.png" alt="" className='Client_image' />
            </div>

            <div className="clientDeatil">
                <p className='Client_name'>Anjay kumar</p>
                <p>anjay@gmail.com</p>
            </div>

            <div className="sidebar_handle">
                <div className="sidebar_top">
                    <div to="HomeContent" className="option" onClick={()=>setActiveTab("Dashboard")}>
                        <MdDashboard size={25} color='#FF6867' />
                        <p >Dashboard</p>
                    </div>

                    <div className="option">
                        <BsExclamationLg size={25} color='#FF6867' />
                        <p>Vital Task</p>
                    </div>

                    <div className="option">
                        <BiTask size={25} color='#FF6867' />
                        <p>My Task</p>
                    </div>

                    <div className="option">
                        <HiMiniBars3BottomLeft size={25} color='#FF6867' />
                        <p>Task Categories</p>
                    </div>

                    <div className="option" onClick={()=>setActiveTab("Setting")}>
                        <IoMdSettings size={25} color='#FF6867' />
                        <p>Settings</p>
                    </div>
                </div>

                <div className="sidebar_bottom" onClick={() => navigate("/LoginPage")}>
                    <FiLogOut size={25} />
                    <p>Logout</p>
                </div>
            </div>
        </div>

<div className="sideBar_right">
{tabs[activeTab]}
</div>


        </div>
    );
}

export default Sidebar;
