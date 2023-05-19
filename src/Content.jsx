
import { ArtworksIndex } from "./ArtworksIndex";
import axios from "axios";
import { useState, useEffect } from "react";

export function Content() {
  
  const [artworks, setArtworks] = useState([]);
  
  const handleIndexArtworks = () => {
    console.log("handleIndexArtworks");
    axios.get("http://localhost:3000/artworks.json").then((response) => {
      console.log(response.data);
      setArtworks(response.data);
    });
  }

  useEffect(handleIndexArtworks, []);


    return (
      <div>
        <ArtworksIndex artworks={artworks} />
      </div>
    );
  }