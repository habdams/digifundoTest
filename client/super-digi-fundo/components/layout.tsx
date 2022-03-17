import Sidebar from "./sidebar";
import TopHeader from "./top-header";
import Footer from "./footer";

export default function Layout({ children }) {
    return (
        <>
            <div className="flex flex-col h-screen md-flex">
                <TopHeader />
                <div className="w-full flex h-auto  flex-col items-center justify-center">
                    <div className="w-4/5">{children}</div>
                </div>
                <Footer />
            </div>
        </>
    );
}
