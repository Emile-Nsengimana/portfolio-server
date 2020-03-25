import express from "express";
var graphqlHTTP = require("express-graphql");
import { schema } from "./schema/schema";

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);
app.use("/admin", (req, res) => {
  return res.send("Hello Admin");
});

app.listen(3000, () => console.log("Server started ..."));
