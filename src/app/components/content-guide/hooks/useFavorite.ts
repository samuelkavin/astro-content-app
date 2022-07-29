import { useCallback, useEffect, useState } from 'react';

function useFavorite() {
	const [favourites, setFavourites] = useState([]);

	useEffect(() => {
		// @ts-ignore
		const channelFavorites = JSON.parse(localStorage.getItem('favorite-channels'));

		if (channelFavorites) {
			setFavourites(channelFavorites);
		}
	}, []);

	const saveToLocalStorage = (items: any) => {
		localStorage.setItem('favorite-channels', JSON.stringify(items));
	};

	const handleAddFavourite = useCallback(
		(channelId: any) => {
			const newFavouriteList: any = [...favourites, channelId];
			setFavourites(newFavouriteList);
			saveToLocalStorage(newFavouriteList);
		},
		[favourites],
	);

	const handleRemoveFavourite = useCallback(
		(channelId: number) => {
			const newFavouriteList = favourites.filter(id => id !== channelId);

			setFavourites(newFavouriteList);
			saveToLocalStorage(newFavouriteList);
		},
		[favourites],
	);

	return { handleAddFavourite, handleRemoveFavourite, favourites };
}

export default useFavorite;
