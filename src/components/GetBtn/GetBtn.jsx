import "./GetBtn.css";
const GetBtn = ({ fetchData }) => {
    return (
        <section className="get_recipe_section">
            <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={fetchData}>Get a recipe</button>
        </section>
    );
};

export default GetBtn;
