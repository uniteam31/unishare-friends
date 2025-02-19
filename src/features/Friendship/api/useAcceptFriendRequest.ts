import { useCallback, useState } from 'react';
import type { IUser } from 'entities/User';
import { axiosInstance } from 'shared/api';
import { getApiResponseErrorMessage } from 'shared/lib';

interface IAcceptFriendRequestProps {
	userID: IUser['_id'];
}

export const useAcceptFriendRequest = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const acceptFriendRequest = useCallback(async (props: IAcceptFriendRequestProps) => {
		const { userID } = props;

		setIsLoading(true);
		setError(null);

		try {
			await axiosInstance.post(`/friends/accept/${userID}`);
		} catch (error) {
			const errorMessage =
				getApiResponseErrorMessage(error) ||
				'Произошла неизвестная ошибка при принятии запроса в друзья';

			setError(errorMessage);
		} finally {
			setIsLoading(false);
		}
	}, []);

	return {
		isLoading,
		error,
		acceptFriendRequest,
	};
};
