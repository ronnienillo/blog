import Footer from "./footer";
import Navbar from "./navbar";
import layoutStyle from 'styles/layout.module.css'
const Layout = ({ children }) => {
    return (
        <>
        <Navbar />
        <main className={layoutStyle.container + ' ' + layoutStyle.main}>{ children }</main>
        <Footer />
        </>

    )
}
 
export default Layout;