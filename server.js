const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.set("view engine", "pug");
app.set("views", "./views");

// data
const students = [
  {
    id: "101",
    name: "Shubham Singh",
    age: 22,
    course: "MERN STACK",
  },
  {
    id: "102",
    name: "Aarav",
    age: 21,
    course: "Java Full Stack",
  },
  {
    id: "103",
    name: "Shreya Singh",
    age: 22,
    course: "Python",
  },
  {
    id: "104",
    name: "Aditya Shrivastava",
    age: 25,
    course: "Ai & ML",
  },
  {
    id: "105",
    name: "Krishna Jha",
    age: 27,
    course: "Data Science",
  },
];

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

app.get("/students", (req, res) => {
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
