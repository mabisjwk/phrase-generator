import React, { useState } from 'react';
import Phrase from './Phrase';

const PhraseGenerator = () => {
    const [phrase, setPhrase] = useState({ content: "I am stupid.", author: "Charles Leclerc"});

    return (
        <div className="min-h-20 flex flex-col gap-4 items-start">
            <Phrase text={phrase.content} author={phrase.author} />
            <button className="bg-gradient-to-r from-teal-500 to-sky-500 p-2 rounded-lg shadow-md text-white"> Nova Frase</button>
        </div>
    );
};

export default PhraseGenerator;