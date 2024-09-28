import HomeLogo from "/images/home.png";
import Postcast from "/images/Postcast.png";
import Digizen from "/images/digizen.png";
import Profile from "/images/profile.png";
import { useState } from "react";
function MenuNav({activeChat}){
    const [activeButton, setActiveButton] = useState ("home");
    const buttonHandle = (value) => {
        setActiveButton(value);
    }
    return(
        <section className={activeChat ?"p-[15px] w-[24.2%] z-20 bg-white absolute top-[48.5px] menu-small-screen" : "px-[20px] py-[15px] z-20 bg-white fixed w-[36.3%] top-[50px] menu-big-screen"}>
            <ul className="flex flex-row w-full flex-wrap justify-start gap-[4px]">
                <li className={`flex flex-row hover:bg-[#ECF1F4] gap-1 min-w-[50px] py-[8px] px-[18px] rounded-[20px] justify-center items-center ${activeButton === "home" ? "bg-[#00BCD4]" : ""}`} onClick={()=>buttonHandle("home")}>
                    <img className={activeChat ? "w-[15px] h-[15px]" : "w-[20px] h-[20px]"} src={HomeLogo} />
                    <span className={activeChat ? "text-[12px] font-medium text-[#2C3E50]" : "text-[16px] font-bold text-[#2C3E50]"}>Home</span>
                </li>

                <li className={`flex flex-row hover:bg-[#ECF1F4] gap-1 min-w-[50px] py-[8px] px-[18px] rounded-[20px] justify-center items-center ${activeButton === "postcast" ? "bg-[#00BCD4]" : ""}`} onClick={()=>buttonHandle("postcast")}>
                    <img className={activeChat ? "w-[15px] h-[15px]" : "w-[20px] h-[20px]"} src={Postcast} />
                    <span className={activeChat ? "text-[12px] font-medium text-[#2C3E50] leading-[21px]" : "text-[16px] font-bold text-[#2C3E50]"}>Postcasts</span>
                </li>

                <li className={`flex flex-row hover:bg-[#ECF1F4] gap-1 min-w-[50px] py-[8px] px-[18px] rounded-[20px] justify-center items-center ${activeButton === "digizen" ? "bg-[#00BCD4]" : ""}`} onClick={()=>buttonHandle("digizen")}>
                    <img className={activeChat ? "w-[15px] h-[15px]" : "w-[20px] h-[20px]"} src={Digizen} />
                    <span className={activeChat ? "text-[12px] font-medium text-[#2C3E50]" : "text-[16px] font-bold text-[#2C3E50]"}>Digizens</span>
                </li>

                <li className={`flex flex-row hover:bg-[#ECF1F4] gap-1 min-w-[50px] py-[8px] px-[18px] rounded-[20px] justify-center items-center ${activeButton === "profile" ? "bg-[#00BCD4]" : ""}`} onClick={()=>buttonHandle("profile")}>
                    <img className={activeChat ? "w-[15px] h-[15px]" : "w-[20px] h-[20px]"} src={Profile} />
                    <span className={activeChat ? "text-[12px] font-medium text-[#2C3E50]" : "text-[16px] font-bold text-[#2C3E50]"} >Profile</span>
                </li>

            </ul>
        </section>
    )
}

export default MenuNav;