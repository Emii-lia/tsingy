import {ReactNode} from "react";

export default function ActivityCard({children, title, description}: Readonly<{
  children: ReactNode,
  title: string,
  description: string
}>) {
    return (
        <div className={"shadow-md rounded-xl max-h-[600px] h-fit flex flex-col gap-5 relative"}>
            <div className={"w-full max-h-[50%] h-80"}>
                {children}
            </div>
            <div className={"flex flex-col justify-end h-80 w-full rounded-xl absolute bottom-0 backdrop-brightness-[.8] hover:backdrop-brightness-100 transition-all hover:first:backdrop-blur-md"}>
                <div className={"flex flex-col space-y-4 p-6 max-md:space-y-3 max-md:p-3 max-md:backdrop-blur-sm backdrop-blur-sm rounded-xl"}>
                    <div className={"flex flex-col"}>
                        <h2 className={"text-white font-semibold text-xl max-md:text-lg"}>{title}</h2>
                    </div>
                    <div>
                        <p className={"text-white max-md:text-sm"}>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}