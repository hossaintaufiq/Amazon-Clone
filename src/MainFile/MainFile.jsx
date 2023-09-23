import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";


const MainFile = () => {
    return (
        <div className="w-3/4 mx-auto ">
           <section className="flex justify-between px-3 rounded-md shadow-md py-7">
            <div>
                <h2>Amazon</h2>
            </div>
            <nav className="">
                <ul className="flex gap-5">
                    <li>
                        <a href="/home">Home</a>
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
           <div className="min-h-screen">
           <Outlet />

           </div>
           
           <Footer/>
        </div>
    );
};

export default MainFile;