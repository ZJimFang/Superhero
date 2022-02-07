import { React } from "react";
import '../style/Card.scss';
import { Data } from "./Data.jsx";

const Card = ({ data, isFetching }) => {
    const initCard = <>
        <h1 className="title">Welcome<br /> Let's pick a hero</h1>
        <div className="arrow">
            <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-arrow-arrows-those-icons-lineal-color-those-icons-1.png" />
        </div>
    </>
    return (
        <div className="card">
            {(!isFetching.current) ? initCard : <Data data={data} />}
        </div>
    );
}

export { Card }