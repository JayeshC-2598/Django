import { useState } from "react";
import Header from "./components/Header";
import Article from "./containers/Article";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Article />
        </>
    );
}

export default App;
