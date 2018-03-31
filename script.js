// IN TREEHOUSE: scrape info from treehouse (do in each techdegree page and copy output into variables below)
// (function getTechdegreeInfo() {
//   const courses = Array.from(document.querySelectorAll(".degree-activity-meta"));
//   let courseInfo = []
//   courses.forEach(course =>
//     courseInfo.push(course.children[2].textContent, course.children[1].textContent)
//   )
//   const projects = Array.from(document.querySelectorAll(".card-box"));
//   let projectInfo = []
//   projects.forEach(project =>
//     projectInfo.push(project.children[2].textContent, project.children[3].children[0].textContent)
//   )
//   console.log("-----courses-----");
//   console.log(courseInfo);
//   console.log("-----projects-----");
//   console.log(projectInfo);
// })();

// techdegree info from treehouse
// ----- front end -----
let frontEndCourses = ["Introduction to HTML and CSS", "Course", "HTML Basics", "Course", "Share Your Techdegree Projects With GitHub Desktop", "Workshop", "CSS Basics", "Course", "Debugging CSS with Chrome DevTools", "Workshop", "CSS Layout Basics", "Course", "Responsive Images", "Course", "HTML Tables", "Course", "HTML Forms", "Course", "CSS Selectors", "Course", "CSS Flexbox Layout", "Course", "Introducing JavaScript", "Course", "JavaScript Basics", "Course", "JavaScript Loops, Arrays and Objects", "Course", "jQuery Basics", "Course", "Using jQuery Plugins", "Course", "Sass Basics", "Course", "CSS to Sass", "Course", "Modular CSS with Sass", "Course", "Build a Responsive Navigation with Flexbox", "Workshop", "Building Your Techdegree Resume", "Course", "Defining Variables with let and const", "Workshop", "Introducing Arrow Function Syntax", "Workshop", "Exploring JavaScript Conditionals", "Workshop", "JavaScript and the DOM", "Course", "HTML Video and Audio", "Course", "Create a Media Player with MediaElement.js", "Workshop", "DOM Scripting By Example", "Course", "CSS Transitions and Transforms", "Course", "SVG Basics", "Course", "Animating SVG with CSS", "Course", "SVG Workflow and Tools", "Workshop", "GitHub Basics", "Course", "Create Tooltips with CSS", "Workshop", "Using Local Storage with JavaScript", "Workshop", "Introducing Template Literals", "Workshop", "Debugging JavaScript in the Browser", "Workshop", "AJAX Basics", "Course", "Callback Functions in JavaScript", "Course", "Create a Fullscreen Slider with CSS", "Workshop", "React Basics", "Course", "Using Create React App", "Workshop", "React by Example", "Course", "React Router 4 Basics ", "Course", "Data Fetching in React ", "Workshop", "Web Accessibility Compliance", "Course", "Hosting a Website with GitHub Pages", "Workshop"];

