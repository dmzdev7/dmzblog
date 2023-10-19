// Icons
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';

export const navData = [
	{ name: 'Home', path: '/' },
	{ name: 'About', path: '/' },
	{ name: 'Contact', path: '/' },
];

export const socialData = [
	{
		name: 'Instagram',
		path: 'https://www.instagram.com/',
		icon: <FaInstagram />,
		style: 'instagram-link',
	},
	{
		name: 'LinkedIn',
		path: 'https://www.linkedin.com/in/',
		icon: <FaLinkedin />,
		style: 'linkedin-link',
	},
	{
		name: 'Github',
		path: 'https://github.com/',
		icon: <FaGithub />,
		style: 'github-link',
	},
	{
		name: 'Twitter',
		path: 'https://twitter.com/',
		icon: <RiTwitterXLine />,
		style: 'twitter-link',
	},
];
