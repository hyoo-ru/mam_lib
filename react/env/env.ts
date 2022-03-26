namespace $ {

	export function $lib_react_env() {
		;($mol_dom_context as any).process = { env: { NODE_ENV: 'development' } }
	}

	$lib_react_env()

}
