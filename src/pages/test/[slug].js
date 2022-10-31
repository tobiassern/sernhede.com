import Link from 'next/link';

export default function TestPage({data}) {

    return (
        <div>
            <h1>Single Blog Page Test: {data.title}</h1>
            <h2>ID: {data.id}</h2>
        </div>
    );
}

export async function getStaticProps(context) {

    console.log(context)

    const res = await fetch(`https://dummyjson.com/posts/${context.params.slug}`);
    const data = await res.json();
    return {
        props: {
            data: data
        },
        revalidate: 60
    }
}

export async function getStaticPaths() {
    const res = await fetch('https://dummyjson.com/posts')
    const data = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = data.posts.map((post) => ({
      params: { slug: `${post.id}` },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' }
  }
  