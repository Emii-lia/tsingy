import { ButtonProps } from './types/button';

export const Button = (props:ButtonProps) => {
  const {type, label, disabled = false, onClick, variant, leftIcon, size, style} = props
  let btnSize: string
  switch (size) {
    case "small":
      btnSize = "in-btn-small"
      break;
    case "medium":
      btnSize = "in-btn-medium"
      break;
    case "large":
      btnSize = "in-btn-large"
      break;
  
    default:
      btnSize = "in-btn-medium"
      break;
  }
  const btnVariant = ()=>{
    switch (variant) {
      case "primary":
        return "in-btn-primary"
    
      case "secondary":
        return "in-btn-secondary"
    
      case "neutral":
        return "in-btn-neutral"
    
      default:
        return "in-btn-neutral"
    }
  }
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`in-btn ${btnSize} ${btnVariant()} ${style} ${disabled && "cursor-not-allowed"} ${variant==="primary"?"disabled:bg-primary-300":"disabled:border-primary-300 disabled:text-primary-300 disabled:hover:bg-transparent"}`}
    >
      {
        leftIcon &&
        <span>{leftIcon}</span>
      }
      <span>{label}</span>
    </button>
  )
}
