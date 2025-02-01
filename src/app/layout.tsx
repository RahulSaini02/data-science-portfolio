import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <body*
        className={`${fontHeading.variable} ${fontBody.variable} antialiased`}
      >*/}
        {children}
      </body>
    </html>
  );
}
