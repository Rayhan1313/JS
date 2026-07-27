const outer = document.querySelector(".outer");
const inner = document.querySelector(".inner");

outer.addEventListener(
  "click",
  function () {
    console.log("Outer div called");
  },
  true,
);

inner.addEventListener(
  "click",
  function () {
    console.log("Inner Div is called");
  },
  false,
);

/*
child click korle by deafault first a call  hoy child then parent karon default false thake,  ar child a true  korle parent aga  call hobe then child
*/

/**
 *
 * Just parent true korle child a click korle first pafrent call hobe
 * kisu set na korle ba flase dile child first call hobe then parent.
 *
 *
 *
 * event propagation a --method duita
 * bubbling ---> child first then parent
 * capturing --> parent first then child
 */
