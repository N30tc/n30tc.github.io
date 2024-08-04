window.addEventListener("load", rainLetters);

function rainLetters() {
    var nodes = document.querySelectorAll(".letters");

    for (let i = 0; i < nodes.length; i++) {
        // On encapsule, chaque lettre... à chaque passage de la boucle principale (avec innerText)...
        let text = nodes[i].innerText;

        // Puis, on prépare l'animation de chaque élément (pré-encapsulé)...
        for (let i2 = 0; i2 < text.length; i2++) {

            // Condition, qui sera vérifiée si c'est bien une lettre et non un espace blanc...
            if (text[i2] != " ") {
                let node = document.createElement("span");

                node.style.left = (Math.random() * 90) + "vw";
                node.style.animationDelay = i2 + "s";

                // La propriété 'length' / la variable 'text' est le nombre total de caractères sur le texte original (ici = 403)...
                // node.innerText = text.length;

                // On remplit la variable node, par chacune des lettres... 1 x lettre / boucle, lorsque la condition est vérifiée...
                node.innerText = text[i2];

                // La variable i2, s'incrémente de 1 unité, à chaque seconde... à chaque fois que la seconde boucle est lancée...
                // node.innerText = i2;

                // Chaque lettre dans le texte original, est suivi d'un élément 'node' qui contient l'Objet qui lui correspond...
                // ...en l'occurence, ici : sa propre lettre / son propre morceau qui lui appartient...
                nodes[i].appendChild(node);
            }
        }
    }
}