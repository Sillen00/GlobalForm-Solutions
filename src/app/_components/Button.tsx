import {
  IoIosArrowDropdown,
  IoIosArrowDropleft,
  IoIosArrowDroprightCircle,
  IoIosArrowDropup,
  IoIosSave,
} from "react-icons/io"
import styles from "./Button.module.scss"

/**
 * Enumeration of icon types
 */
export enum IconType {
  None = "None",
  Save = "Save",
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
  [IconType.Save]: IoIosSave as React.ComponentType<
    React.HTMLAttributes<HTMLElement>
  >,
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

function Button({
  children,
  icon,
  className,
  onClick,
}: ButtonProps): JSX.Element {
  const Icon = iconMap[icon]
  return (
    <button className={`${styles.buttonStyle} ${className}`} onClick={onClick}>
      {children}
      {Icon && (
        <Icon
          aria-label='Custom icon'
          className={`${styles.arrow_btn} ${className}`}
        />
      )}
    </button>
  )
}

export default Button
