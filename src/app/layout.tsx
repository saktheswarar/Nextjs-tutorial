import { ReactNode } from "react";
import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata ={
    title:'Lokalads',
    keywords:'property, rental, real estate', 
    description:'Find the perfect'
}

const MainLayout = ({ children }: { children: ReactNode }) => {
    return ( <html>
        <body>
            <Navbar/>
            <main>{ children }</main>
            <Footer/>
        </body>
    </html> );
}
 
export default MainLayout;
