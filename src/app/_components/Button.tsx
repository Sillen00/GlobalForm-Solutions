import {
  IoIosArrowDropdown,
  IoIosArrowDropleft,
  IoIosArrowDroprightCircle,
  IoIosArrowDropup,
} from "react-icons/io"
import "./Button.scss"

/**
 * Enumeration of icon types
 */
export enum IconType {
  None = "None",
  Right = "RightArrow",
  Left = "LeftArrow",
  Up = "UpArrow",
  Down = "DownArrow",
}

interface ButtonProps {
  children: React.ReactNode
  icon: IconType
  className?: string
  onClick?: () => void | undefined
}

const iconMap = {
  [IconType.None]: null,
  [IconType.Right]: IoIosArrowDroprightCircle as React.ComponentType<
    React.HTMLAttributes<HTMLElement>
  >,
  [IconType.Left]: IoIosArrowDropleft as React.ComponentType<
    React.HTMLAttributes<HTMLElement>
  >,
  [IconType.Up]: IoIosArrowDropup as React.ComponentType<
    React.HTMLAttributes<HTMLElement>
  >,
  [IconType.Down]: IoIosArrowDropdown as React.ComponentType<
    React.HTMLAttributes<HTMLElement>
  >,
}

function Button({ children, icon, className, onClick }: ButtonProps): JSX.Element {
  const Icon = iconMap[icon]
  return (
    <button className={`buttonStyle ${className}`} onClick={onClick}>
      <span>{children}</span>
      {Icon && <Icon className={`arrow-btn ${className}`} />}
    </button>
  )
}

export default Button as React.ComponentType<ButtonProps>
