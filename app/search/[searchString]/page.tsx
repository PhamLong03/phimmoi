import React from 'react'

const SearchString = ({
    params: {searchString}
}:{
    params: {searchString: string}
}) => {
  return (
    <div>{searchString}</div>
  )
}

export default SearchString