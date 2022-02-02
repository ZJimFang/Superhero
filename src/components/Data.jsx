import { React } from "react";

const Data = ({ data }) => {
    console.log(data);
    const { name, image, appearance: { gender, height, weight } } = data
    return (
        <>
            <img src={image.url}></img>
        </>
    )
}

export { Data }