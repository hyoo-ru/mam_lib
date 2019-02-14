/// Install: 
///     npm install pdfjs-dist
namespace $ {
	export let $lib_pdfjs = $node['pdfjs-dist/build/pdf.min.js']
	$lib_pdfjs.disableRange = true
	$lib_pdfjs.GlobalWorkerOptions.workerSrc = '-/node_modules/pdfjs-dist/build/pdf.worker.min.js'
}
