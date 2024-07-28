import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Input } from "@/components/ui/input"
import Footer from '@/components/Footer';
import { Navbar } from '@/components/Navbar'; 

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mini Poject',
  description: 'By Us',
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
          <Navbar />             
          <Footer />
          {children}      
        </ChakraProvider>
      </body>
    </html>

  );
}
