import axios from "axios";

const url= "https://corona.lmao.ninja/v2/countries";
const url2 = "https://corona.lmao.ninja/v2/jhucsse";

//axios
export const country_api = async () => {
  let response;
  try {
    response = await axios.get(url);
  } catch (error) {
    console.log(`Failed to fetch countries: ${error.message}`, error);
    return;
  }
  const { data } = response;
  const hasData = Array.isArray(data) && data.length > 0;
  if (!hasData) return;
  return data;
};

//axios
export const state_api = async () => {
  let response;
  try {
    response = await axios.get(url2);
  } catch (error) {
    console.log(`Failed to fetch countries: ${error.message}`, error);
    return;
  }
  const { data } = response;
  const hasData = Array.isArray(data) && data.length > 0;
  if (!hasData) return;
  return data;
};
