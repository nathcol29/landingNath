'use trict';

//Fonction toggle pour activer ou desactiver la fêntre modale de la newsletter


/***
 * ce code ajoute un gestionnaire de clic à tous les elements ayant la classe "show__newsletter".
 * Lorque l'un de ces elements est cliqué, il bascule l'état de visibilité de l'éléemnt ayant la
 * classe "newletter" en ajoutant ou supprimant la classe "active".
 * Cela permet de montrer ou de caher la newletter, selon son éta actuel.
 * 
 * const SHOW__NEWSLETTER = documentsByClassName ("show__newsletter");
 * 
 * Cette ligne sélectionne tous les élèments de la page HTML qui ont la classe "show__newsletter"
 * et les stocke dans une variable appellé une collection HTML.
 * 
 * For (conts show of SHOW_NEWSLETTER).
 * Cette ligne initialise une boucle for... of qui parcourt chaque élèment de la collection DHOW_NEWSLETTER
 * 
 * show.addEventListener("click", () =>{}
 * cette ligne ajoute un écouteur d'évenement de clic à cahque élément show de la collection.
 * 
 * const newsletter = document.querySelector(*.newsletter");
 * cette ligne selectionne le premier élément de la page HTML ayant la classe "newsletter" et le stock dans une 
 * varaible appellé newsletter.
 * La méthode querySelector retourne uniquement le premier élement correspondant à la requête spécifiée
 * 
 * newsletter.classList.toogle("active");
 * Cette ligne utilise le méthode classlist.toogle pour ajouter ou supprimer la classe
 * "active" de l'élément newsletter.Si l'élement a dejala classe active, elle est supprime, sinon elle est ajoutéé.Cela
 * permet de basculer l'état de visibilité de l'élèment.
 */


const SHOW_NEWSLETTER = document.getElementsByClassName("show__newsletter");
console.log(SHOW_NEWSLETTER);

for (const show of SHOW_NEWSLETTER) {
    show.addEventListener("click", () => {
        const newsletter = document.querySelector(".newsletter");
        newsletter.classList.toggle("active");
    })
}


//Déclaration du compte à rebours
const COUNTDOWN_ELEMENTS = {
    days: document.getElementById("day"),
    hours: document.getElementById("hour"),
    minutes: document.getElementById("minute"),
    seconds: document.getElementById("second")
};

//fonction pour calculer le compte à rebours
// console.log(new Date().getTime());
function calculateCountDown(targetDate) {
    const currentDate = new Date();
    const timeDifference = targetDate.getTime() - currentDate.getTime();

    //Si la difference est inferieure ou égale à zéro, le compte à rebours est terminé
    if (timeDifference <= 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    }

    //calcul des jours, heures, minutes et secondes restantes
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    return {
        days,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60,
    };
}

//fonction pour mettre à jour le compte à rebours affiché dans la page
function updateCountdown(countdown) {
    COUNTDOWN_ELEMENTS.days.textContent = countdown.days;
    COUNTDOWN_ELEMENTS.hours.textContent = countdown.hours;
    COUNTDOWN_ELEMENTS.minutes.textContent = countdown.minutes;
    COUNTDOWN_ELEMENTS.seconds.textContent = countdown.seconds;

    //verification si le compte à rebours est terminé


    if (countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0 && countdown.seconds === 0) {
        clearInterval(COUNTDOWN_INTERVAL);
        //cacher certains élèments de la page
        const hideContent = {}      //à enlever si je veux afficcher le compte à rebours
    }
    //cacher certains élèments de la page
    const hideContent = {
        firstHeaders2: document.getElementsByTagName("h2")[0],
        firstParagraphe: document.getElementsByTagName("p")[0],
        countDown: document.querySelector(".countDown"),
        secondCallToAction: document.getElementsByClassName("btn__cta")[1]
    }

    // for (const contentName in hideContent) {
    //     if (hideContent.hasOwnProperty(contentName)) {
    //         const content = hideContent[contentName];
    //         if (content) {
    //             content.style.display = "none";
    //         }
    //     }
    // }

}



//date de lancement du site (remplacez les valeurs par celles de votre choix)
const LAUNCH_DATE = new Date("June 6, 2024 22:20:00");

//interval pour mettre à jour le compte à rebours toutes les secondes
const COUNTDOWN_INTERVAL = setInterval(() => {
    const countdown = calculateCountDown(LAUNCH_DATE);
    updateCountdown(countdown);
}, 1000);

//mettre à jour automatiquement l'année dans votre footer
const CURRENT_YEAR_FOOTER = document.getElementById("current-year");
const CURRENT_YEAR = new Date().getFullYear();
CURRENT_YEAR_FOOTER.textContent = CURRENT_YEAR;