import {ReactNode} from "react";

export default function IconStat({icon, children}: Readonly<{ icon: ReactNode, children: ReactNode }>) {
    return (
        <div className={"flex flex-row items-center space-x-3 shadow-sm p-5 max-md:p-3 border-l-[10px] w-full border-card rounded-l-lg"}>
            <span className={"text-gray-800/80 font-semibold text-3xl max-md:text-lg"}>
                {icon}
            </span>
            <h1 className={"text-gray-800/80 text-lg text-center max-md:text-base"}>{children}</h1>
        </div>
    )
}