import "./Recipe.css";

const Recipe = ({ recipe }) => {
    const { recipe_name, ingredients_list, instructions_list } = recipe;
    return (
        <section className="recipe_section">
            <h2>Suggested recipe:</h2>
            <p>
                Based on your available ingredients, I would recommend making a{" "}
                {recipe_name}. Here&apos;s the recipe:
            </p>

            <h3>Ingredients:</h3>
            <ul>
                {ingredients_list.map((ingredient, i) => (
                    <li key={`ingredient` + i}>{ingredient}</li>
                ))}
            </ul>

            <h3>Instructions:</h3>
            <ol>
                {instructions_list.map((instruction, i) => (
                    <li key={`instruction` + i}>{instruction}</li>
                ))}
            </ol>
            <p>Enjoy!</p>
        </section>
    );
};

export default Recipe;
