import { React } from "react";
import '../style/Data.scss'
const Data = ({ data }) => {
    const { name, image, appearance: { gender, height, weight }, powerstats: { power, speed, strength } } = data
    return (
        <>
            <div className="imgContainer">
                <img src={image.url}></img>
            </div>
            <span className="name">{name}</span>
            <div className="detail">
                <span className="gender">{gender}</span>
                <span className="height">{height[1]}</span>
                <span className="weight">{weight[1]}</span>
            </div>
            <div className="powerStats">
                <div className="bar">
                    <div className="info">
                        <span>Power</span>
                    </div>
                    <div className="progress-line" ><span style={{ width: `${power}%` }}></span></div>
                </div>
                <div className="bar">
                    <div className="info">
                        <span>Speed</span>
                    </div>
                    <div className="progress-line" ><span style={{ width: `${speed}%` }}></span></div>
                </div>
                <div className="bar">
                    <div className="info">
                        <span>Strength</span>
                    </div>
                    <div className="progress-line" ><span style={{ width: `${strength}%` }}></span></div>
                </div>
            </div>
        </>
    )
}

export { Data }