import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import type { PropsWithChildren } from 'react';

import Header from '../components/common/Header';
import QueryProvider from '../contexts/QueryProvider';
import '../styles/global.scss';
import { container } from './layout.css';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'nextjs boiler plate',
	description: 'nextjs boiler plate repository',
	icons: [
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			url: '/favicon/favicon.ico'
		}
	]
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="ko" data-theme="light">
			<body className={openSans.className}>
				<Header />
				<main className={container}>
					<QueryProvider>{children}</QueryProvider>
				</main>
			</body>
		</html>
	);
}
