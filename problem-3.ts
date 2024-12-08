const countWordOccurrences = (sentence: string, word: string) => {
	const lowerCaseSentence = sentence.toLowerCase();
	const lowerCaseWord = word.toLowerCase();

	const sentenceWords = lowerCaseSentence.split(" ");
	console.log("🚀 ~ countWordOccurrences ~ sentenceWords:", sentenceWords);
	const wordCount = sentenceWords.filter((w) => w === lowerCaseWord).length;

	return wordCount;
};

console.log(countWordOccurrences("The quick brown fox jumps over the lazy dog", "the"));