let frontEndProjects = ["Personal Profile Page", "Customize a personal online profile by adding graphics, customizing text, and improving the look of a web page using Cascading Style Sheets, the formatting language of the web. Share your finished project on GitHub, a website used by teams of programmers to share and work on programming code. ", "Responsive Layout", "Designing web pages that look and function well on multiple screen sizes is an essential skill for a web developer. Using HTML, CSS, and responsive design, you'll create a mobile-first web page with a layout that adjusts to fit mobile phones, tablets and desktop displays.", "Online Registration Form", "Web forms appear everywhere online: forms allow users to order books, sign up for web sites, and post to Facebook. This project challenges you to build a responsive, mobile-first registration form using a variety of HTML form elements.", "Interactive Photo Gallery", "Interactive image galleries are a common feature of many websites, from photo sites to e-commerce applications. Use HTML, CSS and the popular programming language JavaScript to create an interactive, searchable gallery of photos.", "Build a Web Style Guide", "Sass is an important tool in a modern Front End Web Developer’s toolbox. It's used by many developers to make styling web pages with CSS easier and faster. Create a style guide using BEM style classes to quickly prototype and apply a consistent look across multiple pages of a site.", "Interactive Video Player", "Build an HTML5 video player using JavaScript and the HTML5 Video API. Video, and the interface used to control the video, is increasingly important for many different kinds of web applications, including web site landing pages, blogs, podcasts, product marketing and training. ", "Build a Game Show App", "In this project, you'll create a browser version of “Wheel of Success”, a word guessing game. You’ll use Javascript to come up with a random phrase that players will try to guess by entering different letters into the program. ", "SVG Animations", "Master Scaleable Vector Graphics. SVG graphics are quickly becoming one of the most widely used graphic formats on the web. Modernize the user interface of a web page by adding, styling and optimizing SVG graphics.", "Web App Dashboard", "Build an interactive dashboard for a web application using advanced web techniques including SVG graphics and JavaScript programming. The project involves creating tables, charts, graphics and other user interface components in a manner that promotes interactivity and usability.", "Use a Public API to Create a Front End for an Employee Directory", "Many sites — Twitter, Facebook, IMDB, and Wikipedia to name a few — offer a vast sea of data that you can access and display on your own web pages. Using JavaScript, you’ll create an employee directory by communicating with a third-party API (Application Programming Interface).", "React Flickr Gallery", "Create an image gallery using React and the Flickr API. You will build the gallery components, write the CSS and set up routing.", "Online Portfolio", "The final capstone project for the Front End Web Development Techdegree Program. Show off your skill and expertise in the tools and techniques you've learned in the Techdegree by building a professional portfolio to showcase your work."];

// ----- full stack -----
let fullStackCourses = ["Introducing JavaScript","Course", "Introduction to HTML and CSS", "Course", "JavaScript Basics", "Course", "JavaScript Loops, Arrays and Objects", "Course", "Share Your Techdegree Projects With GitHub Desktop", "Workshop", "Getting Started With ES2015", "Course", "JavaScript and the DOM", "Course", "Debugging JavaScript in the Browser", "Workshop", "CSS Basics", "Course", "jQuery Basics", "Course", "Using jQuery Plugins", "Course", "CSS Selectors", "Course", "HTML Forms", "Course", "DOM Scripting By Example", "Course", "Exploring JavaScript Conditionals", "Workshop", "Understanding this in JavaScript", "Workshop", "Object-Oriented JavaScript", "Course", "Callback Functions in JavaScript", "Course", "JavaScript Array Iteration Methods", "Course", "Git Basics", "Course", "HTTP Basics", "Course", "AJAX Basics", "Course", "Building Your Techdegree Resume", "Course", "Introducing ES2015", "Course", "Node.js Basics", "Course", "Build a Simple Dynamic Site with Node.js", "Course", "npm Basics", "Course", "How to Create and Distribute an npm Package", "Workshop", "GitHub Basics", "Course", "Express Basics", "Course", "Understanding Express Middleware", "Workshop", "Debugging Node Applications with Google Chrome", "Workshop", "Deploy a Node Application to Heroku", "Workshop", "JavaScript Unit Testing", "Course", "Using npm as a Task Runner", "Workshop", "Gulp Basics", "Course", "Using Gulps gulp-useref For a Full Build Pipeline", "Workshop", "React Basics", "Course", "React by Example", "Course", "Using Create React App", "Workshop", "React Router 4 Basics ", "Course", "Data Fetching in React ", "Workshop", "SQL Basics", "Course", "Modifying Data with SQL", "Course", "Reporting with SQL", "Course", "Understanding Promises in JavaScript", "Workshop", "Using SQL and Node.js with Sequelize", "Workshop", "Mongo Basics", "Course", "REST API Basics", "Course", "Build a REST API With Express", "Course", "User Authentication With Express and Mongo", "Course", "Understanding Closures in JavaScript", "Workshop", "Adding MongoDB to your Node App on Heroku", "Workshop", "Bootstrap 4 Basics", "Course", "OAuth Authentication With Passport", "Workshop"];

