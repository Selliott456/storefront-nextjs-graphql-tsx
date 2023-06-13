import { title } from "process"
import { ObjectType, Field, ID } from "type-graphql"

@ObjectType()
export class ProductAttribute {
  @Field(() => ID)
  key: string

  @Field(() => String)
  value: string
}

@ObjectType()
export class Product {
  @Field(() => ID)
  id: number

  @Field(() => String)
  title: string

  @Field(() => String)
  keyword: string

  @Field(() => Number)
  price: number

  @Field(() => String)
  description: string

  @Field(() => String)
  category: string

  @Field(() => String)
  image: string

}
