namespace $ {

	export function $lib_react_env() {
		const test_html = $mol_dom_context.location.href.includes( 'test.html' )
		;($mol_dom_context as any).process = { env: { NODE_ENV: test_html ? 'development' : 'production' } }
	}

	$lib_react_env()

}
