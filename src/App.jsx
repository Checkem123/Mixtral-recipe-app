import "./App.css";
import { useRef, useState } from "react";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import IngredientList from "./components/IngredientList/IngredientList";
import GetBtn from "./components/GetBtn/GetBtn";
import Recipe from "./components/Recipe/Recipe";
import Loading from "./components/Loading/Loading";
import getRecipeFromHuggingFace from "./apiRequest";

function App() {
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState({});
    const [isloading, setIsLoading] = useState(false);
    const callToActionSection = useRef(null);

    const fetchData = async () => {
        setIsLoading(true);
        const recipeText = await getRecipeFromHuggingFace(ingredients);
        const parsedRecipe = await JSON.parse(recipeText);
        setRecipe(parsedRecipe);
        setIsLoading(false);
    };

    return (
        <div className="container">
            <Header />
            <div className="content">
                <Form
                    ingredients={ingredients}
                    setIngredients={setIngredients}
                />

                {ingredients.length > 0 && (
                    <IngredientList ingredientsList={ingredients} />
                )}

                {ingredients.length >= 3 && (
                    <GetBtn
                        fetchData={fetchData}
                        ref={callToActionSection}
                        recipe={recipe}
                    />
                )}

                {<Loading isLoading={isloading} />}
                {Object.keys(recipe).length > 0 && <Recipe recipe={recipe} />}
            </div>
        </div>
    );
}

export default App;
