/// For install deps run manually: 
///     npm install react @types/react react-dom @types/react-dom

namespace $ {
	$lib_react_env

	const React = require('react') as typeof import('react')

	export const $lib_react = React
	export const $lib_react_jsx = React.createElement

	export const $lib_react_use_state = React.useState
	export const $lib_react_use_callback = React.useCallback

	export const $lib_react_elem_create = React.createElement
	export const $lib_react_elem_clone = React.cloneElement
	export const $lib_react_elem_check = React.isValidElement
}
