const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.use(express.static("public"));
app.use(express.json());
app.set("view engine", "pug");
app.set("views", "./views");

// data
const studentsData = path.join(__dirname, "public", "users.json");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    message: "Welcome to the Home Page!",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
    message: "Welcome to the About Page!",
  });
});
app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact Page",
    message: "Welcome to the Contact Page!",
  });
});
app.get("/reg", (req, res) => {
  res.render("reg", {
    title: "Student Registration Page",
    message: "Welcome to the Student Registration Page!",
  });
});

app.get("/students", (req, res) => {
  const data = fs.readFileSync(studentsData, "utf-8");
  const students = JSON.parse(data);
  res.render("students", {
    title: "Students Page",
    message: "Welcome to the Students Page!",
    students,
  });
});
app.post("/submit", (req, res) => {
  // const { name, email, message } = req.body;
  // console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  res.render("success", {
    title: "Success",
    message: "Your message has been sent successfully!",
  });
});

app.get("/student/:id", (req, res) => {
  const data = fs.readFileSync(studentsData, "utf-8");
  const students = JSON.parse(data);
  const studentId = req.params.id;
  const student = students.find((s) => s.id === studentId);
  if (student) {
    res.render("studentDetails", { student });
  } else {
    res.status(404).send("students not found");
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
