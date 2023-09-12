export const GET = () => {
	const markup = '<html><body><h1>Webtest</h1></body></html>';

	return new Response(markup, {
		headers: {
			'Content-type': 'text/html'
		}
	});
};
