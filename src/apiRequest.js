import { HfInference } from "@huggingface/inference";

const inference = new HfInference(import.meta.env.VITE_HF_KEY);

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in a javascript object to make it easier to render to a web page. To help you this is the exact format i expect:

            {
                "recipe_name": "[name of the recipe]",
                "ingredients_list": [array of ingredients],
                "instructions_list": [array of instructions]
            }
            

Only what's inside the brackets should be replaced by the correct values.
`;

export default async function getRecipeFromHuggingFace(ingredients) {
    const ingredientsString = ingredients.join(", ");
    try {
        const response = await inference.chatCompletion({
            model: "mistralai/Mistral-7B-Instruct-v0.2",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                {
                    role: "user",
                    content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
                },
            ],
            max_tokens: 1024,
        });
        return response.choices[0].message.content;
    } catch (err) {
        console.error(err.message);
    }
}
