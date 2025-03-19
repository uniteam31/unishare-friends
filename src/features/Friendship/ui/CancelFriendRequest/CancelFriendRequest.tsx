import { useCallback } from 'react';
import { mutate } from 'swr';
import type { IUser } from 'entities/User';
import { Button } from 'shared/ui';
import { useCancelFriendRequest } from '../../api/useCancelFriendRequest';

interface ICancelFriendRequestProps {
	id: IUser['id'];
}

export const CancelFriendRequest = (props: ICancelFriendRequestProps) => {
	const { id } = props;

	// TODO добавить уведомление на error
	const { isLoading, canselFriendRequest, error } = useCancelFriendRequest();

	const handleCancelFriendRequest = useCallback(() => {
		canselFriendRequest({ userID: id }).then(() => {
			// TODO разобраться с мутациями
			mutate((key) => true);
		});
	}, [id, canselFriendRequest]);

	return (
		<Button onClick={handleCancelFriendRequest} disabled={isLoading}>
			Отменить
		</Button>
	);
};
