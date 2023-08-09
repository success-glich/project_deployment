import { app } from "./app.js";

app.get("/", (req, res) => {
  res.send("<h1>Working Fine</h1>");
});

app.route("/users").get((req, res, next) => {
  {
    res.status(200).json({
      users: [],
      success: true,
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is working on port ${process.env.PORT}`);
});
