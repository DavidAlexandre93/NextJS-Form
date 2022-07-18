import Head from 'next/head';

import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';

//import Form from './components/Form/Form'

export default App;

function App({ Component, pageProps }) {
    return (
        <Router>
            <Head>
                <title>Next.js - Form Validation Example</title>

                {/* eslint-disable-next-line @next/next/no-css-tags */}
                <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
            </Head>

            <Component {...pageProps} />

            

            <div className="text-center mt-4">
            <Switch>
            <Route path="/NextJSAPP" exact>
                <p>
                    <a href="" target="_top">Nextjs - Form test application</a>
                </p>
            </Route>

            <Route path="/NextJSForm" exact>
                <p>
                    <a href="" target="_top">NextJS Form</a>
                </p>
            </Route>
            </Switch>
            </div>

            
        </Router>
    );
}
