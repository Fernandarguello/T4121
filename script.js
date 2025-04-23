let people = [
    {
      name: "Carlos",
      traits: ["Cree que esperar al matrimonio es tonto", "No le interesa Dios", "Se burla de tus creencias"],
      image: "https://unsplash.it/200/200?random=1",
      verse: "2 Corintios 6:14 – No se unan en yugo desigual con los incrédulos."
    },
    {
      name: "Ana",
      traits: ["Te pide esconder cosas a tus padres para que no ´piensen mal´", "Dice que quiere servir a Dios, pero nunca se compromete a nada", "Quiere una relación contigo pero no con Dios"],
      image: "https://unsplash.it/200/200?random=2",
      verse: "2 Corintios 6:14 – No se unan en yugo desigual con los incrédulos."
    },
    {
      name: "Luis",
      traits: ["Ora contigo y por ti", "Te inspira a servir", "Busca una relación con propósito"],
      image: "https://unsplash.it/200/200?random=3",
      verse: "Gálatas 5:22 – El fruto del Espíritu es amor, gozo, paz, paciencia..."
    },
    {
        name: "Isabel",
        traits: ["Se burla de ti frente a los demás", "No quiere que tengas más amigos", "Solo está contigo cuando está sola"],
        image: "https://unsplash.it/200/200?random=4",
        verse: "Gálatas 5:22 – El fruto del Espíritu es amor, gozo, paz, paciencia..."
      },
      {
        name: "Araceli",
        traits: ["Se queda hablando hasta muy noche contigo, pero a veces te manda versículos ", "Dice que no necesitas tanto a Dios, que la tienes a ella", "Te dice: Si no haces esto conmigo, buscaré a alguien que sí lo haga"],
        image: "https://unsplash.it/200/200?random=8",
        verse: "Gálatas 5:22 – El fruto del Espíritu es amor, gozo, paz, paciencia..."
      },
      {
        name: "Federico",
        traits: ["Dice que te ama, pero no respeta tus límites ", "Dice que tú lo puedes cambiar", "Sabe mucho de la Biblia, pero no tiene frutos "],
        image: "https://unsplash.it/200/200?random=5",
        verse: "Gálatas 5:22 – El fruto del Espíritu es amor, gozo, paz, paciencia..."
      },
      {
        name: "Lucía",
        traits: ["Busca crecer espiritualmente junto contigo", "Tiene un compromiso con Dios antes que contigo", "Te ama con hechos, no solo palabras"],
        image: "https://unsplash.it/200/200?random=6",
        verse: "Gálatas 5:22 – El fruto del Espíritu es amor, gozo, paz, paciencia..."
      },
      {
        name: "Pepe",
        traits: ["Se alegra de tus logros", "Te confronta con la verdad, no con chismes", "Te empuja a acercarte más a Dios"],
        image: "https://unsplash.it/200/200?random=7",
        verse: "Gálatas 5:22 – El fruto del Espíritu es amor, gozo, paz, paciencia..."
      }
  ];
  
  let currentIndex = 0;
  
  function startCards() {
    document.getElementById("main-card").style.display = "none";
    document.getElementById("real-card").style.display = "block";
    showCard();
  }
  
  function showCard() {
    const card = document.getElementById("real-card");
    const person = people[currentIndex];
    const avatar = card.querySelector(".avatar");
    const name = card.querySelector("h2");
    const ul = card.querySelector("ul");
    const verseDiv = document.getElementById("bible-verse");
  
    avatar.src = person.image;
    avatar.alt = person.name;
    name.textContent = person.name;
    ul.innerHTML = person.traits.map(trait => `<li>${trait}</li>`).join("");
  
    verseDiv.textContent = person.verse;
    verseDiv.classList.remove("verse-visible");
    verseDiv.classList.add("hidden-verse");
  }
  
  function vote(isGood) {
    const card = document.getElementById("real-card");
    card.classList.add(isGood ? "vote-yes" : "vote-no");
  
    setTimeout(() => {
      currentIndex++;
      if (currentIndex >= people.length) currentIndex = 0;
      card.classList.remove("vote-yes", "vote-no");
      showCard();
    }, 600);
  }
  
  function toggleVerse() {
    const verse = document.getElementById("bible-verse");
    verse.classList.toggle("hidden-verse");
    verse.classList.toggle("verse-visible");
  }
  