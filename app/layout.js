import './globals.css'
import {Inter} from 'next/font/google'
import Image from "next/image";
import {footerLinks, navLinks, footerSocialMedia} from "@/app/data";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import {francoisOne, quicksand, gildaDisplay} from "@/app/fonts";

export const metadata = {
    title: "KIDS'R'US",
    description: 'A clothes shop dedicated to kids',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <header>
            <Image className="header-logo"
                   src="/logo.png"
                   width={293}
                   height={98}
                   alt="Nav Logo"/>

            <Navbar urls={navLinks}/>

        </header>
        <main className={quicksand.className}>{children}</main>

        <Footer urls={footerLinks} media={footerSocialMedia}/>

        </body>
        </html>
    )
}