let fullStackProjects = ["Random Quote Generator", "Practice your knowledge of basic JavaScript syntax and data structures by building a Random Quote Generator, a program that displays a randomly selected quote each time the user clicks a button.", "Pagination & Content Filter", "Enhance the usability of a web page containing an overly long listing of students. Use JavaScript to dynamically divide the contents into pages and add a search function to list only the students that match that search.", "Build an Interactive Form", "Full Stack JavaScript developers create forms to collect information from users for nearly every website and application they build. For this project, you’ll use your skills to enhance a form so that it’s engaging, interactive, and easy to use.", "Tic-Tac-Toe", "Build a fun two-person Tic-Tac-Toe game. Use professional programming techniques to solve data-modeling problems, write elegant JavaScript code, and apply higher level concepts like object-oriented programming.", "Use a Public API to Create an Employee Directory", "Many sites — Twitter, Facebook, IMDB, and Wikipedia to name a few — offer a vast sea of data that you can access and display on your own web pages. Using JavaScript, you’ll create an employee directory by communicating with a third-party API (Application Programming Interface).", "Build a Content Scraper", "Build a data-mining application using Node.js. JavaScript isn't just for browsers — it can be used on web servers and even your own computer. Create a command-line application to read a web page, extract information, and store the data in a text file.", "Build a Twitter Interface", "Use Node.js and Express to retrieve information from your Twitter account. Use Twitter's REST API to communicate with Twitter, retrieve JSON data, and display the results using a HTML template.", "Using Gulp to Build a Front End Website", "Professional front end web developers need to be fast and productive. This means working quickly and efficiently to create sites that perform well. Implement a quick and efficient professional workflow using JavaScript, NPM and Node.", "Create a Gallery App with React", "Create an image gallery using React and the Flickr API. You will build the gallery components, write the CSS and set up routing.", "Build a Library Manager", "Working with databases — storing, retrieving, updating and deleting information — is an important software developer talent. Create a web application for searching, adding and updating items in a lending library, using JavaScript, Node.js, Express, and an Sqlite Database.", "Build a Course Rating API With Express", "In this project, you’ll use the popular web application framework Express, along with a  MongoDB database, to create the back end for a Course Rating Application which lets users create, edit and rate courses.", "Capstone Project: Build Your Own Web Application", "Build a complete web application in this Capstone project. Build all aspects of the site including an interactive front end. On the backend, manage data with a database, talk to APIs, and, host the site on the web so the world can see your finished, running web application."];

// ----- python -----
let pythonCourses = ["Python Basics", "Course", "Python Collections", "Course", "Python File IO", "Workshop", "CSV and JSON in Python", "Workshop", "Understanding Dunder Main", "Workshop", "Share Your Techdegree Projects With GitHub Desktop", "Workshop", "Object-Oriented Python", "Course", "Write Better Python", "Course", "Python Comprehensions", "Workshop", "Regular Expressions in Python", "Course", "Dates and Times in Python", "Course", "Using Databases in Python", "Course", "Python Testing", "Course", "Introduction to HTML and CSS", "Course", "HTTP Basics", "Course", "Flask Basics", "Course", "Build a Social Network with Flask", "Course", "Building Your Techdegree Resume", "Course", "Django Basics", "Course", "PyCharm", "Workshop", "Customizing Django Templates", "Course", "Django Forms", "Course", "Django ORM", "Course", "Customizing the Django Admin", "Course", "REST API Basics", "Course", "Using the Requests Library", "Workshop", "Flask REST API", "Course", "Django Class-based Views", "Course", "Django REST Framework", "Course", "Django Authentication","Course", "Deploying Django: PythonAnywhere", "Workshop", "Deploying Django: Heroku","Workshop", "Django Social Authentication", "Workshop"];

