const server = Bun.serve({
	port: 3000,
	fetch(req) {
		if (req.method !== 'GET') return new Response('Only GET method allowed.');

		const data = { method: req.method, status: 200, message: 'Bun hidup berjalan seperti...' };
		const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });

		return new Response(blob);
	},
});

console.log(`Listening on http://localhost:${server.port} ...`);
