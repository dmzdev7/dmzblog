'use client';

import Link from 'next/link';
import React from 'react';

// Styled Components
import styled from 'styled-components';

// Utils
import { socialData } from '@/utils/dataInfo';

// Components
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';

const Navbar = () => {
	return (
		<Container>
			<Social>
				{socialData.map((link, index) => (
					<Link
						key={index}
						href={link.path}
						className={link.style}
						target="_blank"
						rel="noopener noreferrer"
					>
						{link.icon}
					</Link>
				))}
			</Social>

			<Logo>
				<Link href={'/'}>DmzBlog</Link>
			</Logo>

			<Links>
				<ThemeToggle />
				<Link href={'/'} className="link">
					Home
				</Link>
				<Link href={'/'} className="link">
					About
				</Link>
				<Link href={'/'} className="link">
					Contact
				</Link>
				<AuthLinks />
			</Links>
		</Container>
	);
};

export default Navbar;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 10rem;
`;
const Social = styled.div`
	display: flex;
	gap: 1rem;
	flex: 1;
	a {
		svg {
			width: 2.2rem;
			height: 2.2rem;
		}
	}

	.instagram-link {
		color: purple;
	}
	.linkedin-link {
		color: blue;
	}
	.github-link,
	.twitter-link {
		color: var(--textColor);
	}
    .mail-link {
        color: green;
    }

	@media screen and (max-width: 1024px) {
		display: none;
	}
`;
const Logo = styled.div`
	flex: 1;
	text-align: center;
	font-size: 3.6rem;
	font-weight: bold;
	@media screen and (max-width: 1280px) {
		font-size: 3.2rem;
	}
	@media screen and (max-width: 1024px) {
		text-align: left;
	}
	@media screen and (max-width: 768px) {
		font-size: 2.4rem;
	}
`;
const Links = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	flex: 1;
	font-size: 2rem;
	@media screen and (max-width: 1280px) {
		gap: 1.5rem;
		font-size: 1.8rem;
	}
	@media screen and (max-width: 640px) {
		justify-content: flex-end;
		.link {
			display: none;
		}
	}
`;
