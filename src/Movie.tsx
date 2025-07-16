export default class Movie {
	title: string;
	path: string;
	studio: string;
	tags: string[];

	constructor(title: string, path: string, studio: string, tags: string[]) {
		this.title 	= title;
		this.path 	= path 
		this.studio = studio
		this.tags  	= tags;
	}
}