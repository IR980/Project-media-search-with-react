import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import Navbar from './components/Navbar'

const App = () => {
  
  return (
    <div className='bg-gray-900 min-h-screen w-full text-white'>
      {/* <h1>This i a project</h1>
      <button 
        onClick={async() => {
          const data = await fetchPhoto("cat")
          console.log(data.results);
          
        }}
        className='bg-amber-400 rounded-xl px-5 py-2 m-7'>get Photos
      </button>

      <h1>This i a project</h1>
      <button 
        onClick={async() => {
          const data = await fetchVidios("cat")
          console.log(data.videos);
          
        }}
        className='bg-amber-400 rounded-xl px-5 py-2 m-7'>get Videos
      </button>

      <h1>This i a project</h1>
      <button 
        onClick={async() => {
          const data = await fetchGifs("man")
          console.log(data.data);
          
        }}
        className='bg-amber-400 rounded-xl px-5 py-2 m-7'>get Gifs
      </button> */}
      <Navbar/>
      <Routes>

        <Route path='/' element = {<HomePage/>}/>

        <Route path='/collection' element = {<CollectionPage/>} />
      </Routes>
      
    </div>
    
  )
}

export default App