import type { Web3ProviderInterface, Account } from '../Web3ConfigProvider';

export class MockProvider implements Web3ProviderInterface {
  private currentAccount?: Account;
  private addressList: Account[] = [];

  getAccounts = async () => {
    return this.addressList || [];
  };
  getCurrentAccount = async () => {
    return this.currentAccount;
  };
  requestAccounts = async () => {
    return new Promise<Account[]>((resolve) => {
      setTimeout(() => {
        const addressList = [
          {
            address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          },
          {
            address: '0xEcd0D12E21805803f70de03B72B1C162dB0898d9',
          },
        ];
        resolve(addressList);
        this.currentAccount = addressList[0];
        this.addressList = addressList;
      }, 1000);
    });
  };

  getQrCodeLink = async () => {
    return new Promise<string>((resolve) =>
      setTimeout(
        () =>
          resolve(
            `https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=${Date.now()}&random=${Math.random()}`,
          ),
        2000,
      ),
    );
  };
}