import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className=" px-10 py-5 bg-(--c2) flex justify-between items-center">
        <h2 className="font-medium text-2xl">Media Search</h2>

        <div className="gap-5 flex items-center">
            <Link className="text-lg font-medium active:scale-95 rounded-xl bg-(--c4) text-(--c1) px-4 py-1" to='/'>search</Link>
            <Link className="text-lg font-medium active:scale-95 rounded-xl bg-(--c4) text-(--c1) px-4 py-1" to='/collection'>collection</Link>
        </div>
      </div>
  )
}

export default Navbar