import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const fontHeading = Playfair_Display({
  weight: ['500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = Inter({
  weight: ['300', '500'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});


export const metadata = {
  title: 'Rahul Saini',
  description:
    "Data isn't just numbers; it's the story behind the numbers. I bring that story to life through analytics, visualization, and optimization strategies. From my work in TCS to my academic pursuits at UAB, my focus has always been on blending technical skill with strategic insights to maximize impact.",
};

export default  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='hide-scrollbar min-h-screen'>
      <body
        className={`${fontHeading.variable} ${fontBody.variable} antialiased`}
      >
        {/* <body*
        className={`${fontHeading.variable} ${fontBody.variable} antialiased`}
      >*/}
        {children}
      </body>
    </html>
  );
}
