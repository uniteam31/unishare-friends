import useSWR from 'swr';
import { axiosInstance } from 'shared/api';
import { getApiResponseErrorMessage } from 'shared/lib';
import type { ApiResponse } from 'shared/types';
import type { IFriendEntity } from '../model/types/friendEntity';

type TIncomingFriendRequestsResponse = ApiResponse<IFriendEntity['friends']>;

export const useGetIncomingFriendRequests = () => {
	const fetcher = () =>
		axiosInstance
			.get<TIncomingFriendRequestsResponse>('/friends/incoming')
			.then((response) => response.data.data);

	const { isValidating, error, data } = useSWR('/api/friends/incoming', fetcher);

	const incomingFriendRequests = data || [];

	return {
		isLoading: isValidating,
		error: getApiResponseErrorMessage(error),
		incomingFriendRequests,
	};
};
