namespace $ {
	$lib_react_env

	const React = require('react') as typeof import('react')

	export const $lib_react_all = React
	export const $lib_react = React.createElement

	export const $lib_react_use_state = React.useState
	export const $lib_react_use_callback = React.useCallback
	export const $lib_react_use_effect = React.useEffect
	export const $lib_react_use_effect_layout = React.useLayoutEffect
	export const $lib_react_use_ref = React.useRef
	export const $lib_react_use_memo = React.useMemo
	export const $lib_react_use_reducer = React.useReducer

	export const $lib_react_use_context = React.useContext
	export const $lib_react_context = React.createContext

	export const $lib_react_element_create = React.createElement
	export const $lib_react_element_clone = React.cloneElement
	export const $lib_react_element_check = React.isValidElement
}
