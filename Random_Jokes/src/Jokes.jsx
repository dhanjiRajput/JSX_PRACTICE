import "./Jokes.css"
import { useEffect, useState } from "react";
import API from "./axios";
const Jokes = () => {
    const [joke, setjoke] = useState({});

    const getjokes = async () => {
        const res=await API.get("/random_joke");
        setjoke(res.data);
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