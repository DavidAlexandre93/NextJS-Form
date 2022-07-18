import Head from 'next/head';

export default App;

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Next.js - Form Validation Example</title>

                {/* eslint-disable-next-line @next/next/no-css-tags */}
                <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
            </Head>

            <Component {...pageProps} />

            {/* credits */}
            <div className="text-center mt-4">
                <p>
                    <a href="" target="_top">Next.js - Form Validation Example with React Hook Form</a>
                </p>
                <p>
                    <a href="" target="_top">React Form</a>
                </p>
            </div>
        </>
    );
}
