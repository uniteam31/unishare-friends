import { useCallback } from 'react';
import { mutate } from 'swr';
import type { IUser } from 'entities/User';
import { Button } from 'shared/ui';
import { useDeleteFriend } from '../../api/useDeleteFriend';
import s from './DeleteFriend.module.scss';

interface IDeleteFriendProps {
	id: IUser['id'];
}

export const DeleteFriend = (props: IDeleteFriendProps) => {
	const { id } = props;

	// TODO добавить уведомление на error
	const { isLoading, deleteFriend, error } = useDeleteFriend();

	const handleDeleteFriendClick = useCallback(() => {
		deleteFriend({ userID: id }).then(() => {
			// TODO разобраться с мутациями
			mutate((key) => true);
		});
	}, [id, deleteFriend]);

	return (
		<Button onClick={handleDeleteFriendClick} className={s.DeleteFriend} disabled={isLoading}>
			Удалить
		</Button>
	);
};
