import React from 'react'
import "./Navbar.css"
import { IoMdNotificationsOutline } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";


const Navbar = () => {
    const days = ["Sunday", "Monday",
        "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const dayName = days[today.getDay()];
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    const todayDate = `${day}/${month}/${year}`;
    return (
        <div className="mainCointainer_dasboard">


            <div className='Main_dasboard'>
                <div className="navbar">
                    <div className="Title">
                        <h1><span className='dash'>Dash</span>board</h1>
                    </div>
                    <div className="searchBar">
                        <input type="search" id="Search" placeholder='Search your task here' />
                        <div className="search_icon">
                            <IoIosSearch />
                        </div>
                    </div>

                    <div className="Navnotifications">
                        <div className="notifications">
                            <div className="bell">
                                <IoMdNotificationsOutline size={17} />
                            </div>
                            <div className="bell">
                                <SlCalender size={17} />
                            </div>
                        </div>

                        <div className="date">
                            {/* {formattedDate} */}
                            <p>{dayName}</p>
                            <p>{todayDate}</p>

                        </div>

                    </div>
                </div>

              
            </div>
        </div>
    )
}

export default Navbar;