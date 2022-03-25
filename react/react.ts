/// For install deps run manually: 
///     npm install react @types/react react-dom @types/react-dom

namespace $ {
	// Link to include the stub at the beginning of the bundle, before including the react
	$lib_react_env

	const React = require('react') as typeof import('react')
	const ReactDOM = require('react-dom') as typeof import('react-dom')

	// JSX compiled to `React.createElement`, `window.React` must be available
	$mol_dom_context.React = React

	export const $lib_react = React

	export const $lib_react_use_state = React.useState
	export const $lib_react_use_callback = React.useCallback

	export const $lib_react_elem_create = React.createElement
	export const $lib_react_elem_clone = React.cloneElement
	export const $lib_react_elem_check = React.isValidElement

	export const $lib_react_dom = ReactDOM
}
