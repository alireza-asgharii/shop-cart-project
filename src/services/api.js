import axios from "axios";

const getData = async () => {
  const data = await axios.get("/products");
  return data;
};

export { getData };
