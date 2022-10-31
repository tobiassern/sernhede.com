import Link from 'next/link';

export default function TestPage({ data }) {

    return (
        <div>
            <h1>Blog Page Test</h1>
            {data.posts.map((item, index) => (
                <Link href={`/test/${item.id}`} key={item.id}>
                    <h2>{item.title}</h2>
                </Link>
            ))}
        </div>
    );
}

export async function getStaticProps(context) {

    const res = await fetch(`https://dummyjson.com/posts`);
    const data = await res.json();
    return {
        props: {
            data: data
        },
        revalidate: 60
    }
}