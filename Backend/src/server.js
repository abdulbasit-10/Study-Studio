require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected");
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
})
.catch(err => {
  console.error("DB connection error", err);
  process.exit(1);
});
