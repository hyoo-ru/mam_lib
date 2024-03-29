/** @jsx $lib_react_jsx */
namespace $ {

	export function $lib_react_demo() {

		const [count, count_set] = $lib_react.useState( 0 )

		return <div>
			<button onClick={()=> count_set(count - 1)}>-</button>
			<input
				type="text"
				value={count}
				onChange={e => count_set( Number( (e.target as HTMLInputElement).value ) )}
			/>
			<button onClick={()=> count_set(count + 1)}>+</button>
		</div>

	}

	const element = document.getElementById( 'root' )
	if ( !element ) throw new Error('Cannot find root element')

	const root = $lib_react_dom_client.createRoot( element )
	root.render( <$lib_react_demo /> )

}