let pythonProjects = ["Build a Soccer League", "Build a tool to help a soccer coach divide 18 players into three well-balanced teams. You'll apply your knowledge of important Python data structures like lists and dictionaries to get it done.", "Secret Messages", "Ciphers are repeatable ways to encode a message. In this project, you will work with some popular ciphers and utilize Object Oriented Programming principles and techniques in Python to quickly and accurately encoded and then decode messages.", "Work Log", "Program a terminal application to prepare better timesheets for a company. The program writes and reads work data such as time spent on task, task completion date, and other information in a CSV file.", "Work Log with a Database", "Design and add a database to a Python program. Use an ORM to store and search data from a work log. Print detailed reports to the screen. You'll also add unit tests, a professional programming technique that helps ensure the quality of a program.", "Build a Personal Learning Journal with Flask", "Create a web application using HTML, CSS, and Flask, a popular framework for Python web development. The web application, a personal learning journal, lets a user add and edit journal entries and store the results in a database. The result is a useful, blog-like web application.", "Mineral Catalog", "Experience with many types of websites is key for the best learning and understanding of Python web development. In this project, you will build a site that displays information about various minerals (rocks) using the Django framework. The site will display a list of all of the minerals in a database, with additional details available by clicking on specific minerals. Building apps in two different web frameworks will teach you what is similar and different in each and equip you with the knowledge to know which tool to use for different types of projects.", "User Profile with Django", "User registration systems are part of every major website, from Facebook, to Twitter, to Amazon. Build a user registration system using Django, one of the most popular tools for building Python-drive web applications. ", "Filtering and Searching the Mineral Catalog", "Add features to a web application that catalogs minerals to build a fully-featured web site. Add the ability to search information and filter it to match user preferences. ", "Improve a Django Project", "Take a messy, buggy, badly tested Python code base and improve it. Start with a Django app and identify where it's broken and inefficient. Write and run tests, check for proper validation, analyze views and analyze database calls to improve the site. ", "Todo API with Flask", "Build a complete Python API (application programming interface) for a to-do list. An API is a back-end client that runs on the server and supplies information and runs tasks for the visual, front-end of a web site. Use Flask to create a database and REST API. ", "Pug or Ugh API", "Create a backend API for a fully coded front end web site. Build out the database and REST API backend using the Django REST Framework. You'll create database models, program routes, and use token-based authentication to control access to the API.", "Social Team Builder", "Build a full-blown Python web application in this Capstone project. The Django site lets users add projects, signup for team projects, and control who has access to which projects. Include a user registration system which lets users signup and login."];

//----- iOS -----
let iOSCourses = ["Swift Basics", "Course", "Swift Collections and Control Flow", "Course", "Functions in Swift ", "Course", "Share Your Techdegree Projects With GitHub Desktop", "Workshop", "Object-Oriented Swift", "Course", "Build a Simple iPhone App with Swift", "Course", "Git for iOS", "Workshop", "Enumerations and Optionals in Swift", "Course", "Protocols in Swift", "Course", "Error Handling in Swift", "Course", "Build a Vending Machine App in Swift", "Course", "Intermediate Swift", "Course", "API Design Guidelines in Swift", "Course", "Delegation in iOS", "Course", "Build an Interactive Story App with Swift", "Course", "Auto Layout Basics", "Workshop", "Programmatic Auto Layout", "Workshop", "Generics in Swift", "Course", "Closures in Swift", "Course", "Build a Weather App", "Course", "Introduction to Table Views", "Course", "Debugging for iOS", "Workshop", "Build An iTunes Search App", "Course", "Building Your Techdegree Resume", "Course", "Dependency Management with Carthage for iOS", "Workshop", "Build a Restaurant Reviews App", "Course", "Objective-C for Swift Developers", "Course", "iOS Memory Management", "Workshop", "Displaying API Data with Collection Views in Objective-C", "Course", "Custom Views in iOS", "Workshop", "Introduction to Core Data", "Course", "Dependency Management with CocoaPods for iOS", "Workshop", "iOS Improving Interaction with Animation", "Workshop", "Build an Image Viewer", "Course", "Build a Selfie App", "Course", "Unit Testing in iOS", "Course", "iOS Design Patterns", "Course", "Local Notifications in iOS", "Workshop", "iOS Submitting to the App Store", "Workshop"];

