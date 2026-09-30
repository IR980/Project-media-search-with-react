import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);
  const dispatch = useDispatch()

  const clearAllCollection = () => {
    dispatch(clearCollection())
  }
  return (
    <div className="p-4 overflow-auto">
        {collection.length>0 ? <div className="flex justify-between mb-5">
            <h2 className="font-medium text-xl">Your Collection</h2>
            <button 
              onClick={() =>{
                clearAllCollection()
              }}
              className="bg-red-600 px-4 py-1 rounded-xl text-lg font-medium cursor-pointer active:scale-95 transition">Clear Collection</button>
        </div> : <h2 className="bg-gray-500 text-5xl text-center py-8 font-medium rounded-xl">Collection is Empty</h2>}
        
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {collection.map((item, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
