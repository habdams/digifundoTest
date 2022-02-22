import { Disclosure } from '@headlessui/react'
import { Stack, AddressBook, Coins } from "phosphor-react";

const navigation = [
    {
        name: 'Forderungsantrage',
        icon: Stack,
        current: true,
        children: [
            { name: 'Antrag', href: '/antrag' },
            { name: 'Externe Dokumente', href: '#' },
            { name: 'Rechnung', href: '#' },
            { name: 'Bestatigung', href: '#' },
        ],
    },
    {
        name: 'Budgetplannung',
        icon: Coins,
        current: false,
        children: [
            { name: 'Planning', href: '#' },
        ],
    },

    {
        name: 'Kontakt',
        icon: AddressBook,
        current: false,
    },



]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Sidebar() {
    return (
        <>
            <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-[#F3F3F3] overflow-y-auto min-h-full">
                <div className="mt-5 flex-grow flex flex-col">
                    <nav className="flex-1 px-2 space-y-1 bg-[#F3F3F3]" aria-label="Sidebar">
                        {navigation.map((item) =>
                            !item.children ? (
                                <div key={item.name}>
                                    <a
                                        href="#"
                                        className={classNames(
                                            item.current
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'bg-[#F3F3F3] text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                            'group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md mt-4'
                                        )}
                                    >
                                        <item.icon
                                            className={classNames(
                                                item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                                'mr-3 flex-shrink-0 h-6 w-6'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </a>
                                </div>
                            ) : (
                                <Disclosure as="div" key={item.name} className="space-y-1">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'bg-[#F3F3F3] text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                    'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md mt-4 focus:outline-none focus:ring-2 focus:ring-gray-500'
                                                )}
                                            >
                                                <item.icon
                                                    className={ classNames(
                                                        open ? 'mr-3 flex-shrink-0 h-6 w-6 text-pink-400'
                                                        :'mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500'
                                                    ) } aria-hidden="true"
                                                />
                                                <span className="flex-1">{item.name}</span>
                                                <svg
                                                    className={classNames(
                                                        open ? 'text-pink-400 rotate-90' : 'text-gray-300',
                                                        'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
                                                    )}
                                                    viewBox="0 0 20 20"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                                                </svg>
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="space-y-1">
                                                {item.children.map((subItem) => (
                                                    <Disclosure.Button
                                                        key={subItem.name}
                                                        as="a"
                                                        href={subItem.href}
                                                        className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-pink-600 rounded-md mt-4 hover:text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {subItem.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            )
                        )}
                    </nav>
                </div>
            </div>
        </>
    )
}