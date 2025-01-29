import "./globals.css";
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] }); // Customize subsets and weights

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
