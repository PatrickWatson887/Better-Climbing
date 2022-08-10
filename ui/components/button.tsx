import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonColor = `primary` | `secondary` | `delete`
type ButtonImpact = `high` | `medium` | `low`
type ButtonSize = `xs` | `sm` | `md` | `xl`
type ButtonType = `button` | `submit`

type CustomProps = {
  size?: ButtonSize
  type?: ButtonType
  impact?: ButtonImpact
  color?: ButtonColor
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & CustomProps
type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Omit<CustomProps, 'type'>

const BUTTON_SIZE: { [key in ButtonSize]: string } = {
  xl: `text-base px-8 py-3 md:py-4 md:text-lg md:px-10`,
  md: `text-base px-4 py-2`,
  sm: `text-sm px-3 py-2 leading-4 rounded`,
  xs: `text-xs px-2.5 py-1.5 rounded`,
}

const BUTTON_VARIANT: {
  [impact in ButtonImpact]: { [color in ButtonColor]: string }
} = {
  high: {
    primary: `text-slate-50 bg-blue-600 hover:bg-blue-700 ring-2 ring-offset-2 ring-blue-600 focus:ring-sky-400`,
    secondary: `text-slate-800 bg-amber-400 hover:bg-amber-500 ring-2 ring-offset-2 ring-amber-400 focus:ring-orange-400`,
    delete: `text-slate-50 bg-red-600 hover:bg-red-700 ring-2 ring-offset-2 ring-red-600 focus:ring-fuchsia-500`,
  },
  medium: {
    primary: `text-slate-50 bg-blue-600 hover:bg-blue-700 focus:ring-blue-600`,
    secondary: `text-slate-800 bg-amber-400 hover:bg-amber-500 focus:ring-amber-400`,
    delete: `text-slate-50 bg-red-600 hover:bg-red-700 focus:ring-red-600`,
  },
  low: {
    primary: `text-blue-600 border-blue-600 focus:ring-blue-600 hover:bg-blue-600 hover:text-slate-50 transition-colors`,
    secondary: `text-slate-800 border-amber-400 focus:ring-amber-400 hover:bg-blue-600 hover:text-slate-50 transition-colors`,
    delete: `text-red-600 border-red-600 focus:ring-red-600 hover:bg-blue-600 hover:text-slate-50 transition-colors`,
  },
}

const BASE_CLASSES =
  'justify-center items-center border-2 border-transparent font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2'

export const Button = (props: ButtonProps): React.ReactElement => {
  const {
    className,
    impact = `medium`,
    color = `primary`,
    size = `md`,
    type = `button`,
    children,
    onClick = () => {},
  } = props

  return (
    <button
      {...props}
      onClick={onClick}
      type={type}
      className={twMerge(
        BASE_CLASSES,
        BUTTON_SIZE[size],
        BUTTON_VARIANT[impact][color],
        className
      )}>
      {children}
    </button>
  )
}

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (props, ref): React.ReactElement => {
    const {
      className,
      impact = `medium`,
      color = `primary`,
      size = `md`,
      children,
    } = props

    return (
      <a
        {...props}
        ref={ref}
        role='button'
        className={twMerge(
          BASE_CLASSES,
          BUTTON_SIZE[size],
          BUTTON_VARIANT[impact][color],
          className
        )}>
        {children}
      </a>
    )
  }
)
LinkButton.displayName = 'LinkButton'
