import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ["transaction", "trade", "account", "marketdata", "user"],
    protoPath: [
      "src/transaction/transaction.proto",
      "src/trade/trade.proto",
      "src/account/account.proto",
      "src/marketdata/marketdata.proto",
      "src/user/user.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
