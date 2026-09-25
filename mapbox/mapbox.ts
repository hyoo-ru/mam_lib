namespace $ {

	export class $lib_mapbox extends $mol_object {

		@ $mol_mem
		static api() {
			$mol_wire_solid()
			$mol_import.style( './node_modules/mapbox-gl/dist/mapbox-gl.css' )
			return $mol_import.script( './node_modules/mapbox-gl/dist/mapbox-gl.js' ).mapboxgl as typeof import( 'mapbox-gl' )
		}

	}

}
