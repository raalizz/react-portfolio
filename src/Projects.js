import React from "react";
import NomnomProject from "./images/NomNom-Ninja-AI-project .png";
import WeatherProject from "./images/React-weather-app.jpg";
import DictionaryProject from "./images/DictionaryProject.png";
import TravelProject from "./images/hp-travel-project.png";

import "./Projects.css";

export default function Projects() {
  return (
    <div className="Projects">
      <h2> Take a look at what I've been working on </h2>
      <div className="dots"> ... </div>

      <section className="projects">
        <div className="description">
          <h3> AI Recipe Generator</h3>
          <p>
            This interactive recipe generator was created using SheCodes AI API
            giving you real step-by-step recipes based on the ingredients that
            is provided to it. This app provides a solution for individuals
            facing the challenge of having ingredients on hand but lacking
            inspiration on how to use them effectively.
          </p>

          <a
            href="https://nomnom-ninja-ai-project.netlify.app/"
            target="_blank"
            rel=" noopener noreferrer"
          >
            <button> Launch App </button>
          </a>

          <a
            href="https://github.com/raalizz/nomnom-ninja-shecodes-AI-project"
            target="_blank"
            rel=" noopener noreferrer"
          >
            <button>
              <i className="fa-brands fa-github-alt"></i>
            </button>
          </a>
        </div>
        <div className="project-images">
          <img
            src={NomnomProject}
            alt="AI Recipe Generator"
            className="images"
          />
        </div>
      </section>
      <section className="projects">
        <div className="description">
          <h3> React Weather App</h3>
          <p>
            This interactive weather app created using the OpenWeatherMap API
            giving you real-life data and forecasts for any location around the
            world. Find your city with the search function or simply use your
            current location with a single click. It will show the current
            weather, humidity, wind speed ,clouds, and provide forecast for six
            days.
          </p>

          <a
            href="https://weather-application-by-react.netlify.app/"
            target="_blank"
            rel=" noopener noreferrer"
          >
            <button> Launch App </button>
          </a>

          <a
            href="https://github.com/raalizz/react-weather-app"
            target="_blank"
            rel=" noopener noreferrer"
          >
            <button>
              <i className="fa-brands fa-github-alt"></i>
            </button>
          </a>
        </div>
        <div className="project-images">
          <img
            src={WeatherProject}
            alt="react weather app"
            className="images"
          />
        </div>
      </section>

      <section className="projects">
        <div className="description">
          <h3> React Dictionary App</h3>
          <p>
            This interactive dictionary app created with dictionaryapi.dev and
            the SheCodes images API giving you real definitions that include:
            nouns, adjectives, and verbs along with examples and accompanied by
            nine images that match the word you're looking for.
          </p>

          <a
            href="https://a-z-dictionary.netlify.app/"
            target="_blank"
            rel=" noopener noreferrer"
          >
            <button> Launch App </button>
          </a>

          <a
            href="https://github.com/raalizz/react-dictionary-app"
            target="_blank"
            rel=" noopener noreferrer"
          >
            <button>
              {" "}
              <i className="fa-brands fa-github-alt"></i>
            </button>
          </a>
        </div>
        <div className="project-images">
          <img
            src={DictionaryProject}
            alt="react dictionary project"
            className="images"
          />
        </div>
      </section>

      <section className="projects">
        <div className="description">
          <h3> Harry Potter Travel Project</h3>
          <p>
            This Harry Potter travel project was created as a final project for
            SheCodes Responsive Add-on. This project is about the Harry Potter
            filming locations throughtout the UK, Irland, and Scotland. You can
            find eight locations with their descriptions and addresses, along
            with buttons linked to Google Maps.
          </p>

          <a
            href="https://hp-filming-locations-project.netlify.app/"
            target="_blank"
            rel=" noopener noreferrer"
          >
            <button> Launch App </button>
          </a>

          <a
            href="https://github.com/raalizz/HP-filming-locations-project"
            target="_blank"
            rel=" noopener noreferrer"
          >
            <button>
              {" "}
              <i className="fa-brands fa-github-alt"></i>{" "}
            </button>
          </a>
        </div>
        <div className="project-images">
          <img
            src={TravelProject}
            alt="Harry Potter Travel Project"
            className="images"
          />
        </div>
      </section>
    </div>
  );
}
