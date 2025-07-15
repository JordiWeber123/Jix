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
				<li className="hover:bg-[#fbca27] w-full h-full flex align-center">
					<Link to= "/" className="w-full h-full text-white cursor-pointer flex items-center justify-center">HOME</Link>
				</li>
				<li className="hover:bg-[#fbca27] w-full h-full flex align-center">
					<Link to= "/Videos" className="w-full h-full text-white cursor-pointer flex items-center justify-center">VIDEOS</Link>
					</li>
				<li className="hover:bg-[#fbca27] w-full h-full">
					<Link to="/" className="w-full h-full text-white cursor-pointer flex items-center justify-center">LIBRARIES</Link>
				</li>
				<li className="hover:bg-[#fbca27] w-full h-full">
					<Link to="/" className="w-full h-full text-white cursor-pointer flex items-center justify-center">WATCH LATER</Link>
				</li>

		  </ul>
		  <button className="w-1/3 h-full flex justify-end cursor-pointer">
		  	<img src={SearchIcon} className="object-scale-down h-full"/>
		  </button>
		</nav>
	)
}