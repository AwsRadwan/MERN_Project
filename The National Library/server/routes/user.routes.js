const Users = require('../controllers/user.controllers');
const ReserveController = require("../controllers/reserve.controller");
const BookController = require("../controllers/book.controller");

const { authenticate } = require('../config/jwt.config');


module.exports = app => {
  app.post("/api/register", Users.register);
  app.post("/api/login", Users.login);
  app.get("/api/users", Users.getAll);
  app.get("/api/get/:id", Users.findUser);
  app.get("/api/logout", Users.logout);



  // Book Routes
  app.get("/api/books/", BookController.findAllBooks);
  app.get("/api/books/:id", BookController.findOneSingleBook);
  app.put("/api/books/update/:id", BookController.updateExistingBook);
  app.put("/api/books/addreserve/:id", BookController.updateExistingBookReserve);
  app.put("/api/books/addcomment/:id", BookController.updateExistingBookComment);
  app.post("/api/books/new", BookController.createNewBook);
  app.delete("/api/books/delete/:id", BookController.deleteAnExistingBook);

  // Reserve Routes
  app.get("/api/reserves/", ReserveController.findAllReserves);
  app.get("/api/reserves/:id", ReserveController.findOneSingleReserve);
  app.put("/api/reserves/update/:id", ReserveController.updateExistingReserve);
  app.post("/api/reserves/new", ReserveController.createNewReserve);
  app.delete("/api/reserves/delete/:id", ReserveController.deleteAnExistingReserve);
};