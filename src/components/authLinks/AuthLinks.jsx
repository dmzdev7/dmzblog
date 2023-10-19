'use client';

import Link from 'next/link';
import React from 'react';

// Styled Components
import styled from 'styled-components';

// Components

const AuthLinks = () => {
	const status = 'no-autenticated';

	return (
		<>
			{status === 'no-autenticated' ? (
				<Link href={'/login'}>Login</Link>
			) : (
				<>
					<Link href={'/write'}>Write</Link>
					<Logout>Logout</Logout>
				</>
			)}
		</>
	);
};

export default AuthLinks;

const Container = styled.div``;
const Logout = styled.span`
	cursor: pointer;
`;
