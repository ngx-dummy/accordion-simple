export interface IToggleer {
	itemId: number;
	isOpen: boolean;
}

export const pluckIToggler = (obj: object) => {
	return <IToggleer>({ itemId: obj['itemId'], isOpen: obj['isOpen'] });
};