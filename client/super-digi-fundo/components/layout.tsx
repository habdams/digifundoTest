import Sidebar from "./sidebar";
import TopHeader from "./top-header";

export default function Layout({ children }) {
    const toggler = () => {};
    return (
        <>
            <div className="flex flex-col h-screen md-flex">
                <TopHeader />
                <div className="w-full flex h-auto  flex-row">
                    <Sidebar />
                    <div className="w-4/5">{children}</div>
                </div>
            </div>
        </>
    );
}
