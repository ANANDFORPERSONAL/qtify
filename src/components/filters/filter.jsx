import React, { useState, useEffect } from "react";
import { Tabs, Tab, Box } from "@material-ui/core";
import axios from "axios";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "./filter.css";

const TabPanel = ({ children, value, index }) => {
  return value === index ? <Box sx={{ p: 3 }}>{children}</Box> : null;
};

const Filter = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);
  const [genre, setGenre] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseSongs = await axios.get("https://qtify-backend-labs.crio.do/songs");
        const songsData = responseSongs.data;
        setData(songsData);

        const responseGenres = await axios.get("https://qtify-backend-labs.crio.do/genres");
        const genresData = responseGenres.data;
        setGenre(genresData);

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Filter songs based on genre
  const filteredData = (genreKey) =>
    data.filter((song) => song.genre.key === genreKey);

  const tabItems = [
    
    { label: "Jazz", genreKey: "jazz" },
    { label: "Rock", genreKey: "rock" },
    { label: "Pop", genreKey: "pop" },
    { label: "Blues", genreKey: "blues" },
  ];

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
    <Box sx={{ width: "100%" }}>
      <hr />
      <h2 className="title">Songs</h2>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{
          "& button": { color: "white" },
          "& button.Mui-selected": { color: "white" },
        }}
        TabIndicatorProps={{
          style: {
            backgroundColor: "green",
          },
        }}
      >
        {tabItems.map((item, index) => (
          <Tab key={index} label={item.label} />
        ))}
      </Tabs>

      {tabItems.map((item, index) => (
        <TabPanel key={index} value={value} index={index}>
          <Carousel
            responsive={responsive}
            showDots={false}
            partialVisible={true}
            infinite={true}
            itemClass="carousel-item"
          >
            {filteredData(item.genreKey).map((song) => (
              <div key={song.id} className="card">
                <img src={song.image} alt="song" />
                <div>
                  <p className="card-follows">{song.likes} likes</p>
                </div>
                <p className="card-title">{song.title}</p>
              </div>
            ))}
          </Carousel>
        </TabPanel>
      ))}

      <hr />
    </Box>
  );
};

export default Filter;
