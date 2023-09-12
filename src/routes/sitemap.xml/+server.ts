export const GET = () => {
	const markup = '<xml<h1>Webtest</h1></xml>';

	return new Response(markup, {
		headers: {
			'Content-type': 'application/xml'
		}
	});
};
