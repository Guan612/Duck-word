import { Outlet } from "react-router-dom";
import AppTabbar from "./tabbar";
export default function Layout() {
    return (
        <div className="flex flex-col h-screen ">
            <Outlet className="" />
            <AppTabbar className="" />
        </div>
    );
}
