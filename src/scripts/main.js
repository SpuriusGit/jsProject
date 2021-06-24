import "../styles/style.scss";

//Animation header
import { tagsActionMenu, toggleHiddenInput } from "./animation";

//all refs to DOM
import refs from "./refs";

//import Class Films
import FilmsTrend from "./trendsFilms";

//import navigationToggle
import navigationToggle from "./navigationToggle";

//toggle animation
refs.swithSearch.addEventListener("click", toggleHiddenInput);

//active tag animation
refs.menuNav.addEventListener("click", tagsActionMenu);

const API_KEY = `a0954edce1669bd21c76fe63f43c7ba1`;
const URNTrend = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=1`;
const GenreArr = `http://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;

// const imgURI = `http://image.tmdb.org/t/p/w500`;

new FilmsTrend(URNTrend).init();
// title: "Cruella"
//  poster(poster_path): /hjS9mH8KvRiGHgjk6VUZH7OT0Ng.jpg
// genre_ids:  [35, 80] need request to API
// rating (vote_average): 8.8
// http://image.tmdb.org/t/p/w500
