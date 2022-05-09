import React from "react";
import { useNavigate } from "react-router-dom";

export const AboutPage: React.FC = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/");
    }
    return (
        <>
            <h1>Страница информации</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam accusamus repellat veritatis sint quibusdam asperiores consequatur dicta rerum molestiae ea?
            </p>
            <button className="btn" onClick={() => handleClick()}>Обратно</button>
        </>
    )
}