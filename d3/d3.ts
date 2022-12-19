namespace $ {

	export class $lib_d3 extends $mol_object2 {

		@ $mol_mem
		static all() {
			return $mol_import.script('https://cdn.jsdelivr.net/npm/d3@7').d3 as typeof import('d3') as any
		}

	}
}
