import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TradeService } from "./trade.service";
import { TradeGrpcControllerBase } from "./base/trade.grpc.controller.base";

@swagger.ApiTags("trades")
@common.Controller("trades")
export class TradeGrpcController extends TradeGrpcControllerBase {
  constructor(protected readonly service: TradeService) {
    super(service);
  }
}
