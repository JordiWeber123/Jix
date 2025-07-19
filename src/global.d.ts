export {};
declare global {
  interface Window {
    ffmpegAPI: {
		getThumbnail: (filepath :string) => Promise<string>;	
	};
  }
}
