import Movie from "../Movie"


//Warpper type I have to do because of how React interprets types in components
type MovieProps = {
	movie: Movie;
}

export default function MovieCard({movie}: MovieProps) {
	return (
		<div className="w-80 flex flex-col justify-evenly m-1">
		  <div className="bg-[#272822] w-full h-45 rounded-lg"></div>
		  <div className="w-full">
		    <p className="w-full text-left truncate overflow-hidden whitespace-nowrap text-[#fbca27] font-bold m-1  pl-1">{movie.title}</p>
		    <p className="text-left text-gray-500 pl-1" >{movie.studio}</p>
		  </div>
		</div>	
	)
}