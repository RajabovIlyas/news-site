import type {Metadata} from 'next'
import './globals.css'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";


export const metadata: Metadata = {
    title: '',
    description: '',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <div className="min-h-screen">
            <Header/>
            {children}
            <Footer/>
        </div>
        </body>
        </html>
    )
}
