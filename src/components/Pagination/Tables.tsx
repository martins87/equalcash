import React from 'react'

import UFarmTable from '../UFarmTable'

const Tables = ({pageTables}) => {
  return (
    <>
      {pageTables.map((number, index) => (
        <div key={index}>
          <UFarmTable number={number}/>
          <br />
        </div>
      ))}
    </>
  )
}

export default Tables
