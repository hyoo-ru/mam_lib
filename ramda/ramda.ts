/// Install: 
///     npm install ramda
module $ {
	declare function require( path : string ) : any
	export let $lib_ramda = $mol_global.R || require( '../../node_modules/ramda/dist/ramda.js' )
}
