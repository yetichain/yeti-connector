import { Ethereum } from "@wagmi/core";

export interface YetiEthereum extends Ethereum {
  isYeti?: boolean;
}
