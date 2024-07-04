import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AccountService } from "./account.service";
import { AccountGrpcControllerBase } from "./base/account.grpc.controller.base";

@swagger.ApiTags("accounts")
@common.Controller("accounts")
export class AccountGrpcController extends AccountGrpcControllerBase {
  constructor(protected readonly service: AccountService) {
    super(service);
  }
}
