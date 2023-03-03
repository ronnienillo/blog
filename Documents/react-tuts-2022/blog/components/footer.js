import footerStyle from 'styles/footer.module.css'
import layoutStyle from 'styles/layout.module.css'
const Footer = () => {
    return ( 
        <>
            <footer>
                <div className={footerStyle.footer + ' ' + layoutStyle.container}><p>Copyright 2023</p></div>
            </footer>
        </>
    );
}
 
export default Footer;