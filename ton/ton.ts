namespace $ {
	const { default: TonWeb }= require('tonweb') as typeof import('tonweb')

	export class $lib_ton extends $mol_object2 {

		static api_key() {
			return 'c0e4df33e6b63b8641add66d09d7aab5fdaef6c87d8afa30fa43c77f9ee51586'
		}

		@ $mol_mem
		static api() {
			return new TonWeb( new TonWeb.HttpProvider('https://testnet.toncenter.com/api/v2/jsonRPC', { apiKey: this.api_key() }) );
		}

		static createKeys() {
			return TonWeb.utils.nacl.sign.keyPair();
		}

		@ $mol_action
		static createWallet(keys: ReturnType<typeof $lib_ton.createKeys>) {
			const tonweb = new TonWeb();

			const WalletClass = tonweb.wallet.all.v3R2;
			const wallet = new WalletClass(tonweb.provider, { publicKey: keys.publicKey });

			return wallet
		}

	}
}
