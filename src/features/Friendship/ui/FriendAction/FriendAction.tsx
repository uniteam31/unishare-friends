import React from 'react';
import type { TFriendStatus } from 'entities/FriendEntity';
import type { IUser } from 'entities/User';
import { AddFriend } from '../AddFriend/AddFriend';
import { CancelFriendRequest } from '../CancelFriendRequest/CancelFriendRequest';
import { DeleteFriend } from '../DeleteFriend/DeleteFriend';
import { ResolveFriendRequest } from '../ResolveFriendRequest/ResolveFriendRequest';

interface IFriendActionProps {
	id: IUser['id'];
	friendStatus?: TFriendStatus;
}

export const FriendAction = (props: IFriendActionProps) => {
	const { id, friendStatus } = props;

	// TODO поправить мутацию в каждой фиче!!!!
	switch (friendStatus) {
		case 'friend':
			return <DeleteFriend id={id} />;
		case 'pendingAcceptance':
			return <ResolveFriendRequest id={id} />;
		case 'sent':
			return <CancelFriendRequest id={id} />;
		default:
			return <AddFriend id={id} />;
	}
};
