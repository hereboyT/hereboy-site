// Respect the visitor's reduced-motion setting: show the poster and offer controls instead.
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll("video").forEach(function (video) {
    video.removeAttribute("autoplay");
    video.pause();
    video.currentTime = 0;
    video.controls = true;
  });
}
