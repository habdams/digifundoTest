import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/solid';


export default function CreateAccount() {
    return (
      <>
        <div className="min-h-full ">
          <div className="flex-1 flex justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg">
              <div>
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900 text-center">Erstelle ein neues Passwort</h2>
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
                          value="BAY92389080"
                          autoComplete="current-password"
                          disabled
                          className=" block w-full px-3 py-2 placeholder-gray-400 focus:outline-none border border-none text-lg"
                        />
                      </div>
                    </div>
  
                    <div className="space-y-1">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Wähle neues Passwort
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

                    <div className="space-y-1">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Passwort bestätigen
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
  
                    <div className="flex justify-end mt-4">
                        <Link href="/account-success">
                            <button
                            type="submit"
                            className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                        >
                            Weiter
                            < ArrowRightIcon className='ml-2 -mr-1 h-5 w-5' />
                        </button>
                        </Link>
                      
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
      </>
    )
  }
  