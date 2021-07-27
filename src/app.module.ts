import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import TestResolver from './test.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
  ],
  providers: [TestResolver],
})
export class AppModule {}
