import { Disclosure } from "@headlessui/react";
import {
    Stack,
    AddressBook,
    Coins,
    CaretRight,
    GearSix,
    Power,
} from "phosphor-react";

const navigation = [
    {
        name: "Forderungsantrage",
        icon: Stack,
        current: true,
        children: [
            { name: "Antrag", href: "/antragsliste" },
            { name: "Externe Dokumente", href: "#" },
            { name: "Rechnung", href: "#" },
            { name: "Bestatigung", href: "#" },
        ],
    },
    {
        name: "Budgetplannung",
        icon: Coins,
        current: false,
        children: [{ name: "Planning", href: "#" }],
    },

    {
        name: "Kontakt",
        icon: AddressBook,
        current: false,
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
    return (
        <>
            <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 px-2 bg-[#F3F3F3] overflow-y-auto min-h-vh">
                <div className="mt-5 flex-grow flex flex-col">
                    <nav
                        className="flex-1 px-2 space-y-1 bg-[#F3F3F3]"
                        aria-label="Sidebar"
                    >
                        {navigation.map((item) =>
                            !item.children ? (
                                <div key={item.name}>
                                    <a
                                        href="#"
                                        className={classNames(
                                            item.current
                                                ? "bg-gray-100 text-gray-900"
                                                : "bg-[#F3F3F3] text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                            "group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md mt-4"
                                        )}
                                    >
                                        <item.icon
                                            className={classNames(
                                                item.current
                                                    ? "text-gray-500"
                                                    : "text-gray-400 group-hover:text-gray-500",
                                                "mr-3 flex-shrink-0 h-6 w-6"
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </a>
                                </div>
                            ) : (
                                <Disclosure
                                    as="div"
                                    key={item.name}
                                    className="space-y-1"
                                >
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button
                                                className={classNames(
                                                    item.current
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "bg-[#F3F3F3] text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                                    "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md mt-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                                )}
                                            >
                                                <item.icon
                                                    className={classNames(
                                                        open
                                                            ? "mr-3 flex-shrink-0 h-6 w-6 text-pink-400"
                                                            : "mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                <span className="flex-1">
                                                    {item.name}
                                                </span>
                                                <svg
                                                    className={classNames(
                                                        open
                                                            ? "text-pink-400 rotate-90"
                                                            : "text-gray-300",
                                                        "ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                                                    )}
                                                    viewBox="0 0 20 20"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M6 6L14 10L6 14V6Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="space-y-1">
                                                {item.children.map(
                                                    (subItem) => (
                                                        <Disclosure.Button
                                                            key={subItem.name}
                                                            as="a"
                                                            href={subItem.href}
                                                            className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-pink-600 rounded-md mt-4 hover:text-gray-900 hover:bg-gray-50"
                                                        >
                                                            {subItem.name}
                                                        </Disclosure.Button>
                                                    )
                                                )}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            )
                        )}
                    </nav>

                    <div className="mt-8 border-t-2 px-4 pt-4 pb-8 mb-4 border-gray-200">
                        <p className="text-sm text-gray-800 mb-4">
                            Zuletzt geoffnet:
                        </p>

                        <div className="bg-white rounded-md p-2 flex mb-2 flex-row items-center justify-between gap-4">
                            <div>
                                <h3 className="text-md">Bad Staffenstein</h3>
                                <p className="text-sm text-gray-400">
                                    Neue Kuche
                                </p>
                            </div>
                            <CaretRight />
                        </div>

                        <div className="bg-white rounded-md p-2 flex mb-2 flex-row items-center justify-between gap-4">
                            <div>
                                <h3 className="text-md">Kulmbach</h3>
                                <p className="text-sm text-gray-400">
                                    Renovierung
                                </p>
                            </div>
                            <CaretRight />
                        </div>

                        <div className="bg-white rounded-md p-2 mb-2 flex flex-row items-center justify-between gap-4">
                            <div>
                                <h3 className="text-md">Puschersdorf</h3>
                                <p className="text-sm text-gray-400">Anbau</p>
                            </div>
                            <CaretRight />
                        </div>
                    </div>

                    <div className="p-4 border-t-2 border-gray-200">
                        <span className="flex gap-4 text-center mb-4">
                            <GearSix className="h-6 w-6 text-gray-800" />
                            <p className="text-sm">Einstellungen</p>
                        </span>

                        <span className="flex gap-4 text-center mb-4">
                            <Power className="h-6 w-6 text-gray-800" />
                            <p className="text-sm">Abmelden</p>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
