import { useEffect, useState } from "react";

const QUOTES = [
	{ text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
	{ text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
	{ text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
	{ text: "Quality is not an act, it is a habit.", author: "Aristotle" },
	{ text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
];

const randomIndex = (max: number) => Math.floor(Math.random() * max);

type Quote = { text: string; author: string };


interface RandomQuoteProps {
    quote: Quote;
    onNext: () => void;
}
export const RandomQuote = ({ quote, onNext }: RandomQuoteProps) => {
	return (
		<div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6">
			<blockquote className="text-gray-800 text-lg italic">“{quote.text}”</blockquote>
			<div className="mt-3 text-right text-sm text-gray-600">— {quote.author}</div>
			<div className="mt-4 flex justify-end">
				<button onClick={onNext} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">
					New Quote
				</button>
			</div>
		</div>
	);
};

// Container that manages state and passes props to the pure component
const RandomQuoteContainer = () => {
	const [quoteIndex, setQuoteIndex] = useState<number>(() => randomIndex(QUOTES.length));

	useEffect(() => {
		// choose an initial random quote
		setQuoteIndex(randomIndex(QUOTES.length));  
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const nextQuote = () => setQuoteIndex(() => {
		let i = randomIndex(QUOTES.length);
		// avoid same quote twice in a row when possible
		if (QUOTES.length > 1) {
			while (i === quoteIndex) i = randomIndex(QUOTES.length);
		}
		return i;
	});

	const q = QUOTES[quoteIndex];
	return <RandomQuote quote={q} onNext={nextQuote} />;
};

export default RandomQuoteContainer;

