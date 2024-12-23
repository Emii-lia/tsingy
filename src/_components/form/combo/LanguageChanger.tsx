"use client"
import {locales} from "@/_constant/locale";
import {usePathname, useRouter} from "next/navigation";
import {ChangeEvent} from "react";
import {useLocale} from "use-intl";
import {IOption} from "@/_type/form";
import * as React from "react";


export default function LanguageChanger() {
    const currentLocale = useLocale()
    const router = useRouter();
    const currentPathname = usePathname();
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;

        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

        router.push(
            currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
        );

        router.refresh();
    };
    return(
        <select onChange={handleChange} value={currentLocale} className={"w-fit h-fit bg-transparent cursor-pointer z-50"}>
            {
                locales.map((locale: IOption, index: number) => (
                    <option value={locale.value} key={index} className={"w-fit h-fit"}>{locale.label}</option>
                ))
            }
        </select>
    )
}