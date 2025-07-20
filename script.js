function renderFrontClipContainer() {
  const frontClip = document.getElementById("clipFrontContainer");
  for (let i = 0; i < 13; i++) {
    const frontSideClipElement = document.createElement("div");
    frontSideClipElement.className = "front";
    const clip = document.createElement("div");
    clip.className = "clip";
    frontSideClipElement.appendChild(clip);
    frontClip.appendChild(frontSideClipElement);
  }
}

function renderBackClipContainer() {
  const backClip = document.getElementById("clipBackContainer");
  for (let i = 0; i < 13; i++) {
    const backSideClipElement = document.createElement("div");
    backSideClipElement.className = "back";
    const clip = document.createElement("div");
    clip.className = "clip";
    backSideClipElement.appendChild(clip);
    backClip.appendChild(backSideClipElement);
  }
}

function renderClipContainer() {
  renderFrontClipContainer();
  renderBackClipContainer();
}

function addPageHoles() {
  const pages = document.getElementsByClassName("page");
  for (let p = 0; p < pages.length; p++) {
    const pageHolesContainerElement = document.createElement("div");
    pageHolesContainerElement.className = "page__holes";
    for (let h = 0; h < 13; h++) {
      const holeElement = document.createElement("div");
      holeElement.className = "hole";
      pageHolesContainerElement.appendChild(holeElement);
    }

    pages[p].appendChild(pageHolesContainerElement);
  }
}

renderClipContainer();
addPageHoles();
