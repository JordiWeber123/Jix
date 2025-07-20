export default class Movie {
	id: string;
	title: string;
	path: string;
	studio: string;
	tags: string[];

	constructor(id: string, title: string, path: string, studio: string, tags: string[]) {
		this.id = id;
		this.title 	= title;
		this.path 	= path 
		this.studio = studio
		this.tags  	= tags;
	}
}