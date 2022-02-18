import Sidebar from './sidebar';
import TopHeader from './top-header';


export default function Layout({ children }) {
    
    const toggler = () => {
        
    }

    return (
        <>
            <div className="flex flex-row h-screen md-flex">
                <Sidebar />
                <div className="flex-1">
                    <TopHeader />
                  {children}
                </div>
                
            </div>
        </>

    )

}