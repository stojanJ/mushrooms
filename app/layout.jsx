import '@styles/globals.css'

import Navbar from '@/components/Navbar'
import Footer from '@components/Footer'

export const metadata ={
    title: "Mushroom",
    desription: "Discover and Share Mushrooms",
}
const Layout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
                <main>
                    <Navbar/>
                    {children}
                    <div className="divider"></div> 
                </main>
                <Footer/>
        </body>
    </html>
  )
}

export default Layout