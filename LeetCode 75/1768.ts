function mergeAlternately(word1: string, word2: string): string {
	let merged = '';
	const maxLength = Math.max(word1.length, word2.length);

	for (let i = 0; i < maxLength; i++) {
		if (i < word1.length) {
			merged += word1[i];
		}
		if (i < word2.length) {
			merged += word2[i];
		}
	}

	return merged;
}

console.log(mergeAlternately('abc', 'pqr'));
console.log(mergeAlternately('ab', 'pqrs'));
console.log(mergeAlternately('abcd', 'pq'));
