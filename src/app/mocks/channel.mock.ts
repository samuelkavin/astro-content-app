export const channelResponseMock = {
	status: 200,
	statusText: '',
	data: {
		responseCode: 200,
		responseMessage: 'Channel Listing',
		response: [
			{
				id: 471,
				title: 'Oppa Mania',
				description:
					'Indulge ‘Oppa Fever’ with the hottest Korean and Thai dramas, Korean variety shows, exciting K-concerts as well as blockbuster Korean and Thai movies. Oppa Mania (Ch 100) is available to all customers from 1 till 31 July via TV (Ch 100), On Demand and Astro GO.',
				isHd: true,
				stbNumber: '100',
				language: 'International',
				category: 'Variety Entertainment',
				originalImage: 'http://linear-poster.astro.com.my/prod/logo/OppaMania_V1.png',
				backupImage:
					'http://linear-poster.astro.com.my/prod/poster/OppaMania_IVP_LAND_448x252.jpg',
				imageUrl:
					'https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/471_144.png',
				isAstroGoExclusive: false,
				filters: ['Set Top Box', 'NJOI', 'Astro On The Go', 'Variety Entertainment'],
				detailUrl: '/channels/Oppa-Mania-471',
				currentSchedule: [],
			},
			{
				id: 395,
				title: 'TV1 HD',
				description:
					'TV1 is a Malaysian free-to-air television channel airing various types of programmes, drama and news. Find out more on CH101 now!',
				isHd: true,
				stbNumber: '101',
				language: 'Malay',
				category: 'Variety Entertainment',
				originalImage: 'http://linear-poster.astro.com.my/prod/logo/TV1_v1.png',
				backupImage:
					'http://linear-poster.astro.com.my/prod/poster/ivp_default_1028_IVP_LAND_448x252.jpg',
				imageUrl:
					'https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/395_144.png',
				isAstroGoExclusive: false,
				filters: ['Set Top Box', 'NJOI', 'Variety Entertainment'],
				detailUrl: '/channels/TV1-HD-395',
				currentSchedule: [
					{
						eventId: '40000928',
						title: 'Langsung Dari Parlimen',
						programmeId: null,
						episodeId: null,
						datetime: '2022-08-01 10:00:00.0',
						datetimeInUtc: '2022-08-01 02:00:00.0',
						duration: '02:00:00',
						siTrafficKey: '1:10000501:47233988',
						detailUrl: '/details/Langsung-Dari-Parlimen-1:10000501:47233988',
					},
					{
						eventId: '40000929',
						title: 'Semasa 12',
						programmeId: null,
						episodeId: null,
						datetime: '2022-08-01 12:00:00.0',
						datetimeInUtc: '2022-08-01 04:00:00.0',
						duration: '00:05:00',
						siTrafficKey: '1:10000501:47233989',
						detailUrl: '/details/Semasa-12-1:10000501:47233989',
					},
					{
						eventId: '40000930',
						title: 'Secret of the Superfactories',
						programmeId: null,
						episodeId: null,
						datetime: '2022-08-01 12:05:00.0',
						datetimeInUtc: '2022-08-01 04:05:00.0',
						duration: '00:55:00',
						siTrafficKey: '1:10000501:47233990',
						detailUrl: '/details/Secret-of-the-Superfactories-1:10000501:47233990',
					},
					{
						eventId: '40000931',
						title: 'Berita Tengah Hari',
						programmeId: null,
						episodeId: null,
						datetime: '2022-08-01 13:00:00.0',
						datetimeInUtc: '2022-08-01 05:00:00.0',
						duration: '00:30:00',
						siTrafficKey: '1:10000501:47233991',
						detailUrl: '/details/Berita-Tengah-Hari-1:10000501:47233991',
					},
					{
						eventId: '40000932',
						title: 'Promo / PSA / Kapsul',
						programmeId: null,
						episodeId: null,
						datetime: '2022-08-01 13:30:00.0',
						datetimeInUtc: '2022-08-01 05:30:00.0',
						duration: '00:30:00',
						siTrafficKey: '1:10000501:47233992',
						detailUrl: '/details/Promo-PSA-Kapsul-1:10000501:47233992',
					},
				],
			},
		],
	},
};

