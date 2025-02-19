import React, { memo, useCallback, useState } from 'react';
import { Divider } from 'shared/ui';
import { friendsTabs } from '../../model/friendsTabs';
import type { TFriendsTabName } from '../../model/friendsTabs';
import { TabsSelector } from '../TabsSelector/TabsSelector';
import s from './FriendsPage.module.scss';

export const FriendsPage = memo(() => {
	const [currentTab, setCurrentTab] = useState<TFriendsTabName>('friendsList');

	const handleSelectTab = useCallback((tabName: TFriendsTabName) => {
		setCurrentTab(tabName);
	}, []);

	return (
		<div className={s.FriendsPage}>
			<Divider />

			<TabsSelector currentTab={currentTab} onClickTab={handleSelectTab} />

			<Divider />

			<div className={s.tabs}>{friendsTabs[currentTab].Component}</div>

			<Divider />
		</div>
	);
});
