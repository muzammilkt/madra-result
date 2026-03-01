// Student data keyed by class number
const studentData = {
  1: [
    "Fathima kenza p",
    "Fathima bathool KK",
    "Najwa KT",
    "Ayisha midha M",
    "Muhammed chisthi P",
    "Muhammed rashid KP",
    "Muhammed misbah P",
    "Muhammed bujair KK",
    "Fathima hamda PA",
    "Fathima fariha K",
    "Aliya afreen P",
    "Sayyid Muhammed rashid",
    "Ziya Fathima KP"
  ],
  2: [
    "Fathima tahaniya KT",
    "Rahfa fawas KV",
    "Muhammed fadi KK",
    "Muhammed aziyan T",
    "Rayan saleem K",
    "Fathima labeeba KK",
    "Mashida Fathima KC",
    "Muhammed mishad KP"
  ],
  3: [
    "Ahmed mueenudheen P",
    "Ayisha NISMA P",
    "Abeeha Fathima U",
    "Ashiqa zainab KK",
    "Muhammed Bishr KK",
    "Ishal Fathima KM",
    "Muhammed adhil KT",
    "Muhammed shamlaj P",
    "Muhammed rabeeh K",
    "Abdul nafih KP",
    "fella Fathima M"
  ],
  4: [
    "Naja Fathima K",
    "Fathima janna KC",
    "Fathima sana P",
    "Fathima riya VT",
    "Muhammed razan"
  ],
  6: [
    "Muhammed rabeeh KK",
    "Sahila nasrin P",
    "Fathima lubaba P",
    "Shamil mubarak K",
    "Thanveer KT",
    "Midlaj P",
    "Nadva KT"
  ],
  8: [
    "Fathima mufliha K",
    "Subhana KP",
    "Fathima hadiya P",
    "Adhil muhammed KK",
    "Ramzan K",
    "Fathima riya KT"
  ],
  9: [
    "Fathima ilfa KK",
    "Naja Fathima KK",
    "Muhammed rinas T",
    "Jasil KT"
  ],
  11: [
    "Fidha Fathima K",
    "Muhammed minhaj P",
    "Fathima dilfa KP",
    "Fathima rinshana K"
  ]
};

const availableClasses = [1, 2, 3, 4, 6, 8, 9, 11];

// DOM references
const homeView = document.getElementById("home-view");
const classView = document.getElementById("class-view");
const resultView = document.getElementById("result-view");
const btnViewResult = document.getElementById("btn-view-result");
const btnBackHome = document.getElementById("btn-back-home");
const btnBackClass = document.getElementById("btn-back-class");
const classGrid = document.getElementById("class-grid");
const resultHeading = document.getElementById("result-heading");
const resultList = document.getElementById("result-list");

// Navigate between views with fade transition
function showView(target) {
  var current = document.querySelector(".view.active.visible");
  if (current) {
    current.classList.remove("visible");
    setTimeout(function () {
      current.classList.remove("active");
      target.classList.add("active");
      void target.offsetWidth;
      target.classList.add("visible");
      window.scrollTo(0, 0);
    }, 350);
  } else {
    target.classList.add("active");
    void target.offsetWidth;
    target.classList.add("visible");
  }
}

// Build class selection cards
function renderClassGrid() {
  classGrid.innerHTML = "";
  availableClasses.forEach(function (cls) {
    var card = document.createElement("button");
    card.className = "class-card";
    card.innerHTML =
      '<span class="class-number">' + cls + '</span>' +
      '<span class="class-label">Class</span>';
    card.setAttribute("aria-label", "View Class " + cls + " results");
    card.addEventListener("click", function () {
      showResult(cls);
    });
    classGrid.appendChild(card);
  });
}

// Build result list for a class
function showResult(cls) {
  var students = studentData[cls];
  if (!students) return;

  resultHeading.textContent = "Class " + cls;
  resultList.innerHTML = "";

  students.forEach(function (name, i) {
    var li = document.createElement("li");
    li.style.animationDelay = i * 0.04 + "s";
    var span = document.createElement("span");
    span.className = "student-name";
    span.textContent = name;
    li.appendChild(span);
    resultList.appendChild(li);
  });

  showView(resultView);
}

// Event listeners
btnViewResult.addEventListener("click", function () {
  showView(classView);
});
btnBackHome.addEventListener("click", function () {
  showView(homeView);
});
btnBackClass.addEventListener("click", function () {
  showView(classView);
});

// Initialize
renderClassGrid();

// Show home view on load
void homeView.offsetWidth;
homeView.classList.add("visible");
