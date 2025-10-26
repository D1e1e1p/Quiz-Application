const quizData = [
  // ===== HTML QUESTIONS =====
  { q: "1. What does HTML stand for?", a: ["HyperText Markup Language", "HighText Machine Language", "HyperTransfer Markup Language", "None"], correct: 0 },
  { q: "2. Which tag is used for inserting an image?", a: ["<img>", "<picture>", "<src>", "<image>"], correct: 0 },
  { q: "3. Choose the correct HTML tag for the largest heading.", a: ["<h6>", "<h1>", "<heading>", "<head>"], correct: 1 },
  { q: "4. Which attribute specifies an alternate text for an image?", a: ["title", "alt", "src", "longdesc"], correct: 1 },
  { q: "5. What is the correct HTML element for inserting a line break?", a: ["<lb>", "<break>", "<br>", "<hr>"], correct: 2 },
  { q: "6. Which HTML element defines the title of a document?", a: ["<meta>", "<title>", "<head>", "<header>"], correct: 1 },
  { q: "7. Which tag is used to create a hyperlink?", a: ["<link>", "<a>", "<href>", "<ul>"], correct: 1 },
  { q: "8. How can you make a numbered list?", a: ["<dl>", "<ol>", "<ul>", "<list>"], correct: 1 },
  { q: "9. What does the <p> tag define?", a: ["Paragraph", "Picture", "Plain text", "Preformatted text"], correct: 0 },
  { q: "10. Which HTML element is used to play video files?", a: ["<video>", "<media>", "<movie>", "<play>"], correct: 0 },

  // ===== CSS QUESTIONS =====
  { q: "11. What does CSS stand for?", a: ["Creative Style Sheets", "Colorful Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"], correct: 2 },
  { q: "12. Which property changes text color?", a: ["font-color", "text-color", "color", "background-color"], correct: 2 },
  { q: "13. How do you select an element with id 'demo'?", a: [".demo", "#demo", "*demo", "demo"], correct: 1 },
  { q: "14. Which property controls text size?", a: ["font-size", "text-size", "font-style", "size"], correct: 0 },
  { q: "15. How do you make text bold?", a: ["font-weight: bold;", "style: bold;", "font: bold;", "text-decoration: bold;"], correct: 0 },
  { q: "16. Which property adds background color?", a: ["background", "background-color", "bgcolor", "color-background"], correct: 1 },
  { q: "17. What value of position makes an element stick to the top when scrolling?", a: ["absolute", "sticky", "fixed", "relative"], correct: 1 },
  { q: "18. How do you center text?", a: ["text-align: center;", "align: center;", "center-text: yes;", "font-align: center;"], correct: 0 },
  { q: "19. Which CSS property adds shadow to text?", a: ["text-shadow", "font-shadow", "shadow", "text-outline"], correct: 0 },
  { q: "20. How do you make a border rounded?", a: ["border-radius", "border-curve", "border-round", "radius-border"], correct: 0 },

  // ===== JS QUESTIONS =====
  { q: "21. What does JS stand for?", a: ["JavaSyntax", "JavaScript", "JustScript", "JScript"], correct: 1 },
  { q: "22. Which symbol is used for comments in JS?", a: ["//", "<!-- -->", "#", "/* */"], correct: 0 },
  { q: "23. Which keyword declares a variable?", a: ["var", "let", "const", "All of the above"], correct: 3 },
  { q: "24. What is the correct syntax to output 'Hello World'?", a: ["print('Hello')", "document.write('Hello World')", "echo 'Hello'", "console.log('World')"], correct: 1 },
  { q: "25. Which method converts JSON to an object?", a: ["JSON.parse()", "JSON.stringify()", "parse.JSON()", "JSON.toObject()"], correct: 0 },
  { q: "26. Which operator is used to assign a value?", a: ["-", "=", "==", "==="], correct: 1 },
  { q: "27. What will typeof [] return?", a: ["object", "array", "list", "undefined"], correct: 0 },
  { q: "28. Which function adds an element at the end of an array?", a: ["push()", "pop()", "shift()", "concat()"], correct: 0 },
  { q: "29. How can you write a function in JS?", a: ["function myFunc()", "def myFunc()", "create myFunc()", "method myFunc()"], correct: 0 },
  { q: "30. What keyword stops a loop?", a: ["stop", "exit", "break", "return"], correct: 2 },

  // ===== MIXED =====
  { q: "31. Which tag is used to embed JS code in HTML?", a: ["<js>", "<script>", "<code>", "<javascript>"], correct: 1 },
  { q: "32. How do you link an external CSS file?", a: ["<link rel='stylesheet' href='style.css'>", "<style src='style.css'>", "<css href='style.css'>", "<stylesheet link='style.css'>"], correct: 0 },
  { q: "33. How do you link an external JS file?", a: ["<js src='app.js'>", "<script src='app.js'>", "<javascript src='app.js'>", "<file src='app.js'>"], correct: 1 },
  { q: "34. In CSS, which unit is relative to the parent font size?", a: ["em", "px", "pt", "%"], correct: 0 },
  { q: "35. Which method is used to select an element by id in JS?", a: ["getElementById()", "querySelector()", "getId()", "selectId()"], correct: 0 },
  { q: "36. How do you create a comment in HTML?", a: ["// comment", "<!-- comment -->", "# comment", "/* comment */"], correct: 1 },
  { q: "37. Which tag defines a table row?", a: ["<row>", "<tr>", "<td>", "<th>"], correct: 1 },
  { q: "38. Which CSS property makes an element invisible but keeps its space?", a: ["visibility: hidden;", "display: none;", "opacity: 0;", "z-index: -1;"], correct: 0 },
  { q: "39. Which HTML tag defines a checkbox?", a: ["<check>", "<checkbox>", "<input type='checkbox'>", "<option type='check'>"], correct: 2 },
  { q: "40. What does DOM stand for?", a: ["Document Object Model", "Data Object Management", "Document Oriented Model", "Display Object Method"], correct: 0 },
  { q: "41. Which event occurs when the user clicks an HTML element?", a: ["onmouseover", "onchange", "onclick", "onmouseclick"], correct: 2 },
  { q: "42. Which property sets the space inside an element’s border?", a: ["margin", "padding", "spacing", "border-gap"], correct: 1 },
  { q: "43. How do you make a comment in CSS?", a: ["/* comment */", "// comment", "<!-- comment -->", "# comment"], correct: 0 },
  { q: "44. Which HTML tag is used to define a footer?", a: ["<bottom>", "<footer>", "<foot>", "<section>"], correct: 1 },
  { q: "45. Which CSS property controls the order of overlapping elements?", a: ["z-index", "index", "position", "layer"], correct: 0 },
  { q: "46. Which method removes the last element of an array?", a: ["pop()", "shift()", "splice()", "remove()"], correct: 0 },
  { q: "47. Which input type is used for email in HTML5?", a: ["text", "mail", "email", "input-email"], correct: 2 },
  { q: "48. How do you check equality in JS (type + value)?", a: ["===", "==", "=", "equals"], correct: 0 },
  { q: "49. Which CSS property is used for changing font?", a: ["font-family", "font-type", "font-style", "text-font"], correct: 0 },
  { q: "50. Which tag defines a navigation link section?", a: ["<nav>", "<menu>", "<navigation>", "<links>"], correct: 0 },
];

let current = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const resultEl = document.getElementById('result');

function showQuestion() {
  const currentQ = quizData[current];
  questionEl.textContent = currentQ.q;
  optionsEl.innerHTML = '';
  nextBtn.disabled = true;
  currentQ.a.forEach((option, i) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.classList.add('option-btn');
    btn.onclick = () => selectAnswer(btn, i);
    li.appendChild(btn);
    optionsEl.appendChild(li);
  });
}

function selectAnswer(btn, i) {
  const correct = quizData[current].correct;
  const allButtons = document.querySelectorAll('.option-btn');
  allButtons.forEach(b => b.disabled = true);
  if (i === correct) {
    btn.classList.add('correct');
    score++;
  } else {
    btn.classList.add('wrong');
    allButtons[correct].classList.add('correct');
  }
  nextBtn.disabled = false;
}

function showResult() {
  document.getElementById('question-container').style.display = 'none';
  resultEl.style.display = 'block';
  resultEl.textContent = `🎯 You scored ${score} out of ${quizData.length}!`;
}

nextBtn.onclick = () => {
  current++;
  if (current < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
};

showQuestion();

