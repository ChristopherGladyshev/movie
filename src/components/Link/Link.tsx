import React from 'react'
interface ILinck {
  href: string;
  description: string;
  className: string;
}  




export const Link: React.FC<ILinck> = ({href,description, className}) => {
  return (
    <a href={href} className={className}>
      {description}
    </a>
  )
}
