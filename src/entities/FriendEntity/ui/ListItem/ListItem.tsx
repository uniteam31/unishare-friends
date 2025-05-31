import classNames from 'classnames';
import React, { memo } from 'react';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
// import { useUserStore } from 'entities/User';
import { Avatar, Text } from 'shared/ui';
import type {
	TActionComponent,
	TExtendedUserWithFriendStatus,
} from '../../model/types/friendEntity';
import s from './ListItem.module.scss';

interface IListItemProps extends TExtendedUserWithFriendStatus {
	ActionComponent?: TActionComponent;
	//
	className?: string;
}

export const ListItem = memo((props: IListItemProps) => {
	const { id, username, firstName, avatar, friendStatus, ActionComponent, className } = props;

	// TODO не отрисовывать самого себя

	// const { authData } = useUserStore();
	//
	// /** Не отрисовываем в списке самого себя */
	// if (id === authData?.id) {
	// 	return;
	// }

	return (
		<div className={classNames(s.ListItem, className)}>
			{/* TODO расхардкодить */}
			<div>
				<Avatar
					src={
						avatar ||
						'https://avatars.mds.yandex.net/i?id=29f7366ac823f46165612d9480e60f0e_l-13215132-images-thumbs&n=13'
					}
					className={s.avatar}
				/>

				<Text title={username} text={firstName} className={s.personalInfo} />
			</div>

			{ActionComponent && <ActionComponent id={id} friendStatus={friendStatus} />}
		</div>
	);
});
