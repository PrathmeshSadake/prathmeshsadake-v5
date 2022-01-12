import SSRProvider from "react-bootstrap/SSRProvider";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/globals.css";
import Loader from "../components/Loader";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <SSRProvider>
      {!loading ? (
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
      ) : (
        <Loader />
      )}
    </SSRProvider>
  );
}

export default MyApp;
