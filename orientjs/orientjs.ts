namespace $ {
	export let $lib_orientjs : typeof import( 'orientjs' ) = require( 'orientjs/lib/index.js' )

	type Classes = $mol_type_pick< typeof $lib_orientjs , { new( ... args : never[] ): unknown } >
	type Other = $mol_type_omit< typeof $lib_orientjs , { new( ... args : never[] ): unknown } >

	export type $lib_orientjs = 
		& { [ name in keyof Classes ] : InstanceType< Classes[ name ] > }
		& Other

}
