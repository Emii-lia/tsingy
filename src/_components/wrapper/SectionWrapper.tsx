import {ReactNode} from "react";

interface SectionWrapperProps extends React.AllHTMLAttributes<HTMLDivElement> {
    children:ReactNode
}
export default function SectionWrapper({children, ...props}: Readonly<SectionWrapperProps>) {
    return(
        <div className={"px-56 flex flex-col max-md:px-8 max-lg:px-20 max-xl:px-28 max-2xl:px-36"} {...props}>
            {children}
        </div>
    )
}