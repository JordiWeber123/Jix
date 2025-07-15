import { Link } from 'react-router-dom'
import JIXLogo from '../assets/JIXLogo.png'
function Home() {
	return (<>
		<Link to="/Videos" className="cursor-pointer">
		  <img src={JIXLogo}/>
		</Link>
		<p className="bg-black text-[#fbca27] font-bold text-6xl pb-20"> Home Page</p>
	
	</>)
}

export default Home