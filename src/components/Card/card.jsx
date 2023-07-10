import React, { useState, useEffect } from "react";
import "./card.css";
import { Tooltip } from "@material-ui/core";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Card = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [topExpanded, setTopExpanded] = useState(false);
  const [newExpanded, setNewExpanded] = useState(false);

  useEffect(() => {
    fetchTopAlbums();
    fetchNewAlbums();
  }, []);

  const fetchNewAlbums = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/new"
      );
      const simplifiedData = response.data.map((album) => ({
        id: album.id,
        image: album.image,
        follows: album.follows,
        title: album.title,
      }));
      setNewAlbums(simplifiedData);
    } catch (error) {
      console.error("Error fetching new albums:", error);
    }
  };

  const fetchTopAlbums = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      const simplifiedData = response.data.map((album) => ({
        id: album.id,
        image: album.image,
        follows: album.follows,
        title: album.title,
      }));
      setTopAlbums(simplifiedData);
    } catch (error) {
      console.error("Error fetching top albums:", error);
    }
  };

  const handleToggleTopExpand = () => {
    setTopExpanded(!topExpanded);
  };

  const handleToggleNewExpand = () => {
    setNewExpanded(!newExpanded);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="App">
      <div className="heading1">
        <div>Top Albums</div>
        {topAlbums.length > 7 && (
          <div onClick={handleToggleTopExpand} className="headingSub">
            {topExpanded ? "Collapse" : "Show All"}
          </div>
        )}
      </div>

      <Carousel
        className="card-container"
        responsive={responsive}
        showDots={false}
        partialVisible={true}
        infinite={true}
      >
        {topAlbums.map((album) => (
          <div key={album.id} className="card">
            <Tooltip title={`${65} Songs`} placement="top">
              <img src={album.image} alt="cardImg" />
            </Tooltip>
            <div>
              <p className="card-follows">{album.follows} Follows</p>
            </div>
            <p className="card-title">{album.title}</p>
          </div>
        ))}
      </Carousel>

      <div className="heading1">
        <div>New Albums</div>
        {newAlbums.length > 7 && (
          <div onClick={handleToggleNewExpand} className="headingSub">
            {newExpanded ? "Collapse" : "Show All"}
          </div>
        )}
      </div>

      <Carousel
        className="card-container"
        responsive={responsive}
        showDots={false}
        partialVisible={true}
        infinite={true}
      >
        {newAlbums.map((album) => (
          <div key={album.id} className="card">
            <Tooltip title={`${65} Songs`} placement="top">
              <img src={album.image} alt="cardImg" />
            </Tooltip>
            <div>
              <p className="card-follows">{album.follows} Follows</p>
            </div>
            <p className="card-title">{album.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Card;
