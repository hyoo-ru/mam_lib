namespace $ {

	export class $lib_ton extends $mol_object2 {

		@ $mol_mem
		static pkg() {
			return $mol_import.script('https://unpkg.com/tonweb@0.0.50/dist/tonweb.js').TonWeb as typeof import('tonweb').default
		}

	}
}
