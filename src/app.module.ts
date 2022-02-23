import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { GraphQLModule } from "@nestjs/graphql";
import { ItemsModule } from './items/items.module';
import { MongooseModule } from "@nestjs/mongoose";
import { databaseUrl } from "./config";
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          autoSchemaFile: "schema.gql",
    }),
    ItemsModule,
    MongooseModule.forRoot(databaseUrl),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
