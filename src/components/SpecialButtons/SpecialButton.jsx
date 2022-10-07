import React from 'react'

export default function SpecialButton({ children }) {

  const specialFunction = () => {
    alert('Special Button Clicked')
  }

  return (
    <button
      className="special-button"
      onClick={specialFunction}>
      {children}
    </button>
  )
}