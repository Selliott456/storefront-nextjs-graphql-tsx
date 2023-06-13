import React from "react";
import { dehydrate, useQuery } from "react-query";
import { queryClient, productByKeyword } from "../../src/api";

export async function getServerSideProps({ params }) {
  await queryClient.prefetchQuery("product", () =>
    productByKeyword({ name: params.title })
  );
console.log(params)
  return {
    props: {
      name: params.title,
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Home: React.FunctionComponent<{
  name: string;
}> = ({ name }) => {
  const { data } = useQuery("product", () => productByKeyword({ name }), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  if (!data.product) {
    return <div>No product found</div>;
  }
const product = data.product
  return (
    <div className="product-page">
      <div className="product-page__info" >
        <h1 className="product-page__title"  >{product.title}</h1>
        <h2 className="product-page__price">£{product.price}</h2>
      </div>
      <div className="product-page__desktop-info">
        <img
        className="product-page__img"
        src={product.image}
        alt={product.keyword}
        />
        <div className="product-page__info">
          <h3>Product Details</h3>
          <p className="product-page__description product-page__further-info">{product.description}</p>
          <i>category: {product.category}</i>
        </div>
        </div>
    </div>
  );
};

export default Home;
