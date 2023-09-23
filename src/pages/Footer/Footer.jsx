

const Footer = () => {
    return (
        <div>


            <footer className="bg-white rounded-lg shadow bg-red mt-5">
                <div className=" p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Amazon</a>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="/Home" className="mr-4 hover:underline md:mr-6 ">Home</a>
                        </li>
                        <li>
                            <a href="/about" className="mr-4 hover:underline md:mr-6">About</a>
                        </li>
                        <li>
                            <a href="/Products" className="mr-4 hover:underline md:mr-6">Products</a>
                        </li>
                        <li>
                            <a href="/dashboard" className="hover:underline">Dashboard</a>
                        </li>
                    </ul>
                </div>
            </footer>


        </div>
    );
};

export default Footer;