import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import store from "./store/store";
import { NextUIProvider } from "@nextui-org/react";
import Detail from "./pages/details/Detail";
import Movie from "./pages/movie/Movie";
import RateList from "./pages/RateList/RateList";
import FavList from "./pages/FavList/FavList";
import MovieGenreView from "./pages/movie/MovieGenre";
import MovieCategory from "./pages/movie/MovieCategory";

function App() {
  return (
    <div>
      <NextUIProvider>
        <BrowserRouter>
          <Provider store={store}>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/movie" element={<Movie />} />
                <Route path="/movie/:category" element={<MovieCategory />} />
                <Route path="/movie/genre/:id" element={<MovieGenreView />} />
                <Route path="/favorite" element={<FavList />} />
                <Route path="/rating" element={<RateList />} />
              </Routes>
            </Layout>
          </Provider>
        </BrowserRouter>
      </NextUIProvider>
    </div>
  );
}

export default App;
