import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Spinner from "../Components/Spinner/Spinner";


const MainFile = () => {


    const nevagation =useNavigation();

    const isLoaddingData=nevagation.state=="loading";
    console.log(isLoaddingData);

    return (
        <div className="w-3/4 mx-auto ">
           <section className="flex justify-between px-3 rounded-md shadow-md py-7">
            <div>
                <h2>Amazon</h2>
            </div>
            <nav className="">
                <ul className="flex gap-5">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/products"> Products</a>
                    </li>
                    <li>
                        <a href="/dashboard">
                            Dashboard
                        </a>
                    </li>
                </ul>
            </nav>
           </section>
           {isLoaddingData? (<Spinner/>):(<div className="min-h-screen"> <Outlet /></div>)}
           
           <Footer/>
        </div>
    );
};

export default MainFile;