export const channelByIdResponseMock = {
	responseCode: 200,
	responseMessage: 'Channel Detail',
	response: {
		id: 395,
		title: 'TV1 HD',
		description:
			'TV1 is a Malaysian free-to-air television channel airing various types of programmes, drama and news. Find out more on CH101 now!',
		isHd: true,
		stbNumber: '101',
		language: 'Malay',
		category: 'Variety Entertainment',
		originalImage: 'http://linear-poster.astro.com.my/prod/logo/TV1_v1.png',
		backupImage:
			'http://linear-poster.astro.com.my/prod/poster/ivp_default_1028_IVP_LAND_448x252.jpg',
		imageUrl: 'https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/395_144.png',
		isAstroGoExclusive: false,
		filters: ['Set Top Box', 'NJOI', 'Variety Entertainment'],
		schedule: {
			'2022-08-02': [
				{
					eventId: '40000950',
					title: 'Berita Tengah Malam',
					programmeId: null,
					episodeId: null,
					datetime: '2022-08-02 00:00:00.0',
					datetimeInUtc: '2022-08-01 16:00:00.0',
					duration: '00:30:00',
					siTrafficKey: '1:10000501:47235461',
					detailUrl: '/details/Berita-Tengah-Malam-1:10000501:47235461',
				},
				{
					eventId: '40000951',
					title: 'Seharum Rindu',
					programmeId: null,
					episodeId: null,
					datetime: '2022-08-02 00:30:00.0',
					datetimeInUtc: '2022-08-01 16:30:00.0',
					duration: '01:00:00',
					siTrafficKey: '1:10000501:47235462',
					detailUrl: '/details/Seharum-Rindu-1:10000501:47235462',
				},
			],
			'2022-08-03': [
				{
					eventId: '40009431',
					title: 'Berita Tengah Malam',
					programmeId: null,
					episodeId: null,
					datetime: '2022-08-03 00:00:00.0',
					datetimeInUtc: '2022-08-02 16:00:00.0',
					duration: '00:30:00',
					siTrafficKey: '1:10000501:47235497',
					detailUrl: '/details/Berita-Tengah-Malam-1:10000501:47235497',
				},
			],
			'2022-08-04': [
				{
					eventId: '40017293',
					title: 'Berita Tengah Malam',
					programmeId: null,
					episodeId: null,
					datetime: '2022-08-04 00:00:00.0',
					datetimeInUtc: '2022-08-03 16:00:00.0',
					duration: '00:30:00',
					siTrafficKey: '1:10000501:47235537',
					detailUrl: '/details/Berita-Tengah-Malam-1:10000501:47235537',
				},
				{
					eventId: '40017294',
					title: 'Nota Buat Cempaka',
					programmeId: null,
					episodeId: null,
					datetime: '2022-08-04 00:30:00.0',
					datetimeInUtc: '2022-08-03 16:30:00.0',
					duration: '01:00:00',
					siTrafficKey: '1:10000501:47235538',
					detailUrl: '/details/Nota-Buat-Cempaka-1:10000501:47235538',
				},
			],
			'2022-08-05': [
				{
					eventId: '40026679',
					title: 'Berita Tengah Malam',
					programmeId: null,
					episodeId: null,
					datetime: '2022-08-05 00:00:00.0',
					datetimeInUtc: '2022-08-04 16:00:00.0',
					duration: '00:30:00',
					siTrafficKey: '1:10000501:47235579',
					detailUrl: '/details/Berita-Tengah-Malam-1:10000501:47235579',
				},
				{
					eventId: '40026680',
					title: 'Nota Buat Cempaka',
					programmeId: null,
					episodeId: null,
					datetime: '2022-08-05 00:30:00.0',
					datetimeInUtc: '2022-08-04 16:30:00.0',
					duration: '01:00:00',
					siTrafficKey: '1:10000501:47235580',
					detailUrl: '/details/Nota-Buat-Cempaka-1:10000501:47235580',
				},
			],
			'2022-08-06': [
				{
					eventId: '40034721',
					title: 'Berita Tengah Malam',
					programmeId: null,
					episodeId: null,
					datetime: '2022-08-06 00:00:00.0',
					datetimeInUtc: '2022-08-05 16:00:00.0',
					duration: '00:30:00',
					siTrafficKey: '1:10000501:47235622',
					detailUrl: '/details/Berita-Tengah-Malam-1:10000501:47235622',
				},
			],
		},
	},
};
