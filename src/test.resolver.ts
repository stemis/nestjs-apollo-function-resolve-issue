import { Query, Resolver } from '@nestjs/graphql';
import TestModel from './test.model';

@Resolver()
export default class TestResolver {
  @Query(() => TestModel)
  test() {
    return {
      count: () => 3,
    };
  }
}
