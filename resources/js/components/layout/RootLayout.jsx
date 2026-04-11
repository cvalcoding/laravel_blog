import { Outlet } from "react-router";
import Header from "./Header";

function RootLayout() {
    return (
        <>
            <Header />
            <main className="container mb-4">
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;
