import { React } from "react";
import '../style/Button.scss';

const Button = ({ setData, isFetching }) => {
    async function fetchData() {
        isFetching.current = true
        //pick one
        const number = Math.floor(Math.random() * 731) + 1;
        const res = await fetch(`https://www.superheroapi.com/api.php/4693992047364448/${number}`)
        const data = await res.json();
        setData(data)
    }
    return (
        <button className="btn btn-primary Button" onClick={fetchData}>Pick one</button>
    )
}

export { Button }