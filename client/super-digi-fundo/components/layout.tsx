import Sidebar from './sidebar';
import TopHeader from './top-header';


export default function Layout({ children }) {
    return (
        <>
            <div className="flex flex-row h-screen">
                <Sidebar />
                <div className="basis-3/4">
                    <TopHeader />
                  {children}
                </div>
                
            </div>
        </>

    )

}