import React from 'react'

const CustomLink = ({href,name}) => {
    if(href && href.length){
        return <a
        className="link"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}  
      </a>
    }else{
    return <span>{name}</span>
    }
}

export default CustomLink
