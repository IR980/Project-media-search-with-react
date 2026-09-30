import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchPhoto,
  fetchVidios,
  fetchGifs,
} from "../api/mediaApi";

import {
  setResults,
  setLoading,
  setError,
} from "../redux/features/searchSlice";

import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        dispatch(setLoading());

        let data = [];

        // PHOTOS
        if (activeTab === "photos") {
          const response = await fetchPhoto(query);
          // console.log(response.results)
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description || "Photo",
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.urls.full
          }));
        }

        // VIDEOS
        if (activeTab === "videos") {
          const response = await fetchVidios(query);
          // console.log(response.videos)
          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user?.name || "Video",
            thumbnail: item.image,
            src: item.video_files?.[0]?.link,
            url: item.url
          }));
        }

        // GIFS
        if (activeTab === "gif") {
          const response = await fetchGifs(query);
          // console.log(response.data)
          data = response.data.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title || "GIF",
            thumbnail: item.images?.downsized?.url,
            src: item.images?.downsized?.url,
            url: item.url
          }));
        }
        // console.log(data)
        dispatch(setResults(data));
      } catch (err) {
        console.error(err);
        dispatch(setError(err.message));
      }
    };

    getData();
  }, [query, activeTab, dispatch]);

  if (error) {
    return (
      <div className="flex min-h-40 items-center justify-center">
        <h1 className="text-xl font-semibold text-red-500">
          Error: {error}
        </h1>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex min-h-40 items-center justify-center">
        <h1 className="text-xl font-semibold text-white">
          Loading...
        </h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {results.map((item, idx) => {
      return <div key={idx}>
        <ResultCard item={item}/>
      </div>
    })}
    </div>
  );
};

export default ResultGrid;
