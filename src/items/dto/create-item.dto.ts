import { ObjectType, Field, Int, ID } from "@nestjs/graphql";
import { IsString, IsNotEmpty } from "class-validator";

@ObjectType()
export class ItemType {
  @Field(() => ID)
  @IsString()
  readonly id?: string;
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly title: string;
  @Field()
  readonly description: string;
  @Field()
  @IsString()
  readonly deadline: string;
}
