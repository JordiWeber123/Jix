import MovieCard from '../components/MovieCard.tsx'
import Movie from '../Movie.tsx'
import NotFound from "../assets/NotFound.png"

function Videos() {
	const movies :Movie[] = [
	]
	if (movies.length === 0) {
		return (<div className="flex justify-center w-full h-full">
			<div className='w-1/3 h-1/3 flex-col'>
				<img src={NotFound} className='object-contain' />
				<p className='text-white text-2xl'>No videos were found</p>
				<button className='text-white bg-[#fbca27] text-start text-xl rounded-4xl p-2 m-2'>Open file explorer</button>
			</div>
		</div> )
	}

	return (
		<div className="flex justify-evenly flex-wrap">
			{movies.map((movie) => (
				<MovieCard movie={movie}/>
			))}
		</div>
	)
}

export default Videos