export const trending = (req, res) => res.render("home");
export const search = (req, res) => res.send("Search");

export const watch = (req, res) => {
  res.send(`Watch Video #${req.params.id}`);
};
export const edit = (req, res) => {
  res.send("Edit");
};
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  res.send("Delete Video");
};
