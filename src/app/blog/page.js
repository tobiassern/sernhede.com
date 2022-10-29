import Link from 'next/link';

async function fetchData() {
    const res = await fetch(`https://dummyjson.com/posts`);
    const data = await res.json();

    return data;
}

export default async function BlogPage() {
    const data = await fetchData();

    console.log(data)
    return (
        <div>
            <h1>Blog Page Test</h1>
            {data.posts.map((item, index) => (
                <Link href={`/blog/${item.id}`} key={item.id}>
                    <h2>{item.title}</h2>
                </Link>
            ))}
        </div>
    );
}
