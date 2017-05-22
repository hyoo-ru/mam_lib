/// Install: 
///     npm install pdfjs-dist
namespace $ {
	export let $lib_pdfjs = $node['pdfjs-dist/build/pdf.min.js'].PDFJS
	$lib_pdfjs.disableRange = true
	$lib_pdfjs.workerSrc = '-/node_modules/pdfjs-dist/build/pdf.worker.min.js'
}
