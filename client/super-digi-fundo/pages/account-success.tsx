import Link  from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/solid'

const AccountSuccess = () => (
    <div className="flex justify-center">
            <div className=" flex flex-col max-w-md py-8 px-10 bg-white shadow-lg rounded-lg my-20">
        <h3 className='leading-relaxed my-3 '>Wilkommen Max Mustermann vom Bezirk Unterfranken zu der Förderungsanfragensbearbeitungsplatform des bayerischen Staats.</h3>

        <p className='text-2xl my-1'>Ihr Konto ist jetzt bereit benutzt zu werden!</p>

        <div className="flex justify-end mt-4">
        <Link href="/">
            <button className='inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'>
                Weiter
                < ArrowRightIcon className='ml-2 -mr-1 h-5 w-5' />
            </button>
        </Link>
        </div>
        
        </div>
        </div>
);

export default AccountSuccess;