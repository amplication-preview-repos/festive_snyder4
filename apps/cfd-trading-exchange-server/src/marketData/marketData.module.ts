import { Module } from "@nestjs/common";
import { MarketDataModuleBase } from "./base/marketData.module.base";
import { MarketDataService } from "./marketData.service";
import { MarketDataController } from "./marketData.controller";
import { MarketDataGrpcController } from "./marketData.grpc.controller";
import { MarketDataResolver } from "./marketData.resolver";

@Module({
  imports: [MarketDataModuleBase],
  controllers: [MarketDataController, MarketDataGrpcController],
  providers: [MarketDataService, MarketDataResolver],
  exports: [MarketDataService],
})
export class MarketDataModule {}
