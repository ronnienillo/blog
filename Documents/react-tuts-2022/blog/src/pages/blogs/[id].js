export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10');
    const data = await res.json();

    const paths = data.map(blog => {
        return {
            params: { id: blog.id.toString() }   
        }
    })
    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    const data = await res.json();

    return {
        props: { blog: data}
    }
}


const singleBlog = ({ blog }) => {
    return ( 
        <>
            <h1>{ blog.title }</h1>
            <p>{ blog.body }</p>
        </>
    );
}
 
export default singleBlog;