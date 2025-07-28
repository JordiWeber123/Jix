import DriveIcon from "../assets/driveIcon.png"
import { useState, useEffect } from "react";

interface CallbackProps {
	callback: (data: any) => void;
}
function DriveFolderButton({callback} : CallbackProps) {
	//Build Picker here as well

	const [pickerApiLoaded, setPickerApiLoaded] = useState<boolean>(false);
	useEffect(() => {
		loadPicker(() => {setPickerApiLoaded(true);});
	}, [])
	//Load the picker when clicked
	async function buttonHandler() {
		if(!pickerApiLoaded) loadPicker(() => {setPickerApiLoaded(true);});
		const APIKey: string = await window.driveAPI.getDriveAPIKey();
		//Change flow, must oauth
		const authToken:string = (await window.driveAPI.getDriveToken()).access_token;
		console.log("authToken: ", authToken)
		var view = new google.picker.DocsView(google.picker.ViewId.FOLDERS)
		view.setMimeTypes('application/vnd.google-apps.folder')
			.setSelectFolderEnabled(true);
		const picker = new google.picker.PickerBuilder()
			.setDeveloperKey(APIKey)
			.setOAuthToken(authToken)
			.addView(view)
			.setCallback((data) => {
				if (data.action === google.picker.Action.PICKED) {
					if(data.docs != undefined){
						console.log("Selected folder: ", data.docs[0]);
						callback(data.docs[0]);
					}
				}
			})
			.build();
		picker.setVisible(true);
	}
	
	return (
			<button 
			  onClick={buttonHandler} 
			  className='inline-flex items-center gap-2 h-10 bg-white cursor-pointer rounded-4xl p-2 m-2'>
			  <img 
			    className='h-full object-contain' 
			    src={DriveIcon}/>
			  <p className='text-black text-xl'>
			    Open with drive
			  </p>
			</button>			
			)
}

async function loadPicker(callback: gapi.LoadCallback) {
	const script = document.createElement("script");
	script.src = "https://apis.google.com/js/api.js"; 
	script.onload = () => gapi.load("picker", {"callback" : callback});
	document.head.appendChild(script);
}



 

export default DriveFolderButton;