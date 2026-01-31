const cleanYoutubeUrl = (url) => {
  if (!url) return "";

  let videoId = "";

  if (url.includes("youtube.com/shorts/")) {
    videoId = url.split("shorts/")[1].split("?")[0];
  } else if (url.includes("watch?v=")) {
    videoId = url.split("watch?v=")[1].split("&")[0];
  } else if (url.includes("m.youtube.com")) {
    videoId = url.split("v=")[1]?.split("&")[0];
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1].split("?")[0];
  } else if (url.includes("youtube.com/embed/")) {
    return url;
  }

  if (!videoId) return "";

  return `https://www.youtube.com/embed/${videoId}`;
};

export default cleanYoutubeUrl;
