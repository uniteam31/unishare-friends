import { useCallback } from 'react';
import { mutate } from 'swr';
import type { IUser } from 'entities/User';
import { Button } from 'shared/ui';
import { useAddFriend } from '../../api/useAddFriend';

interface IAddFriendProps {
	id: IUser['id'];
}

export const AddFriend = (props: IAddFriendProps) => {
	const { id } = props;

	// TODO добавить уведомление на error
	const { isLoading, addFriend, error } = useAddFriend();

	const handleAddFriend = useCallback(() => {
		addFriend({ userID: id }).then(() => {
			// TODO разобраться с мутациями
			mutate((key) => true);
		});
	}, [id, addFriend]);

	return (
		<Button onClick={handleAddFriend} disabled={isLoading}>
			Добавить
		</Button>
	);
};
