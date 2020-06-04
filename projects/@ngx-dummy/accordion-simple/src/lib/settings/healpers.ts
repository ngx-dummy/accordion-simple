import { DomSanitizer } from "@angular/platform-browser";

export const pngBase64ToBlob = (Base64Image: any) => {
	const parts = Base64Image.split(';base64,');
	const imageType = 'image/png';
	const decodedData = window.atob(parts[1]);
	const uInt8Array = new Uint8Array(decodedData.length);
	for (let i = 0; i < decodedData.length; ++i) {
		uInt8Array[i] = decodedData.charCodeAt(i);
	}
	return new Blob([uInt8Array], { type: imageType });
};


export const sanitazeRes = (item: string, sanitaizer: DomSanitizer) => (sanitaizer.bypassSecurityTrustResourceUrl(item));
export const getSvg = (file: string, sanitaizer: DomSanitizer) => (sanitazeRes('data:image/svg+xml;base64,' + btoa(file), sanitaizer));
export const getPng = (file: string, sanitaizer: DomSanitizer) => (sanitazeRes(URL.createObjectURL(pngBase64ToBlob(file)), sanitaizer));
