import { TemplateRef, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { ItemTemplateContext } from './IAccordion';

export const pngBase64ToBlob = (Base64Image: any, imageType = 'image/png') => {
	const parts = Base64Image.split(';base64,');
	const decodedData = window.atob(parts[1]);
	const uInt8Array = new Uint8Array(decodedData.length);
	for (let i = 0; i < decodedData.length; ++i) {
		uInt8Array[i] = decodedData.charCodeAt(i);
	}
	return new Blob([uInt8Array], { type: imageType });
};

export const sanitizeRes = (item: string, sanitaizer: DomSanitizer) => sanitaizer.bypassSecurityTrustResourceUrl(item);
export const sanitizeHTML = (item: string | object, sanitaizer: DomSanitizer) => sanitaizer.sanitize(SecurityContext.HTML, item);
export const getSvg = (file: string, sanitaizer: any) => sanitizeRes('data:image/svg+xml;base64,' + btoa(file), sanitaizer);
export const getPng = (file: string, sanitaizer: any) => sanitizeRes(URL.createObjectURL(pngBase64ToBlob(file)), sanitaizer);

export const bodyWithTmpl = (item: string | ItemTemplateContext): item is ItemTemplateContext => (item && !!item['itemTemplate']);
export const getItemTemplate = (item: string | ItemTemplateContext, defaultTmpl: TemplateRef<Element>) => bodyWithTmpl(item) ? item.itemTemplate : defaultTmpl;
export const getItemCtx = (item: string | ItemTemplateContext) => (bodyWithTmpl(item) && typeof item.itemBody === 'string') ? item.itemBody : item;
