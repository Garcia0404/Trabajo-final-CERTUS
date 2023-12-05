let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('No te pierdas nuestros artículos semanales')
  .pauseFor(200)
  .deleteChars(10)
  .start();

function enviarmensaje() {
  alert("Tu mensaje ha sido enviado con éxito")
}


