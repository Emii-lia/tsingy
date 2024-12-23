import React, {ReactNode} from "react";
import "../globals.css"
import {Navbar} from "@/_components/navigation/Navbar";
import logo from "../../../../public/lemur-origami.png";
import {navLinks} from "@/_constant/nav.links";
import LanguageChanger from "@/_components/form/combo/LanguageChanger";
export default function Layout({children}: Readonly<{ children: ReactNode }>) {
    return(
        <>
            <div>
                <Navbar style={"text-customGray-600/80 bg-white shadow-md"} logo={logo.src} name="Tsingy" navLinks={navLinks}>
                    <LanguageChanger/>
                </Navbar>
            </div>
            {children}
        </>
    )
}