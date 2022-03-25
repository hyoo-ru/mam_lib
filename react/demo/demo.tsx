namespace $ {

	export function $lib_react_demo() {

		const [count, count_set] = $lib_react_use_state( 0 )

		return <div>
			<button onClick={()=> count_set(count - 1)}>-</button>
			<input
				type="text"
				value={count}
				onChange={e => count_set(1)}
			/>
			<button onClick={()=> count_set(count + 1)}>+</button>
		</div>

	}

}
