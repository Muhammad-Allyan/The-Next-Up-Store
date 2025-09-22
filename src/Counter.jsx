import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [history, setHistory] = useState([]);
    //Increment
    function increament() {
        const myCounts = count + 1;
        setCount(myCounts)
        history.push(myCounts);
        setHistory(history);
    }
    // Decrement
    function decrement() {
        const myCounts = count - 1;
        setCount(myCounts)
        setHistory([...history, myCounts]); 
    }
    // Clear History
    function clearHistory (){
        setHistory([]);
    }
    // console.log(count)

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increament}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={clearHistory}>Clear</button>
            <h3>History</h3>
            <ul>
                {history.map((value, index) => (
                    <li key={index}>{value}</li> ))}
            </ul>
        </div>
    );

}