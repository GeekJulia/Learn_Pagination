import React from 'react'

const Pagination = (totalPosts,postsPerPage) => {
    let pages = [];
    for(int = 1; i < Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i)
    }
  return (
    <div>
      {
        pages.map((page,index) => {
            return <button key={index}>{page}</button>
        })
      }
    </div>
  )
}

export default Pagination
