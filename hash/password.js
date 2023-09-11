try {
	const password = 'aku-cayank-kamoe666';

	const hashPassword = await Bun.password.hash(password, {
		algorithm: 'argon2id',
		memoryCost: 4,
	});

	function isValid(hash) {
		if (Bun.password.verify(password, hash)) return console.log('authorization valid');
		return console.log('authorization failed 401');
	}

	isValid(hashPassword);
} catch (error) {
	console.log('error', error);
}
