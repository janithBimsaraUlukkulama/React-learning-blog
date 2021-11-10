import { useState } from "react";

const Home = () => {

    // const handleClick = () => {
    //     console.log('hello');
    // }

    // const handleClick2 = (val) => {
    //     console.log(val);
    // }

    // const handleClick3 = (e) => {
    //     console.log(e);
    // }

    const [name, setName] = useState('one');

    const handleClick4 = () => {
        console.log('two');
        setName('two');
    }

    return (
        <div className="home">
            <h2>HomePage</h2>
            {/* basic button */}
            {/* <button onClick={handleClick} >Click me</button> */}

            {/* dyanmic value passing use annonymus function to prewent function call in load */}
            {/* <button onClick={() => handleClick2('hi')} >Click me</button> */}

            {/* use click events */}
            {/* <button onClick={handleClick3} >Click me</button> */}

            {/* use state for dynamic value changes */}
            <p>{name}</p>
            <button onClick={handleClick4}>Click me</button>
        </div>
    );
}

export default Home;