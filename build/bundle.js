try {
	await Bun.build({
		entrypoints: ['./server/server.ts'],
		outdir: './dist',
		minify: true,
		splitting: true,
	});
} catch (error) {
	console.log(`ERROR ${error}`);
}

console.log('Done');
