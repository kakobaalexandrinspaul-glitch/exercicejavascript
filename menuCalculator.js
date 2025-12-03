const choix = prompt(
    "Menu :\n" +
    "1. Addition\n" +
    "2. Soustraction\n" +
    "3. Multiplication\n" +
    "4. Division\n" +
    "0. Quitter\n" +
    "Entrez votre choix :"
  );
  
  if (choix === "0") {
      console.log("Programme terminé.");
  } else if (["1","2","3","4"].includes(choix)) {
      const num1 = parseFloat(prompt("Entrez le premier nombre :"));
      const num2 = parseFloat(prompt("Entrez le deuxième nombre :"));
      let resultat;
  
      if (choix === "1") {
          resultat = num1 + num2;
          console.log("Résultat : " + resultat);
      } else if (choix === "2") {
          resultat = num1 - num2;
          console.log("Résultat : " + resultat);
      } else if (choix === "3") {
          resultat = num1 * num2;
          console.log("Résultat : " + resultat);
      } else if (choix === "4") {
          if (num2 === 0) {
              console.log("Erreur : division par zéro !");
          } else {
              resultat = num1 / num2;
              console.log("Résultat : " + resultat);
          }
      }
  
  } else {
      console.log("Option invalide");
  }
  