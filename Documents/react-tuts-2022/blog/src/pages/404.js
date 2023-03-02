import notfoundStyle from '@/styles/layout.module.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router';


const notFound = () => {

    // const router = useRouter();

    // useEffect(() => {
    //     setTimeout(() =>{
    //         router.push('/');
    //     }, 3000)
    // }, [])
    return ( 

        <>
            <div className={notfoundStyle.notFoundPage}>
                <h1>404</h1>
                <p>Opps... This page is not Found</p>
            </div>
        </>
    );
}
 
export default notFound;