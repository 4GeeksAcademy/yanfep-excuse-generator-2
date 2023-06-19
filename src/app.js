/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "racoo", "dog", "driver", "comedian", "pincone"];
  let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  let possetion = ["homework", "toe", "car", "shoe"];
  let where = ["on the street", "in my house", "in my driveway"];

  function generateExcuse(array1, array2, array3, array4, array5) {
    let proIndx = Math.floor(Math.random() * array1.length);
    let subjIndx = Math.floor(Math.random() * array2.length);
    let actionIndex = Math.floor(Math.random() * array3.length);
    let possetionIndex = Math.floor(Math.random() * array4.length);
    let whereIndex = Math.floor(Math.random() * array5.length);

    let var1 = pronoun[proIndx];
    let var2 = subject[subjIndx];
    let var3 = action[actionIndex];
    let var4 = possetion[possetionIndex];
    let var5 = where[whereIndex];

    let concatenacionArray =
      var1 + " " + var2 + " " + var3 + " " + var4 + " " + var5;

    return concatenacionArray;
  }

  let concatenacionFinal = generateExcuse(
    pronoun,
    subject,
    action,
    possetion,
    where
  );

  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = concatenacionFinal;
  });
  console.log("Hello Rigo from the console! ");
};
