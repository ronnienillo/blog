import Link from 'next/link'
import navStyle from '@/styles/nav.module.css'
import layoutStyle from '@/styles/layout.module.css'

const Navbar = () => {
    return ( 
        <>
            <nav className={navStyle.nav}>
                <div className={layoutStyle.container + ' ' + navStyle.nav__container}>
                    <Link href="/">Logo</Link>
                    <ul className={navStyle.nav__menu}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about/">About</Link></li>
                        <li><Link href="/blogs/">Blogs</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
 
export default Navbar;