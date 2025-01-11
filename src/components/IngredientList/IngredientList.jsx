import "./IngredientList.css";

const IngredientList = ({ ingredientsList }) => {
    const ingredients = ingredientsList.map((ingredient, i) => (
        <li key={`ingredient` + i}>{ingredient}</li>
    ));

    return (
        <section className="ingredient_list">
            <h2>Ingredients on hand:</h2>
            <ul>{ingredients}</ul>
        </section>
    );
};

export default IngredientList;
