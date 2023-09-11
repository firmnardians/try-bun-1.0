import React, { useState } from 'react';

export default function Home(props: { message: string }) {
	const [count, setCount] = useState(0);

	return (
		<main>
			{props?.message}

			<h4>{count}</h4>
			<button onClick={() => setCount((prevState) => prevState + 1)}>Increment</button>
		</main>
	);
}

console.log(<Home message='Hello world!' />);
