import OpenDialogReturn from Electron
export {};
declare global {
  interface Window {
    ffmpegAPI: {
		getThumbnail: (filepath :string) => Promise<string>;	
	};
	moviesAPI: {
		getMovies: (dirpath: string, number: number) => Movie[];
		selectMovieDirectory: () => Promise<OpenDialogReturn>;
	};

	state: {
		getFileSource: () => string;
	}

	driveAPI: {
		getDriveToken : () => {
			access_token: string,
			expires_in: number,
			refresh_token: string,
			scope: string,
			token_type: string,
		}
		getDriveAPIKey: 	() => Promise<string>;
	}
	
  }
}
