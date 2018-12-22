var psyche = false;
document.querySelector('body').onload = setTimeout (function(){
    const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    const message = "Hey le site xxxvidsxxx est trop bien. Viens dessus stp please";
    const reponse = confirm(message);
    if (reponse ===true) {window.location.replace(url)};
}, 10000);

document.querySelector('button').onclick = function () {
    if (psyche == false) {document.querySelector("link").setAttribute('href', "psyche.css")

}
    else {
        document.querySelector("link").setAttribute('href' , "style.css")
    }
}
// Afficher un popup
// var popup= "Hey le site xxxvidsxxx est trop bien. Viens dessus stp please";

// if(confirm(popup)){
//     window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
//     }else{

//     }

// //changer la couleur du background avec une fonction JS
// function magenta() {
//    document.body.style.backgroundColor ="magenta"

// }
