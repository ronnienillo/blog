
import Link from "next/link";

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10');
    const data = await res.json();

    return {
        props: {blogs: data}
    }
}
const Blogs = ({ blogs }) => {

    return ( 
        <>
            <h1>All Blog</h1>
            <ul className="blog-list">
                {blogs.map(blog => (
                    <li key={blog.id}><Link href={'/blogs/' + blog.id}>{blog.title}</Link></li>
                ))}

            </ul>
        </>
    );
}
 
export default Blogs;