function generateExcuse() {
  let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro','Mi padre','Mi madre','Mi hermana'];
  let action = ['se comió', 'se orinó', 'aplastó', 'rompió','vendió'];
  let what = ['mi tarea', 'mi telefono', 'el coche', 'a mi hermano','mi cartera' ];
  let when = ['antes de la clase', 'cuando estaba durmiendo', 'mientras hacía ejercicio', 'durante mi almuerzo', 'mientras yo estaba jugando'];
  let excuse = `${who[Math.floor(Math.random() * who.length)]} ${action[Math.floor(Math.random() * action.length)]} ${what[Math.floor(Math.random() * what.length)]} ${when[Math.floor(Math.random() * when.length)]}.`;

document.getElementById("excuse").innerHTML = excuse;
}