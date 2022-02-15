import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";



const NotFound = () => {

    const router = useRouter();

    useEffect(() =>{
        setTimeout(
            ()=>{
                // router.go(-1) - this takes the user forward or backward in browsing history
                router.push('/')
            }, 5000
        )
    }, [])

    return ( 
        <div className="flex justify-center">
            <div className="flex flex-col max-w-md py-8 px-10 bg-white shadow-lg rounded-lg my-20">
                <h1 className="text-2xl my-4">Oooooops....</h1>
                <h2 className="text-lg">That page could not be found</h2>
                
                <div className="my-4">
                    <Link href="/"><button className="w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"> home </button></Link>
                </div>
            </div>
            
            
        </div>
     );
}
 
export default NotFound;