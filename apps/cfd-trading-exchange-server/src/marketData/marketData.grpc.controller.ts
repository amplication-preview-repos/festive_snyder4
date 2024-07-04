import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MarketDataService } from "./marketData.service";
import { MarketDataGrpcControllerBase } from "./base/marketData.grpc.controller.base";

@swagger.ApiTags("marketData")
@common.Controller("marketData")
export class MarketDataGrpcController extends MarketDataGrpcControllerBase {
  constructor(protected readonly service: MarketDataService) {
    super(service);
  }
}
