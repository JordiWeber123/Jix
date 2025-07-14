import { useState } from 'react'
import MovieCard from '../components/MovieCard'

function Videos() {
	const [count, setCount] = useState(0)
	return (
		<div className="flex justify-evenly flex-wrap">
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
		
		</div>
	)
}

export default Videos