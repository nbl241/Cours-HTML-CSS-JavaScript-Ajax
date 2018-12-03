var formValid = document.getElementById('boutonEnvoi');
var prenom = document.getElementById('prenom');
var missPrenom = document.getElementById('missPrenom');
var nom = document.getElementById('nom');
var missNom = document.getElementById('missNom');
var email = document.getElementById('email');
var missEmail = document.getElementById('missEmail');
var tel = document.getElementById('tel');
var missTel = document.getElementById('missTel');
var codePostale = document.getElementById('codePostale');
var missCodePostale = document.getElementById('missCodePostale')

formValid.addEventListener('click', function(event){
    validation(event)
});

function validation(event){
    if (prenom.value.trim() == ""){
        event.preventDefault();
        missPrenom.textContent = 'Prénom manquant !!!';
        missPrenom.style.color = 'red';
    }   
    if (nom.value.trim() == ""){
        event.preventDefault();
        missNom.textContent = 'Nom manquant !!!';
        missNom.style.color = 'red';
    }
    else if (email.value.trim() == ""){
        event.preventDefault();
        missEmail.textContent = 'Email manquant !!!';
        missEmail.style.color = 'red';
    }
    else if (tel.value.trim() == ""){
        event.preventDefault();
        missTel.textContent = 'Niméro téléphone manquant !!!';
        missTel.style.color = 'red';
    }
    else if (codePostale.value() = NaN){
        event.preventDefault();
        missCodePostale.textContent = 'Code postale manquant !!!';
        missCodePostale.style.color = 'red';
    }
    else{
    }
}
