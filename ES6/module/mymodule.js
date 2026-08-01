export let utext = "No more today";

export function changing(txt) {
  return (utext = txt);
}

const country = (a, b, utext) => `${a + b} times say that ${utext}`;

export { country as desh };
