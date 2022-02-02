import { useRef, useState, useEffect, React } from "react";
import { Card } from "./Card.jsx";
import { Button } from "./Button.jsx"

const App = () => {
    const isFetching = useRef(false);
    const [data, setData] = useState([]);

    return (
        <>
            <Card data={data} isFetching={isFetching} />,
            <Button setData={setData} isFetching={isFetching} />
        </>
    )
}



export { App }