let iOSProjects = ["Soccer League Coordinator in Swift", "Build a tool to help a soccer coach divide 18 players into three well-balanced teams. You'll apply your knowledge of important Swift data structures like arrays and dictionaries to get it done.", "Enhancing a Quiz App in iOS", "As a developer, one of things you need to get comfortable with is working with code that other people have written. Improve an existing IOS quiz app to allow for more questions, improve the user interface, and customize the content to match your own interests. ", "Bout Time", "Games are one of the most popular types of mobile apps. Build an iOS game, called 'Bout Time, which challenges players to put historical events in the correct chronological order. You'll write all of the code, create the user interface, and even decide on the topic, theme and questions for the game.", "Amusement Park Pass Generator: Part 1", "Tackle a real-world business problem by helping an amusement park generate passes for various types of visitors. Project 4 is the Part 1 of a two-part project. In this project, you'll build the important behind-the-scenes programming for this app. In Part 2, you’ll add the user interface and expand the logic to accommodate more types of visitors.", "Amusement Park Pass Generator: Part 2", "In this project, you’ll build the user interface of an app that creates personalized passes for a variety of amusement park visitors  and test if a set of  business rules are enforced when the passes are swiped at various park locations.", "The API Awakens", "Harness the power of a third-party API (application programming interface) to provide data for an iOS app. Using tools like networking, concurrency, and JSON, you will build an app that retrieves information about people, vehicles, and starships from Star Wars by connecting with the Star Wars API.", "Movie Night for iOS", "Build an iOS app to help two friends select a movie to watch. The app will collect movie criteria from the two users and access the Movie Database API to provide a movie recommendation. You'll develop your own algorithm for choosing the movie based on the information you collect from the two users.", "Build a Full Objective-C App", "Being able to read and write both Swift and Objective-C code is important for iOS developers. Practice your new skills by building an app written entirely in Objective-C. The app will make use of features and constructs such as UICollectionViews, asynchronous networking, gestures, and transitions. It is a good opportunity to learn this legendary and widely used predecessor of Swift.", "Debug and Extend a Large Codebase", "Fix and improve a complex app written entirely in Objective-C. Practice skills which professional iOS developers use everyday like: debugging applications, deciphering unfamiliar code, and trying out new objects and frameworks. ", "Diary App", "Good apps usually have good data. Use the Core Data framework to create a diary app in Swift. Core Data is used to manage the relationships between data in classes and structs in an app. You will create the data layer and user interface, and work with Core Data to save user data. ", "Proximity Reminders", "Create an iOS app that provides location-specific reminders: have your phone remind you to pick up milk when you enter the market, or remind you to lock the door when you leave your house. Use Core Data to save the reminders and Core Location for geo-fencing and reminder notifications.", "NASApp", "In this final capstone project, build an iOS app in Swift that uses the NASA API to retrieve and display imagery from Mars or Earth. Use UICollectionViews, ScrollViews, Animation, Unit Testing and Error Handling to build a strong app for your portfolio. Show off your all your iOS development skills!!"];

//----- Start of comparison functionality
// select DOM elements & create empty variables needed
const main = document.querySelector("main");
const header = document.querySelector("header");
const chooseButtons = Array.from(document.querySelectorAll("button.td"));
const exploreButton = (document.querySelector("button.explore"));
const resetButton = (document.querySelector("button.reset"));
const courseTypeButton = document.querySelector("button.show-details");
const descriptionsButton = document.querySelector("button.show-descriptions");
let courseTd1 = document.querySelector("section.courses>ul.td-1");
let courseTd12 = document.querySelector("section.courses>ul.td-1-2");
let courseTd2 = document.querySelector("section.courses>ul.td-2");
let projectTd1 = document.querySelector("section.projects>ul.td-1");
let projectTd12 = document.querySelector("section.projects>ul.td-1-2");
let projectTd2 = document.querySelector("section.projects>ul.td-2");
let listArray = [courseTd1, courseTd2, courseTd12, projectTd1, projectTd2, projectTd12];
let td1Courses, td1Projects, td1, td2Courses, td2Projects, td2;
let comparison = {};

