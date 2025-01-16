import axios from "axios";

const API=axios.create({
    baseURL:"https://official-joke-api.appspot.com",
});

export default API;