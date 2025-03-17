import '@/assets/styles/globals.css';
import AuthProvider from '@/components/AuthProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Lokalads',
    keywords: 'property, rental, real estate',
    description: 'Find the perfect property',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthProvider>
        <html lang="en">
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
        </AuthProvider>
    );
};

export default RootLayout;
