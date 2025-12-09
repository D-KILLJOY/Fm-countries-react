import { useNavigate } from "react-router";

function Details() {
    const navigate = useNavigate();

    return (
        <div>
            <button className=" " onClick={() => navigate(-1)}>
                Back
            </button>
        </div>
    );
}

export default Details;
