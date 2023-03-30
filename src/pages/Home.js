import React from "react";
import VideoGrid from "../components/grid/VideoGrid";
import Tags from "../components/tags/Tags";
import Pagination from "../components/ui/Pagination";

const Home = () => {
  return (
    <div>
      <Tags />
      <VideoGrid />
      <Pagination />
    </div>
  );
};

export default Home;
