import axios from "axios";

export const useAxios = () => {
  const post = async (data: any) => {
    try {
      const response = await axios.post("https://dummyjson.com/posts/add", {
        title: `Name: ${data.name}, Last Name: ${data.lastName}`,
        userId: 5,
      });
      console.log(response);
      return response;
    } catch (error) {
      alert("post went wrong!");
    }
  };

  const fetch = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      console.log(response);
      return response;
    } catch (error) {
      alert("fetch went wrong");
    }
  };

  return {
    post,
    fetch,
  };
};
