import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SuperDigiFundo | Funds Application Digitized</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      +</Head>

      <div className="min-h-full ">
          <div className="flex-1 flex justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 mb-8">
            <div className="mx-auto w-full max-w-sm lg">
              <div>
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900 text-center">Wilkommen zur bayrischen Förderungsan fragensbearbeitungs platform</h2>
              </div>
  
                <div className="mt-6">
                  <form action="#" method="POST" className="space-y-6">

                  <div className="space-y-1">
                      <label htmlFor="userID" className="block text-sm font-medium text-gray-700">
                      Persönliche Staats ID
                      </label>
                      <div className="mt-1">
                        <input
                          id="userID"
                          name="userID"
                          type="text"
                          autoComplete='user-id'
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                        />
                      </div>
                    </div>
  
                    <div className="space-y-1">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Passwort
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    
  
                    <div>
                      <Link href="/create-account">
                        <button
                          type="submit"
                          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                        >
                          Anmelden
                        </button>
                      </Link>
                      
                    </div>

                    <div className="space-y-3">
                      <p className='text-center'>Passwort vergessen?</p>

                      <Link href="/">
                        <button
                          className="w-full flex justify-center py-2 px-4 border border-sky-600 rounded-md shadow-sm text-sm font-medium text-sky-600 bg-sky-50 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                        >
                          Kontaktiere IT
                        </button>
                      </Link>
                     
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>  
    </div>
  )
}
