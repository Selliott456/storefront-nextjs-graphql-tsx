import { GraphQLClient } from 'graphql-request';
// import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Product = {
  __typename?: 'Product';
  category: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  keyword: Scalars['String'];
  price: Scalars['Float'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  product?: Maybe<Product>;
  products: Array<Product>;
};


export type QueryProductArgs = {
  name: Scalars['String'];
};

export type ProductByKeywordQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type ProductByKeywordQuery = { __typename?: 'Query', product?: { __typename?: 'Product', title: string, keyword: string, price: number, description: string, category: string, image: string } | null };

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', title: string, keyword: string, price: number, description: string, category: string, image: string }> };


export const ProductByKeywordDocument = gql`
    query productByKeyword($name: String!) {
  product(name: $name) {
    title
    keyword
    price
    description
    category
    image
  }
}
    `;
export const GetProductsDocument = gql`
    query getProducts {
  products {
    title
    keyword
    price
    description
    category
    image
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    productByKeyword(variables: ProductByKeywordQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProductByKeywordQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProductByKeywordQuery>(ProductByKeywordDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'productByKeyword');
    },
    getProducts(variables?: GetProductsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProductsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProductsQuery>(GetProductsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProducts');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
