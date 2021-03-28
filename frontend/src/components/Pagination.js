import React from 'react'

function Pagination({ totalLength, pageinate }) {
  const pageNumber = []
  for (let index = 1; index <= Math.ceil(totalLength / 12); index++) {
    pageNumber.push(index)
  }
  return (
    <div>
      <ul>
        {pageNumber.map((number) => (
          <li>
            <a onClick={() => pageinate(number)} href='!#'>
              {' '}
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
