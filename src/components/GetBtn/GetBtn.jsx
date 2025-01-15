import { useEffect } from "react";
import "./GetBtn.css";
const GetBtn = ({ fetchData, ref, recipe }) => {
    useEffect(() => {
        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop - 15,
                behavior: "smooth",
            });
        }
    }, [recipe]);

    return (
        <section className="get_recipe_section" ref={ref}>
            <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={fetchData}>Get a recipe</button>
        </section>
    );
};

export default GetBtn;
