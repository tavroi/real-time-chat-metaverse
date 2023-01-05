import '../styles/globals.css';

// https://docs.moralis.io/moralis-server/tools/react-moralis
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {

  return (
    <MoralisProvider appId={process.env.NEXT_PUBLIC_APP_ID} serverUrl={process.env.NEXT_PUBLIC_SERVER_URL} >
        <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp
