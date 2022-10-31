import { notFound } from 'next/navigation';

export const dynamicParams = true;

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }]
}

async function fetchPost(params) {

  const res = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const data = await res.json();


  return data;
}


export default async function Post({ params }) {
  const data = await fetchPost(params);

  if (!data) {
    notFound();
  }

  return (
    <div>Blog page
      <h1>Title: {data.title}</h1>
      <h2>ID: {data.id}</h2>
    </div>
  )
}