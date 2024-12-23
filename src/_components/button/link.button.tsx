import { LinkButtonProps } from './types/button'
import Link from "next/link";

export const LinkButton = (props:LinkButtonProps) => {
    const { to, leftIcon, label, variant, size, style } = props
    let btnSize;
    let btnIconSize;
    switch (size) {
      case "small":
        btnSize = "in-btn-small"
        btnIconSize = "in-icon-btn-small"
        break;
      case "medium":
        btnSize = "in-btn-medium"
        btnIconSize = "in-icon-btn-medium"
        break;
      case "large":
        btnSize = "in-btn-large"
        btnIconSize = "in-icon-btn-large"
        break;
    
      default:
        btnSize = "w-full"
        btnIconSize = "w-full"
        break;
    }
    const btnVariant = ()=>{
      switch (variant) {
        case "primary":
          return "in-btn-primary"    
      
        case "secondary":
          return "in-btn-secondary"    
      
        case "link":
          return "in-btn-link"    
      
        default:
          return "";
      }
    }
    // const btnVariant = variant == "primary"? "in-btn-primary" : "in-btn-secondary"
    const sz = label?btnSize:btnIconSize
    return (
        <Link href={to}>
            <button className={`in-btn ${sz} ${style} ${btnVariant()}`}>
                {
                    leftIcon &&
                    <span>{leftIcon}</span>
                }
                {
                  label &&
                  <span>{label}</span>
                }
            </button>
        </Link>
    )
}
