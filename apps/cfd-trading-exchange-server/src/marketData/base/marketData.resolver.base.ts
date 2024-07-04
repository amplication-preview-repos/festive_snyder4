/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { MarketData } from "./MarketData";
import { MarketDataCountArgs } from "./MarketDataCountArgs";
import { MarketDataFindManyArgs } from "./MarketDataFindManyArgs";
import { MarketDataFindUniqueArgs } from "./MarketDataFindUniqueArgs";
import { DeleteMarketDataArgs } from "./DeleteMarketDataArgs";
import { MarketDataService } from "../marketData.service";
@graphql.Resolver(() => MarketData)
export class MarketDataResolverBase {
  constructor(protected readonly service: MarketDataService) {}

  async _marketDataItemsMeta(
    @graphql.Args() args: MarketDataCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [MarketData])
  async marketDataItems(
    @graphql.Args() args: MarketDataFindManyArgs
  ): Promise<MarketData[]> {
    return this.service.marketDataItems(args);
  }

  @graphql.Query(() => MarketData, { nullable: true })
  async marketData(
    @graphql.Args() args: MarketDataFindUniqueArgs
  ): Promise<MarketData | null> {
    const result = await this.service.marketData(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => MarketData)
  async deleteMarketData(
    @graphql.Args() args: DeleteMarketDataArgs
  ): Promise<MarketData | null> {
    try {
      return await this.service.deleteMarketData(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
