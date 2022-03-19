import type { ReactElement } from "react";
import Layout from "../components/layout";
import InnerHeader from "../components/inner-header";
import Sidebar from "../components/sidebar";


const InnerLayout = ({children}) => (
    <>
        <InnerHeader />
        <div className="flex w-screen">
            <div className="w-3/5">  
                {children}
            </div>
            <div className="w-1/5">
                <Sidebar />
            </div>
        </div>


    </>
);

InnerLayout.getLayout = function getLayout(innerLayout: ReactElement) {
    return <Layout>{innerLayout}</Layout>;
};

export default InnerLayout;
