import { InputType, Field, Int } from "@nestjs/graphql";

@InputType()
export class ItemInput {
  @Field()
  readonly title: string;
  @Field()
  readonly description: string;
  @Field()
  readonly deadline: string;
}
