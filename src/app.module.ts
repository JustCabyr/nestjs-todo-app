import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GraphQLModule } from "@nestjs/graphql";
// import { ItemsModule } from './items/items.module';
import { MongooseModule } from "@nestjs/mongoose";
import { databaseUrl } from "./config";
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql",
    }),
    // ItemsModule,
    MongooseModule.forRoot(databaseUrl),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
