import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";

function ShoPPingLayout() {
    return (
        <div className="flex flex-col bg-white overflow-hidden">
            {/* common header */}
            <ShoppingHeader />
            <main className="flex flex-col">
                <Outlet />
            </main>
        </div>
    );
}

export default ShoPPingLayout;