import {AllHTMLAttributes, ReactNode} from "react";

interface SectionTitleProps extends AllHTMLAttributes<HTMLHeadElement>{
    children: ReactNode
}
export default function SectionTitle(
    {children,...props}: Readonly<SectionTitleProps>
) {
    return(
        <h1 className={"text-4xl font-semibold text-center text-gray-800/90 pt-10 pb-16 max-md:pt-6 max-md:pb-12"} {...props}>{children}</h1>
    )
}