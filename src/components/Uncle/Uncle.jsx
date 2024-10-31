import Cousin from "../Cousin/Cousin";

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name= {'Ron'} asset={asset}></Cousin>
                <Cousin name= {'Sonia'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;