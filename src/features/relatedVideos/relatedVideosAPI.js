import axiosInstance from "../../utils/axios";

const getRelatedVideosApi = async ({ id, tags }) => {
  const limit = 5;
  let queryString =
    tags?.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${id}&_limit=${limit}`
      : `id_ne=${id}&_limit=${limit}`;

  const response = await axiosInstance.get(`/videos?${queryString}`);
  return response.data;
};

export default getRelatedVideosApi;
