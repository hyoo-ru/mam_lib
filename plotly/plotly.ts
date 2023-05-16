namespace $ {

	export class $lib_plotly extends $mol_object2 {

		@ $mol_mem
		static all() {
			return $mol_import.script('https://cdn.plot.ly/plotly-2.16.1.min.js').Plotly as any //typeof import('plotly.js')
		}

	}
}
