import refs from "./refs";
//request to API
import axios from "axios";

export default class FilmsTrend {
  constructor(urn) {
    this.urn = urn;
  }

  fetchingData() {
    axios(this.urn).then((data) => console.log(data));
  }

  init() {
    this.fetchingData();
  }
}
