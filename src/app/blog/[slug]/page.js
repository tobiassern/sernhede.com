import { notFound } from 'next/navigation';

async function getPost(params) {
    const res = await fetch(`https://dummyjson.com/posts/${params.slug}`, { next: { revalidate: 60 } });
    const data = await res.json();
    return res.ok ? data : false;
}

// export async function generateStaticParams() {
//     const posts = await getPosts();

//     return posts.map((post) => ({
//         slug: post.slug,
//     }));
// }

export default async function BlogPostPage({params}) {
    const data = await getPost(params);
    console.log(data);
    if(!data) {
        notFound();
        return null;
    }

    return (<div>Blog post: {data.title}</div>);
};
