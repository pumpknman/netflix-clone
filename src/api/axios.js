import axios from "axios";

const instance = axios.create({
   baseURL: "https://api.themoviedb.org/3",
   params: {
       api_key: "a32540f70deb350a188eb7321c6a3739",
       language: "ko-KR",
   },
});

export default instance;