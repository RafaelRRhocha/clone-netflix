import React from "react";
import { getHomeList, getMovieInfo } from "../services/moviesApi";
import MovieList from "./MovieList";
import { Footer } from "./Footer";
import Header from "./Header";
import FeatureMovie from "./FeatureMovie";
import { Loading } from "./Loading";
import PropTypes from 'prop-types';
import { useState } from "react";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const [bgHeader, setBgHeader] = useState(false);
  const [feature, setFeature] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    changeBg();
    loadAll();
    setLoadingMovies();
  }, []);

  const changeBg = () => window.addEventListener('scroll', () => {
    if(window.scrollY >= 10) { setBgHeader(true) }
    if(window.scrollY < 10) { setBgHeader(false) }
  });

  const setLoadingMovies = async () => {
    setLoading(true);
    await getHomeList();
    setLoading(false);
  };

  const loadAll = async () => {
    let list = await getHomeList();
    let featureFilter = list.filter((item) => item.slug === 'trending');
    let randomFeatureMovie = Math.floor(Math.random() * (featureFilter[0].items.results.length - 1));
    let chosenMovie = featureFilter[0].items.results[randomFeatureMovie];
    let finalChosenMoviesWithAllInfos = await getMovieInfo(chosenMovie.id, 'tv');
    setMovies(list);
    setFeature(finalChosenMoviesWithAllInfos);
  }

  return (
    <>
      {loading ? <Loading /> : (
        <>
          <div>
            <Header bgHeader={bgHeader} />
          </div>
          <div>
              {feature && <FeatureMovie feature={feature} />}
              <div className="text-zinc-100">
                {movies.map((movies, i) => (
                  <MovieList key={i} title={movies.title} items={movies.items}/>
                ))}
              </div>
          </div>
          <div>
            <Footer />
          </div>
        </>
      )}
    </>
  )
}

Home.propTypes =  {
  history: PropTypes.shape(() => ({
    push: PropTypes.func.isRequired,
  }))
}

export default withRouter(Home);
