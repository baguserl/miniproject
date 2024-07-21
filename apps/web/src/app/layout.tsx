import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../app/styles/global.css';
import { ChakraProvider, useDisclosure } from '@chakra-ui/react'

import Navbar from '../components/Header';
import Footer  from '../components/Footer';
import { cn } from '@/lib/utils'
import './globals.css'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ChakraProvider>

        <Navbar page3ImageSrc={''} page2ImageSrc={''} page1ImageSrc={''} page4ImageSrc={''} />
        {children}
        <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
