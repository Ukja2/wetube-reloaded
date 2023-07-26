const fakeUser = {
  username:"Lee", 
  loggedIn:false,
}




export const trending = (req, res) => res.render("Home", {pageTitle: "Home", fakeUser:fakeUser});
export const see = (req, res) => res.render("watch");//파일명은 반드시 소문자로, 파일에 띄어쓰기 금지//
export const edit = (req,res) => res.render("edit")
export const search = (req,res) => res.send("Search");
export const upload = (req,res) => res.send("Upload");
export const deleteVideo = (req,res) => {
  return res.send("Delte Video");
};
