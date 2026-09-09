import React, { useState } from 'react';
import Phrase from './Phrase';
import axios from 'axios';

const PhraseGenerator = () => {
    const [phrase, setPhrase] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getRandomPhrase = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.get("https://dummyjson.com/quotes/random"); 
            //https://api.quotable.io/random
            //https://dummyjson.com/quotes/random
            const data = response.data;

            setPhrase({
                quote: data.quote,
                author: data.author,
            });
        } catch (error) {
            setError("Erro ao buscar frase");
        } finally {
            setLoading(false);
        }
    }

    // if(loading) {
    //     return (
    //         <div className="min-h-20">
    //             <p className="text-lg">Loading...</p>
    //         </div>
    //     );
    // }

    // if(error) {
    //     return (
    //         <div className="min-h-20">
    //             <p className="text-lg">{error}</p>
    //     </div>
    //     );
    // }

    return (
        <div className="min-h-20 flex flex-col gap-4 items-start">
            {error && (
                <p className="text-lg">{error}</p>
            )}
            {phrase && (
                <Phrase text={phrase.quote} author={phrase.author}/> 
            )}
            <button onClick={getRandomPhrase} className="bg-gradient-to-r from-teal-500 to-sky-500 p-2 rounded-lg shadow-md text-white">{loading ? "Loading..." : "Nova Frase"}</button>
        </div>
    );

};

export default PhraseGenerator;