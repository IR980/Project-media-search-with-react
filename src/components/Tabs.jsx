import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs = ['photos', 'videos', 'gif']
    const activeTab = useSelector((state) => state.search.activeTab)
    const dispatch = useDispatch()
  return (
    <div className='flex gap-5 p-6'>
        {tabs.map(function(elem, idx){
            return <button key={idx} 
              onClick={() =>{
                dispatch(setActiveTab(elem))
              }}
              className={`${(activeTab === elem ? 'bg-blue-600' : 'bg-gray-500')} text-2xl font-medium rounded-xl px-4 py-2 cursor-pointer active:scale-95`}
              >{elem}
            </button>
        })}
    </div>
  )
}

export default Tabs