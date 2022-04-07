import { Models } from '@rematch/core';

import account from './account';
import currentTransaction from './currentTransaction';
import environment from './environment';
import marketplace from './marketplace';
import wallet from './wallet';

export interface RootModel extends Models<RootModel> {
  account: typeof account;
  environment: typeof environment;
  wallet: typeof wallet;
  currentTransaction: typeof currentTransaction;
  marketplace: typeof marketplace;
}

export const models: RootModel = {
  account,
  environment,
  wallet,
  currentTransaction,
  marketplace,
};