// choose which 2 courses to compare
const selectTD = function() {
  if (td1 == undefined) {
    if (chooseButtons.indexOf(this) === 0) {
      td1Courses = frontEndCourses;
      td1Projects = frontEndProjects;
      td1 = "front end";
    } else if (chooseButtons.indexOf(this) === 1) {
      td1Courses = fullStackCourses;
      td1Projects = fullStackProjects;
      td1 = "full stack JS";
    } else if (chooseButtons.indexOf(this) === 2) {
      td1Courses = pythonCourses;
      td1Projects = pythonProjects;
      td1 = "python";
    } else {
      td1Courses = iOSCourses;
      td1Projects = iOSProjects;
      td1 = "iOS";
    }
    this.removeEventListener("click", selectTD);
    this.classList.add("selected");
  } else if (td2 == undefined) {
    if (chooseButtons.indexOf(this) === 0) {
      td2Courses = frontEndCourses;
      td2Projects = frontEndProjects;
      td2 = "front end";
    } else if (chooseButtons.indexOf(this) === 1) {
      td2Courses = fullStackCourses;
      td2Projects = fullStackProjects;
      td2 = "full stack JS";
    } else if (chooseButtons.indexOf(this) === 2) {
      td2Courses = pythonCourses;
      td2Projects = pythonProjects;
      td2 = "python";
    } else {
      td2Courses = iOSCourses;
      td2Projects = iOSProjects;
      td2 = "iOS";
    }
    exploreButton.classList.remove("transparent");
    exploreButton.addEventListener("click", runComparisons);
    this.classList.add("selected");
    chooseButtons.forEach(item => item.removeEventListener("click", selectTD));
    document.querySelectorAll("button.td:not(.selected)").forEach(item => item.classList.add("transparent"));
  }
}

// --- work out the comparison between techdegrees
// ----- techdegree 1 -----
const makeTd1Courses = () => {
  let holderArray = [];
  td1Courses.forEach(function(item){
    if (td1Courses.indexOf(item) % 2 === 0) {
      holderObject = {
        techdegree: [`${td1}`],
        name: item,
      };
    } else {
      holderObject.type = item;
      holderArray.push(holderObject);
    }
  });
  td1Courses = holderArray;
  return td1Courses;
}

const makeTd1Projects = () => {
  let holderArray = [];
  td1Projects.forEach(function(item){
    if (td1Projects.indexOf(item) % 2 === 0) {
      holderObject = {
        techdegree: [`${td1}`],
        name: item,
      };
    } else {
      holderObject.description = item;
      holderArray.push(holderObject);
    }
  });
  td1Projects = holderArray;
  return td1Projects;
}

// ----- techdegree 2 -----
const makeTd2Courses = () => {
  let holderArray = [];
  td2Courses.forEach(function(item){
    if (td2Courses.indexOf(item) % 2 === 0) {
      holderObject = {
        techdegree: [`${td2}`],
        name: item,
      };
    } else {
      holderObject.type = item;
      holderArray.push(holderObject);
    }
  });
  td2Courses = holderArray;
  return td2Courses;
}

const makeTd2Projects = () => {
  let holderArray = [];
  td2Projects.forEach(function(item){
    if (td2Projects.indexOf(item) % 2 === 0) {
      holderObject = {
        techdegree: [`${td2}`],
        name: item,
      };
    } else {
      holderObject.description = item;
      holderArray.push(holderObject);
    }
  });
  td2Projects = holderArray;
  return td2Projects;
}

