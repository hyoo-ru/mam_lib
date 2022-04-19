namespace $ {
	export let $lib_pdfjs = require('pdfjs-dist/build/pdf.min.js') as typeof import('pdfjs-dist')
	$lib_pdfjs.GlobalWorkerOptions.workerSrc = '-/node_modules/pdfjs-dist/build/pdf.worker.min.js'
}
