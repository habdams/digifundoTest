import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { CaretLeft } from "phosphor-react";
import searchIcon from "../utils/search-icon.svg";
import Layout from "../components/layout";
import DocComp from "../components/docComp";
import NotificationLetter from "../components/notificationLetter";

const Notification = () => (
    <>
        <div className="font-mono hover:text-pink-400 text-pink-600  mt-6 ml-4 px-6">
            <Link href={"/antragsliste"}>
                <a className="flex flex-row items-center">
                    <CaretLeft /> Go back
                </a>
            </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-center lg:justify-between items-center py-6">
            <div className="ml-4 px-6">
                <h1 className="text-2xl mt-2 font-mono">Notification Letter</h1>
                <NotificationLetter />
            </div>
        </div>
    </>
);

Notification.getLayout = function getLayout(notification: ReactElement) {
    return <Layout>{notification}</Layout>;
};

export default Notification;
