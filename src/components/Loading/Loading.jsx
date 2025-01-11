import { PacmanLoader } from "react-spinners";

const Loading = ({ isLoading }) => {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
        marginTop: "100px",
    };

    return (
        isLoading && (
            <PacmanLoader
                loading={isLoading}
                cssOverride={override}
                size={40}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        )
    );
};

export default Loading;
