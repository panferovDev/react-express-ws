const { User, Post } = require("../db/models");
const upload = require("../utils/multerSettings");
const isAuth = require("../middlewares")
const fs = require("fs").promises;

const postRouter = require("express").Router();

postRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const users = await Post.findAll({
        include: User,
      });
      res.json(users);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  })
  .post(upload.single("file"), async (req, res) => {
    const { filename } = req.file;
    const { title, body } = req.body;
    if (!title || !body) {
      return res.sendStatus(400);
    }
    try {
      const post = await Post.create({
        title,
        body,
        pic: filename || null,
        user_id: req.session.user.id,
      });
      res.json(post);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });

postRouter.route("/:id").delete(isAuth, async (req, res) => {
  try {
    const post = await Post.findOne({
      where: {
        id: req.params.id,
        user_id: req.session.user.id,
      },
    })

    fs.unlink(`./public/img/${post.pic}`)
    .catch((e) => console.log(e));
    
    if (!post) {
      return res.sendStatus(404);
    }
    await post.destroy();
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = postRouter;
