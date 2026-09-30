import React from "react";
import { useDispatch } from "react-redux";
import { removeCollection } from "../redux/features/collectionSlice";
import {errorToast} from '../redux/features/collectionSlice'
const CollectionCard = ({item}) => {
    const dispatch = useDispatch()

    const removeCollectionItem = (item) =>{
        dispatch(removeCollection(item.id))
        dispatch(errorToast())
    }
  return (
    <div className="group relative h-80 w-full overflow-hidden rounded-xl bg-gray-200 shadow-lg transition duration-300 hover:scale-[1.02]">
      {/* Media */}
      <a target="_blank" href={item.url}>
        {item.type === "photo" && (
          <img
            className="h-full w-full object-cover"
            src={item.src}
            alt={item.title || "image"}
          />
        )}

        {item.type === "video" && (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src={item.src}
          />
        )}

        {item.type === "gif" && (
          <img
            className="h-full w-full object-cover"
            src={item.src}
            alt={item.title || "gif"}
          />
        )}
      </a>

      {/* Bottom Gradient + Title */}
      <div className="flex justify-between gap-3 items-center absolute bottom-0 left-0 w-full bg-linear-to-t from-black/90 via-black/50 to-transparent p-4 pt-12">
        <p className="line-clamp-2 text-sm font-medium text-white">
          {item.title || "Untitled"}
        </p>
        <button
          onClick={() => {
            // addToCollection(item);
            removeCollectionItem(item)
            
          }}
          className="bg-blue-800 px-4 py-1 cursor-pointer rounded-xl text-sm active:scale-95"
        >
          Removed
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
