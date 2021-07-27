import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class TestModel {
  @Field(() => Int)
  count!: number;
}
