import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f29a7f292e924937a5e18dc5d3e0fdd6",
  },
});
