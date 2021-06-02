const videos = [
  {
    title: "Video #1",
    rating: 4,
    comments: 2,
    createdAt: "2 minutes age",
    views: 1,
    id: 1,
  },
  {
    title: "Video #2",
    rating: 2,
    comments: 86,
    createdAt: "2 minutes age",
    views: 5469,
    id: 2,
  },
  {
    title: "Video #3",
    rating: 3,
    comments: 23,
    createdAt: "2 minutes age",
    views: 129,
    id: 3,
  },
  {
    title: "Video #4",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes age",
    views: 239,
    id: 4,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};

export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching : ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing : ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  // here we will add a video to the videos array.
  const { title } = req.body;
  const newVideo = {
    title,
    rating: 0,
    comments: 0,
    createdAt: "just now",
    views: 0,
    id: videos.length + 1,
  };

  videos.push(newVideo);
  return res.redirect("/");
};
