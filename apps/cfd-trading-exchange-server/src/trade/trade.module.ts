import { Module } from "@nestjs/common";
import { TradeModuleBase } from "./base/trade.module.base";
import { TradeService } from "./trade.service";
import { TradeController } from "./trade.controller";
import { TradeGrpcController } from "./trade.grpc.controller";
import { TradeResolver } from "./trade.resolver";

@Module({
  imports: [TradeModuleBase],
  controllers: [TradeController, TradeGrpcController],
  providers: [TradeService, TradeResolver],
  exports: [TradeService],
})
export class TradeModule {}
