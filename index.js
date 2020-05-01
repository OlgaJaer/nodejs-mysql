const express = require("express");
const path = require("path");
const sequelize = require("./utils/database");
const graphqlHTTP = require("express-graphql");
const schema = require("./graphql/schema");
const resolver = require("./graphql/resolver");
//const todoRoutes = require("./routes/todo");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
//app.use("/api/todo", todoRoutes);

app.use(
  graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
  })
);

app.use((req, res, next) => {
  res.sendFile("/index.html");
});

async function start() {
  try {
    await sequelize.sync(); //{force: true}
    app.listen(PORT);
  } catch (error) {
    console.log(error);
  }
}

start();
