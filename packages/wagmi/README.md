# wagmi

A wagmi compatible wallet connector for [YETI](https://www.yetichain.com).

## Usage

```
import { YetiConnector } from "@yetichain/connector-wagmi";
import {
  createClient,
  defaultChains,
} from 'wagmi'

const client = createClient({
  autoConnect: true,
  connectors: [
    new YetiConnector({ chains: defaultChains })
});
```
