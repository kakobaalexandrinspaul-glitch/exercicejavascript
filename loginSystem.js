const SECRET = "12345";

const password = prompt("Entrez votre mot de passe :");

if (password === SECRET) {
    console.log("Accès accordé");
} else {
    console.log("Mot de passe incorrect");
}