//  ----- compare the techdegrees -----
const compareTd1Td2 = () => {
  makeTd1Courses();
  makeTd1Projects();
  makeTd2Courses();
  makeTd2Projects();
  let courseComparison = td1Courses.slice();
  for (item of td2Courses) {
    if (courseComparison.findIndex(course => course.name === item.name) != -1) {
      let index = courseComparison.findIndex(course => course.name === item.name);
      courseComparison[index].techdegree.push(`${td2}`);
    } else {
      courseComparison.push(item);
    }
  }
  let projectComparison = td1Projects.slice();
  for (item of td2Projects) {
    if (projectComparison.findIndex(project => project.name === item.name) != -1) {
      let index = projectComparison.findIndex(project => project.name === item.name);
      projectComparison[index].techdegree.push(`${td2}`);
    } else {
      projectComparison.push(item);
    }
  }
  comparison.courseComparison = courseComparison;
  comparison.projectComparison = projectComparison;
  return comparison;
}

// --- display the comparison in the UI
const addListItems = () => {
    compareTd1Td2();
    courseTd1.childNodes[1].childNodes[1].innerText = `${td1}`;
    courseTd12.childNodes[1].childNodes[1].innerText = `${td1} & ${td2}`;
    courseTd2.childNodes[1].childNodes[1].innerText = `${td2}`;
    for (item of comparison.courseComparison) {
    let html = '<li><p class="course-name">%name%</p><p class="course-type hide">%type%</p></li>';
    html = html.replace("%name%", item.name);
    html = html.replace("%type%", item.type);
    if (item.techdegree.length > 1) {
      courseTd12.insertAdjacentHTML('beforeend', html);
    } else if (item.techdegree == td1) {
      courseTd1.insertAdjacentHTML('beforeend', html);
    } else if (item.techdegree == td2) {
      courseTd2.insertAdjacentHTML('beforeend', html);
    }
  }
  projectTd1.childNodes[1].childNodes[1].innerText = `${td1}`;
  projectTd12.childNodes[1].childNodes[1].innerText = `${td1} & ${td2}`;
  projectTd2.childNodes[1].childNodes[1].innerText = `${td2}`;
  for (item of comparison.projectComparison) {
    let html = '<li><p class="project-name">%name%</p><p class="project-desc hide">%desc%</p></li>';
    html = html.replace("%name%", item.name);
    html = html.replace("%desc%", item.description);
    if (item.techdegree.length > 1) {
      projectTd12.insertAdjacentHTML('beforeend', html);
    } else if (item.techdegree == td1) {
      projectTd1.insertAdjacentHTML('beforeend', html);
    } else if (item.techdegree == td2) {
      projectTd2.insertAdjacentHTML('beforeend', html);
    }
  }
}

// run the comparison when 'explore' is clicked
const runComparisons = () => {
  addListItems();
  exploreButton.removeEventListener("click",runComparisons);
  exploreButton.classList.add("transparent");
  main.classList.remove("hide");
  main.scrollIntoView({behavior: "smooth", block: "start"});
}

// reset button functionality
const reset = () => {
  for (list of listArray) {
    while (list.childNodes.length > 3) {
        list.removeChild(list.lastChild);
    }
  }
  for (button of chooseButtons) {
    button.addEventListener("click", selectTD);
    button.classList.remove("selected", "disabled", "transparent");
  }
  td1Courses = td1Projects = td1 = td2Courses = td2Projects = td2 = undefined;
  main.classList.add("hide");
  header.scrollIntoView({behavior: "smooth", block: "start"});
}

// --- show extra info in UI
// show course type
const showCourseType = () => {
  (document.querySelectorAll(".course-type")).forEach(item => item.classList.toggle("hide"));
}

// show project descriptions
const showProjectDescriptions = () => {
  (document.querySelectorAll(".project-desc")).forEach(item => item.classList.toggle("hide"));
}

// initialise!
(() => {
  chooseButtons.forEach(item => item.addEventListener("click", selectTD));
  exploreButton.addEventListener("click", runComparisons);
  resetButton.addEventListener("click", reset);
  courseTypeButton.addEventListener("click", showCourseType);
  descriptionsButton.addEventListener("click", showProjectDescriptions);
})();
