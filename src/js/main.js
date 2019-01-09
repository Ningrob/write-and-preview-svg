let defaultData = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" version="1.1">
    <path d="M0 0 h40 v10 h10 v60 h-50 z" />
    <path d="M42 0 l8 8 h-8 z" />
</svg>`;

renderSvg = () => {
  let svgString = document.getElementById("svgInput").value;
  document.querySelector(".previewWrapper").innerHTML = svgString;
};

//render default on ocument ready
document.addEventListener(
  "DOMContentLoaded",
  () => {
    document.getElementById("svgInput").value = defaultData;
    renderSvg();
  },
  false
);
