const bcrypt = require("bcrypt");
const { User } = require("../db/models");

const userRouter = require("express").Router();

userRouter.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (name && email && password) {
    try {
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: { name, password: await bcrypt.hash(password, 10) },
      });
      if (created) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.password;
        req.session.user = sessionUser;
        return res.json(sessionUser);
      }
      return res.sendStatus(401);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const user = await User.findOne({
        where: { email },
      });
      if (await bcrypt.compare(password, user.password)) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.password;
        req.session.user = sessionUser;
        return res.json(sessionUser);
      }
      return res.sendStatus(401);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

userRouter.get("/check", (req, res) => {
  if (req.session?.user) {
    return res.json(req.session?.user);
  }
  return res.sendStatus(401);
});

userRouter.get("/logout", (req, res) => {
  req.session.destroy();
  res.clearCookie("sid_socket").sendStatus(200);
});

module.exports = userRouter;
