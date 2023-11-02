/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "animate.css";

import spider from "../assets/spider.jpg";
import batman from "../assets/batman.jpg";
import flash from "../assets/flash.jpg";
import john from "../assets/john.jpg";
import mission from "../assets/mission.jpg";
import oppen from "../assets/oppen.jpg";

export default function Slider({ searchDetail }) {
  // Image Index
  const [image, setImage] = useState(0);
  const [anim, setAnim] = useState(false);

  // Slider Images
  const sliderImages = [
    {
      poster: spider,
      title: "Spider-Man: No Way Home",
      ranking: "8.2/10",
      duration: "2h 28min",
    },
    {
      poster: oppen,
      title: "Oppenheimer",
      ranking: "8.6/10",
      duration: "3h 0min",
    },
    {
      poster: flash,
      title: "The Flash",
      ranking: "7.5/10",
      duration: "2h 24min",
    },
    {
      poster: mission,
      title: "Mission: Impossible - Dead Reckoning Part One",
      ranking: "7.9/10",
      duration: "2h 43min",
    },
    {
      poster: john,
      title: "John Wick: Chapter 4",
      ranking: "7.8/10",
      duration: "2h 49min",
    },

    {
      poster: batman,
      title: "The Batman",
      ranking: "7.8/10",
      duration: "2h 56min",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setImage(image + 1);
      setAnim(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [image, anim]);

  if (image === sliderImages.length) {
    setImage(0);
  } else if (image < 0) {
    setImage(sliderImages.length - 1);
  }

  const navigate = useNavigate();

  return (
    <>
      {/* Slider */}
      {sliderImages[image] !== undefined ? (
        <div key={sliderImages[image].title} className="slider anim">
          <img src={sliderImages[image].poster} className="slider-image" />

          {/* Slider Buttons */}
          <div className="slider-buttons">
            <button onClick={() => setImage(image - 1)}>
              <i className="fa-solid fa-caret-left"></i>
            </button>
            <button onClick={() => setImage(image + 1)}>
              <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>

          {/* Slider Info */}
          <div className="slider-info">
            <hr />
            <h1 className="slider-info-title">{sliderImages[image].title}</h1>
            <h3 className="slider-info-ranking">
              <li className="fa-solid fa-star"></li>
              {sliderImages[image].ranking}
            </h3>
            <h3 className="slider-info-duration">
              {sliderImages[image].duration}
            </h3>
            <button
              onClick={() => {
                navigate("/movie-details");
                window.scrollTo(0, 0);
                searchDetail(sliderImages[image].title);
              }}
              className="slider-info-btn"
            >
              watch
            </button>
          </div>

          <ul className="slider-pagination">
            {sliderImages.map((item, index) => (
              <li
                className={image === index ? "active" : ""}
                onClick={() => setImage(index)}
                key={index}
              ></li>
            ))}
          </ul>
        </div>
      ) : (
        console.log("worked!")
      )}
    </>
  );
}
