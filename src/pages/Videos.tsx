import MovieCard from '../components/MovieCard.tsx'
import Movie from '../Movie.tsx'
import NotFound from "../assets/NotFound.png"
import { useEffect, useRef, useState } from 'react'
import DriveIcon from "../assets/driveIcon.png"
import DriveFolderButton from '../components/DriveFolderButton.tsx'
function Videos() {
	
	const [movies, setMovies] = useState<Movie[] | null>([]);
	const [fileSrc, setFileSrc] = useState<string>("");
	useEffect(() => {
		const getSource = async () => {
			setFileSrc(await window.state.getFileSource())
		};

		getSource();
	}, [])
		
	if (movies === null || movies.length === 0) {
		const moviesHandler = async () => {
			const filePaths : string[] = (await window.moviesAPI.selectMovieDirectory()).filePaths;
			setMovies( await window.moviesAPI.getMovies(filePaths[0], 1));
		};
		
		if (fileSrc === "fs") {
			return (<div className="flex justify-center w-full h-full">
				<div className='w-1/3 h-1/3 flex-col'>
					<img src={NotFound} className='object-contain' />
					<p className='text-white text-2xl'>No videos were found</p>
					<button onClick={moviesHandler} 
							className='text-white bg-[#fbca27] cursor-pointer text-start text-xl rounded-4xl p-2 m-2'>
							Open file explorer
					</button>				
				</div>
			</div> )	
		}else if (fileSrc === "Drive") {
			return (<div className="flex justify-center w-full h-full">
				<div className='w-1/3 h-1/3 flex-col'>
					<img src={NotFound} className='object-contain' />
					<p className='text-white text-2xl'>No videos were found</p>
					<DriveFolderButton callback={async (data) => setMovies(await window.moviesAPI.getMovies(data.id, 50))}/>
				</div>
			</div> )
		}
	}

	return (
		<div className="flex justify-evenly flex-wrap">
			{movies?.map((movie) => (
				<MovieCard movie={movie}/>
			))}
		</div>
	)
}

export default Videos