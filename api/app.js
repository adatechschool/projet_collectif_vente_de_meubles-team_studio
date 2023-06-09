require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors"); //newly installed
var imagesRouter = require("./routes/images");

var furnituresRouter = require("./routes/furnitures");
var usersRouter = require("./routes/users");
var registrationRouter = require("./routes/registration");
var loginRouter = require("./routes/login");
var imagesRouter = require("./routes/images");
var profileRouter = require("./routes/profile");
var logoutRouter = require("./routes/logout");
var furnitureIdRouter = require("./routes/furnitureId");
var furnitureTypeRouter = require("./routes/furnituresType");
var adminRouter = require("./routes/admin");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.set("trust proxy", 1);


app.use(logger("dev"));
app.use(express.json()); //parse incoming Request Object as a JSON Object
app.use(express.urlencoded({ extended: true })); //parse incoming Request Object if object, with nested objects, or generally any type.
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
); //Newly added
app.use("/images/:imageName", imagesRouter);

app.use("/furnitures", furnituresRouter);
app.use("/users", usersRouter);
app.use("/registration", registrationRouter);
app.use("/login", loginRouter);
app.use("/images/:imageName", imagesRouter);
app.use("/admin", adminRouter);
app.use("/", furnitureIdRouter);
app.use("/", furnitureTypeRouter);
app.use("/profile", profileRouter);
app.use("/logout", logoutRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
