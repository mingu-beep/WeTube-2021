export const trending = (req, res) => {
  const videos = [
    {
      title: "Video #1",
      rating: 4,
      comments: 2,
      createdAt: "2 minutes age",
      views: 59,
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
  return res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => res.send("Search");

export const watch = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");
