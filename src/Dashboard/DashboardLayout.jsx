import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div>
            <h2>this is dashboard layout</h2>
            <Outlet/>
        </div>
    );
};

export default DashboardLayout;