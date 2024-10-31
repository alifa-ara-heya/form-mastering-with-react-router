import Dad from "../Dad/dad";
import Uncle from "../Uncle/Uncle";
import Aunt from "../Aunt/Aunt";
import './Grandpa.css';
import { createContext, useState } from "react";

export const AssetContext = createContext('gold');

export const MoneyContext = createContext(1200);

const Grandpa = () => {
    const [money, setMoney] = useState(1000);
    const asset = 'diamond';
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <p>Net Money: {money} </p>
            <MoneyContext.Provider value={[money, setMoney]}>

                <AssetContext.Provider value="gold">
                    <section className="flex">
                        <Dad asset={asset}></Dad>
                        <Uncle asset={asset}></Uncle>
                        <Aunt></Aunt>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;


// 1. Create a context and export it.
// 2. Add provider for the context with a value, value could be anything;
//3. UseContext to access value in the context API.