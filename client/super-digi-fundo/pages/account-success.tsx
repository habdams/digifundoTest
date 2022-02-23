import Link from 'next/link';
import Image from 'next/image';

const AccountSuccess = () => (
    <div className="min-h-full ">
        <div className="flex flex-row min-w-full">
            <div className="flex-1 flex justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-1/2">
                <div className="mx-auto w-full max-w-sm lg">
                    <Image src={'/logo.png'} width={332} height={90} />

                    <div className="my-8 text-center text-xl">
                        <p className="text-gray-500 ">Servus <span className="text-bold text-pink-600">Holger Häßlein </span></p>
                        <p className="text-gray-500">aus dem Bezirk <span className="text-bold text-pink-600">Unterfranken</span></p>
                    </div>

                    <div className="mb-8 mt-6">
                        <h2 className="font-light text-3xl text-gray-900 text-center">Wilkommen zur bayrischen
                            Ihr Konto ist jetzt bereit
                            benutzt zu werden.</h2>
                    </div>

                    <div>
                  <Link href="/forderungsantrage">
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:pink-sky-500"
                    >
                      Weiter
                    </button>
                  </Link>

                </div>
                </div>
            </div>
            <div className="lg:bg-[url('/bg1.png')] lg:w-1/2 bg-cover min-h-screen"></div>
        </div>
    </div>
);

export default AccountSuccess;