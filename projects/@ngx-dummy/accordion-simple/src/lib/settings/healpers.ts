import { ItemTemplateContext } from './IAccordion';
import { TemplateRef } from '@angular/core';

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


export const sanitazeRes = (item: string, sanitaizer: any) => (sanitaizer && sanitaizer.bypassSecurityTrustResourceUrl && sanitaizer.bypassSecurityTrustResourceUrl(item));
export const getSvg = (file: string, sanitaizer: any) => (sanitazeRes('data:image/svg+xml;base64,' + btoa(file), sanitaizer));
export const getPng = (file: string, sanitaizer: any) => (sanitazeRes(URL.createObjectURL(pngBase64ToBlob(file)), sanitaizer));

export const bodyWithTmpl = (item: string | ItemTemplateContext): item is ItemTemplateContext => (item && !!item['itemTemplate']);
export const getItemTemplate = (item: string | ItemTemplateContext, defaultTmpl: TemplateRef<Element>) => bodyWithTmpl(item) ? item.itemTemplate : defaultTmpl;
export const getItemCtx = (item: string | ItemTemplateContext) => (bodyWithTmpl(item) && typeof item.itemBody === 'string') ? item.itemBody : item;
