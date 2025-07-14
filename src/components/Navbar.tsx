import JIXLogo from "../assets/JIXLogo.png"
import SearchIcon from "../assets/SearchIcon.png"

import { Link } from "react-router-dom"
export default function Navbar() {
	return (
		<nav className= "w-full h-16  flex justify-center">
		  <button className="w-1/3 h-full">
		  	<img src={JIXLogo} className="object-scale-down h-full cursor-pointer"/>
		  </button>
		  <ul className="w-1/3 flex justify-between w-full items-center">
				<li><Link to= "/" className=" text-white hover:text-[#fbca27] cursor-pointer">HOME</Link></li>
				<li><Link to= "/Videos" className=" text-white hover:text-[#fbca27] cursor-pointer">VIDEOS</Link></li>
				<li><button className=" text-white hover:text-[#fbca27] cursor-pointer">WATCH LATER</button></li>
		  </ul>
		  <button className="w-1/3 h-full flex justify-end cursor-pointer">
		  	<img src={SearchIcon} className="object-scale-down h-full"/>
		  </button>
		</nav>
	)
}