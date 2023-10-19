'use client';
// Styled Components
import styled from 'styled-components';

// Components
import Featured from '@/components/featured/Featured';
import CategoryList from '@/components/categoryList/CategoryList';
import CardList from '@/components/cardList/CardList';
import Menu from '@/components/menu/Menu';

export default function Home() {
	return (
		<Content>
			<Featured />
			<CategoryList />
			<Content>
				<CardList />
				<Menu />
			</Content>
		</Content>
	);
}

const Content = styled.div`
	display: flex;
	gap: 50px;
`;
