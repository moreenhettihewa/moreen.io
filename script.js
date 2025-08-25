onRippleMove()
onProjectCardHover();
scrollIntoProjectSection();

function onRippleMove() {
  const target = document.querySelector(".ripple-frame");
  const ripple = document.querySelector(".ripple");

  target.addEventListener("mousemove", (e) => {
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.display = "inline";
    ripple.style.width = ripple.style.height = "20px";
    ripple.style.transform = "translate(-50%, -50%)";
    ripple.style.animation = "animatedRipple 0.75s ease-out infinite";
    ripple.style.opacity = "1";
  });

  target.addEventListener("mouseleave", () => {
    ripple.style.transform = "translate(-50%, -50%) scale(0)";
    ripple.style.opacity = "0";
    ripple.style.display = "none";
  });
}

function onProjectCardHover() {
  document.querySelectorAll(".card").forEach((container) => {
    const span = container.querySelector("span");

    container.addEventListener("mouseenter", () => {
      const left = document.createElement("div");
      left.className = "left-arrow left-1-arrow";

      const right = document.createElement("div");
      right.className = "right-arrow right-1-arrow";
      
      container.insertBefore(left, span);
      container.insertBefore(right, span.nextSibling);
    });

    container.addEventListener("mouseleave", () => {
      container
        .querySelectorAll(".left-arrow, .right-arrow")
        .forEach((el) => el.remove());
    });
  });
}

function onClickProject(id) {
 
  const projectDataHtml = projectDocPath(id);
  fetch(projectDataHtml)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("loadingContent").innerHTML = html;
  });

  const modalElement = document.getElementById("projectModal");
  modalElement.style.display = "block";

  const closeModalElement = document.getElementById("closeModal");

  closeModalElement.onclick = () => {
    modalElement.style.display = "none";
  };

  window.onclick = (event) => {
    if (event.target == modalElement) {
      modalElement.style.display = "none";
    }
  };
}

function projectDocPath(id) {
  switch (id) {
    case 1:
      return "pages/dynamicslk.html";
    case 2:
      return "pages/chanuka-portfolio.html";
    case 3:
      return "pages/my-notebook.html";
    case 4:
      return "pages/moreen-portfolio.html";
    case 5:
      return "pages/fdm-travel.html";
    case 6:
      return "pages/travelbox-trip.html";
    case 7:
      return "pages/pro-payroll.html";
    default:
      return null;
  }
}

function scrollIntoProjectSection(){
  const projects = document.querySelector('.projects');
let triggered = false;

window.addEventListener('wheel', (e) => {
  // Only trigger when scrolling down
  if (e.deltaY > 0 && !triggered && window.scrollY < projects.offsetTop) {
    triggered = true;

    // Scroll so bottom of projects is aligned with viewport bottom
    const scrollTarget = projects.offsetTop + projects.offsetHeight - window.innerHeight;

    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth'
    });

    e.preventDefault();
  }

  // Reset trigger when scrolling up
  if (e.deltaY < 0) {
    triggered = false;
  }
}, { passive: false });
}

function saveFile(url, filename) {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename || "file-name";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function downloadCV() {
    const file = "./resources/europassCV.pdf";
    const url = window.URL.createObjectURL(file);
    saveFile(url, "myFile.txt");
    window.URL.revokeObjectURL(url);
}
