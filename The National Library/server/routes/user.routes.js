const ReserveController = require("../controllers/reserve.controller");
const BookController = require("../controllers/book.controller");
const UserController = require("../controllers/user.controller");

module.exports = app => {
  // User Routes
  app.get("/api/users/", UserController.findAllUsers);
  app.get("/api/users/:id", UserController.findOneSingleUser);
  app.put("/api/users/update/:id", UserController.updateExistingUser);
  app.post("/api/users/new", UserController.createNewUser);
  app.delete("/api/users/delete/:id", UserController.deleteAnExistingUser);

  // Book Routes
  app.get("/api/books/", BookController.findAllBooks);
  app.get("/api/books/:id", BookController.findOneSingleBook);
  app.put("/api/books/update/:id", BookController.updateExistingBook);
  app.post("/api/books/new", BookController.createNewBook);
  app.delete("/api/books/delete/:id", BookController.deleteAnExistingBook);

  // Reserve Routes
  app.get("/api/reserves/", ReserveController.findAllReserves);
  app.get("/api/reserves/:id", ReserveController.findOneSingleReserve);
  app.put("/api/reserves/update/:id", ReserveController.updateExistingReserve);
  app.post("/api/reserves/new", ReserveController.createNewReserve);
  app.delete("/api/reserves/delete/:id", ReserveController.deleteAnExistingReserve);
};