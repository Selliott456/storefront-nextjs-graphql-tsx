import { useState } from "react";
import { dehydrate, useQuery } from "react-query";
import { queryClient, getProducts } from "../src/api";
import Link from "next/link";

export async function getServerSideProps() {
  await queryClient.prefetchQuery("products", () => getProducts());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home() {
  const { data } = useQuery(["products"], () => getProducts());
  return (
    <div>
      <section className="hero__hero-image">
        <div className="hero__hero-text">
          <h1>Lovely Shop</h1>
        </div>
      </section>
      <section className="products">
        {data &&
          data.products.map((product, key) => {
            return (
              <div key={key}>
                <Link href={`/product/${product.keyword}`} passHref>
                  <atricle className="card">
                    <img
                      className="card__img"
                      src={product.image}
                      alt={product.keyword}
                    />
                    <div className="card__body">
                      <p className="card__subtitle">£{product.price}</p>
                      <h3 className="card__title">{product.title}</h3>
                    </div>
                  </atricle>
                </Link>
              </div>
            );
          })}
      </section>
    </div>
  );
}
