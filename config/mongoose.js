const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://ankitapathak837:nzfF7VMS7f0Gesas@cluster0.gjsw5oz.mongodb.net/placementcell01?retryWrites=true&w=majority",
    {
      //   useCreateIndex: true,
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.log("No connection");
  });
