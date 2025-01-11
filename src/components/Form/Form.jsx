import "./Form.css";
import { IconContext } from "react-icons";
import { GoPlus } from "react-icons/go";

const Form = ({ ingredients, setIngredients }) => {
    const addIngredient = (formData) => {
        if (formData.get("ingredient") === "") return;
        const newIngredient = formData.get("ingredient");
        setIngredients((prevIngredients) => [
            ...prevIngredients,
            newIngredient,
        ]);
    };

    return (
        <>
            <form action={addIngredient}>
                <input
                    type="text"
                    placeholder="e.g. onions"
                    aria-label="Add an ingredient"
                    name="ingredient"
                />
                <button type="submit">
                    <IconContext.Provider value={{ className: "add_plus" }}>
                        <GoPlus />
                    </IconContext.Provider>{" "}
                    Add ingredient
                </button>
            </form>
            <i className="form_hint">
                {ingredients.length < 3
                    ? `- Add ${3 - ingredients.length} or more ingredients to
                    generate a recipe`
                    : `- Keep adding ingredients or generate a recipe !`}
            </i>
        </>
    );
};

export default Form;
