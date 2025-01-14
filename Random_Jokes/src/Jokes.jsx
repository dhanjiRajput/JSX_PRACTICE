import { useEffect, useState } from "react";
import App from "./App";

const Jokes = () => {
    const API = "https://official-joke-api.appspot.com/random_joke"
    const [joke, setjoke] = useState({});

    const getjokes = async () => {
        const res = await fetch(API);
        const req = await res.json();
        setjoke(req);
    };

    useEffect(() =>{
        getjokes();
    },[]);

    return (
        <>
            <h2>{joke.setup}</h2>
            <h1>{joke.punchline}</h1>
            <button onClick={getjokes}>Get A new Jokes</button>
        </>
    );
};

export default Jokes;