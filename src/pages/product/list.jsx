import React from 'react'

export default function List(props) {
  const nameList = props.nameList
  return (
    <div>
      <ul>
        {
          nameList && nameList.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
      
    </div>

  )
}
