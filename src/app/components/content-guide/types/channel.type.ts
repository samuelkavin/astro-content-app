export interface ChannelResponse {
	responseCode: number;
	responseMessage: string;
	response: Channels[];
}

export interface Channels {
	id?: number;
	title?: string;
	description?: string;
	isHd?: boolean;
	stbNumber?: number;
	language?: string;
	category?: string;
	originalImage?: string;
	backupImage?: string;
	imageUrl?: string;
	detailUrl?: string;
	isAstroGoExclusive?: boolean;
	filters?: string[];
	currentSchedule?: any[];
	schedule?: any[];
}
