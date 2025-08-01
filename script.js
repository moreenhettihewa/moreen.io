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
