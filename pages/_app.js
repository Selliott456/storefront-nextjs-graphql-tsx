import React from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import "../styles/hero.scss";
import "../styles/products.scss";
import "../styles/product-page.scss";

export default function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}
