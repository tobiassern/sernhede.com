import Head from "next/head";
export const config = {
    runtime: "experimental-edge",
};

export const getServerSideProps = async () => {
    return {
        props: {
            runtime: process.env.NEXT_RUNTIME,
            uuid: await fetch("https://uuid.rocks/plain").then((response) =>
                response.text()
            ),
        },
    };
};

const Home = ({
    runtime,
    uuid,
}) => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>
                    Welcome to{" "}
                    <a href="https://nextjs.org">Next.js, running at the {runtime}!</a>
                </h1>

                <p>
                    Get started by editing{" "}
                    <code>pages/index.tsx</code>
                </p>

                <p>
                    Here&apos;s a server-side UUID:
                    <code>{uuid}</code>
                </p>
            </main>
        </div>
    );
};

export default Home;