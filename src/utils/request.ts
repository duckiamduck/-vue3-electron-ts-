import axios from "axios";

const requests = axios.create({
  baseURL: "https://api.paugram.com/wallpaper/",
})

export default requests;
