import '@/styles/globals.css';

export default function RootLayout({children}) {

    return (
        <html lang="en">
            <head>
                <title>Next.js</title>
            </head>
            <body>
                <h1>HEJ</h1>{children}</body>
        </html>
    );
}