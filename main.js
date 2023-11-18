let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #754158;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #754158;">Me gusta la tecnología...</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
