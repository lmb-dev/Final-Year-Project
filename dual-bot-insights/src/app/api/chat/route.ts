import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi} from 'openai-edge'


export const runtime = 'edge' //run on vercel edge network, longer streaming response

const apiConfig = new Configuration({
    apiKey: process.env.OPENAI_API_KEY! //applies key
})

const openai = new OpenAIApi(apiConfig)




export async function POST(req: Request){
    const { messages } = await req.json()

    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo', //model used
        stream: true,  
        messages: messages,  //passing users messagesS
        temperature: 0.2,   //low randomness
        top_p: 0.5          //diversity of tokens
    })

    const stream = OpenAIStream(response)//turns the response into a function that can be streamed back
    return new StreamingTextResponse(stream)
}

