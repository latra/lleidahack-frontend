import React from 'react'
import Grups from "./Grups"

const MetaTest = ({ functionsList, autotest}) => {
  return (
    <div>
      {functionsList.map((data,i) => (
          <Grups key={i} data={data} autotest={autotest}/>
        ))}
    </div>
  )
}

export default MetaTest