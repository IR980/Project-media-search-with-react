import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'
const SearchBar = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(setQuery(text))
        setText('')
    }
  return (
    <div>
        <form onSubmit={(e) => {
            submitHandler(e)
        }}
          className='flex p-7 gap-7 bg-(--c1)'>
            <input 
              value={text}
              onChange={(e) => {
                // console.log(e.target.value);
                setText(e.target.value)
                
              }}
              required 
              className='text-white w-full px-5 py-2 rounded-xl border-2 outline-none' type="text" placeholder='search anything...'/>
            <button className='active:scale-95 bg-blue-800 text-3xl font-semibold cursor-pointer rounded-xl px-4 py-1 border-2 outline-non'>search</button>
        </form>
    </div>
  )
}

export default SearchBar