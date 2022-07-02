namespace $ {
	// err: Cannot use import statement outside a module
	// const { default: TonWeb }= require('tonweb') as typeof import('tonweb')

	export const $lib_ton = require('./min.js') as typeof import('tonweb').default

}
