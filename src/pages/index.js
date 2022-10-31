import Link from 'next/link';

export async function getStaticProps(context) {
    const res = await fetch(`https://dummyjson.com/posts`);
    const data = await res.json();
    return {
        props: {
            data: data
        }, // will be passed to the page component as props
    }
}
export default function HomePage({data}) {


    return (
        <div>
            <h1>Blog Page Test</h1>
            {data.posts.map((item, index) => (
                <Link href={`/${item.id}`} key={item.id}>
                    <h2>{item.title}</h2>
                </Link>
            ))}
        </div>
    );
}
