import React from 'react'
import { cn } from '../../lib/utils'

const Button = ({ children, href, variant, className }) => {
  const variantStyles = {
    primary: 'text-white bg-black hover:bg-Neutral-800',
    secondary: 'text-Neutral-900 bg-white hover:bg-Neutral-50',
  }

  return (
    <a
      href={href}
      className={cn(
        'inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-bold tracking-[0.03125rem] transition-all duration-300',
        variantStyles[variant || 'primary'],
        className
      )}>
      {children}
    </a>
  )
}

export default Button
