
import Movie from "../Movie"
import { useEffect, useState, memo } from "react";


//Warpper type I have to do because of how React interprets types in components
type MovieProps = {
	movie: Movie;
}

function MovieCard({movie}: MovieProps) {
	const [imgStr, setImgStr] = useState<string | null>(null);
	useEffect(()=>{
		const loadThumbnail = async () => {
			if (!imgStr){
				try {
					const thumbnail = await window.ffmpegAPI.getThumbnail(movie.path);
					setImgStr(thumbnail);
				} catch (error){
					console.log("Failed to load thumbnail: ", error);
				}
			}
		}
	loadThumbnail();
	} , [imgStr])

	return (
		<div className="w-80 flex flex-col justify-evenly m-1">
		  <div className="bg-[#272822] w-full h-45 rounded-lg">
			<img className="object-contain w-full h-full rounded-lg" src={`data:image/jpeg;base64,${imgStr}`}/>
		  </div>
		  <div className="w-full">
		    <p className="w-full text-left capitalize truncate overflow-hidden whitespace-nowrap text-[#fbca27] font-bold m-1  pl-1">{movie.title}</p>
		    <p className="text-left text-gray-500 pl-1" >{movie.studio}</p>
		  </div>
		</div>	
	)
}

export default memo(MovieCard)