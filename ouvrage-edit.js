var xhr = new XMLHttpRequest();
var url = "http://localhost:8080/biblio/Ouvrage";

function load() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const num = urlParams.get('numero');
    url = `${url}/${num}`//déclaration de l'url une bonne fois pour toutes
    xhr.open("GET", url, true);
    xhr.onreadystatechange = displayData;
    xhr.send();

}

/*function save() {
    let num = document.getElementById('num');
    let titre = document.getElementById('titre');
    let categorie = document.getElementById('categorie');
    let nbExemplaires = document.getElementById('nb_exemplaires');
    let resume = document.getElementById('resume');
    let auteur = document.getElementById('auteur');
    let Ouvrage = JSON.stringify({"num": num.value, "titre": titre.value, "categorie": categorie.value, "nb_exemplaires":nbExemplaires,
"resume":resume.value, "auteur":auteur.value});
    //faire une requête put pour appliquer ces modif' dans la BDD
    xhr.open("PUT", url , true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = manageResponse;
    xhr.send(Ouvrage);

       
   // console.log(num.value, nom.value, prenom.value);
    } */

    function displayData() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let ouvrage = JSON.parse(xhr.responseText);
                let num = document.getElementById('num');
                let titre = document.getElementById('titre');
                let categorie = document.getElementById('categorie');
                let nb_exemplaires = document.getElementById('nb_exemplaires');
                let resume = document.getElementById('resume');
                let auteur = document.getElementById('auteur');
                num.value = ouvrage.num;
                titre.value = ouvrage.titre;
                categorie.value = ouvrage.categorie;
                nb_exemplaires.value = ouvrage.nb_exemplaires;
                resume.value = ouvrage.resume;
                auteur.value = ouvrage.auteur;

                console.log(ouvrage);
            }
        }
    
    }

    function manageResponse(){
        if (xhr.readyState == 4){
            if (xhr.status == 202){
                alert("Ouvrage modifiée avec succès");
                window.location.replace('/index.html');
        }
    }
}
            
        
    
    