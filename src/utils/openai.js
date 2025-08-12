import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

const openai = new OpenAI({
    apiKey : OPENAI_KEY, //authorization
    dangerouslyAllowBrowser : true, //because our api key can be compromised
    baseURL: "https://api.perplexity.ai"
})

export default openai