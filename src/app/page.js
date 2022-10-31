import Link from 'next/link';

async function fetchData() {
    const res = await fetch(`https://dummyjson.com/posts`);
    const data = await res.json();

    return data;
}

export default async function HomePage() {
    const data = await fetchData();

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
