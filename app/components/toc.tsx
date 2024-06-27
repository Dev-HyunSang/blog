import React from 'react'

function slugify(str) {
    return str
      .toString()
      .toLowerCase()
      .trim() // Remove whitespace from both ends of a string
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/&/g, '-and-') // Replace & with 'and'
      .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

export function TableOfContents(props) {
    const toc = ({ children }) => {
        let slug = slugify(children)
        return React.createElement(
            children,
        )
    }

    return (
        <p>{...props}</p>
    )
}