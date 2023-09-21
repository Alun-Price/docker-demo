const app = require("express")();

// exposes an API endpoint that sends back the message docker is easy
app.get("/", (req, res) => res.json({ message: "Docker is easy 🐳" }));

// expose our app using the port environment variable
const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`app listening on http://localhost:${port}`)
);
