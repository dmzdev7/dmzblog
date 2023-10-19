// Css
import './globals.css';

// Fonts
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
	subsets: ['latin'],
});

// Metadata
export const metadata = {
	title: 'DmzBlog',
	description: 'The best blog app!',
};

// Components
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<div className="container">
					<div className="wrapper">
						<Navbar />
						{children}
						<Footer />
					</div>
				</div>
			</body>
		</html>
	);
}
