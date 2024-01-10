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
  label: string
  icon: IconType
  className?: string
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

function Button({ label, icon, className }: ButtonProps): JSX.Element {
  const Icon = iconMap[icon]
  return (
    <button className={`buttonStyle ${className}`}>
      <span>{label}</span>
      {Icon && <Icon className={`arrow-btn ${className}`} />}
    </button>
  )
}

export default Button
