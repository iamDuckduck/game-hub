import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "43593b215c124a66a640e3457c4fd95c",
  },
});
