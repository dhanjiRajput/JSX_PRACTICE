import "./Jokes.css"
import { useEffect, useState } from "react";
const Jokes = () => {
    const API = "https://official-joke-api.appspot.com/random_joke"
    const [joke, setjoke] = useState({});

    const getjokes = async () => {
        const res = await fetch(API);
        const req = await res.json();
        setjoke(req);
    };

    useEffect(() => {
        getjokes();
    }, []);

    return (
        <>
            <div className="jokes-box">
                <h2>{joke.setup}</h2>
                <h1>{joke.punchline}</h1>
                <button onClick={getjokes}>Get A new Jokes</button>
            </div>
        </>
    );
};

export default Jokes;