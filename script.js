// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.
window.onload=function(){ 
const twitter=document.querySelector(".p-4:last-of-type li:nth-of-type(2) a")
    twitter.remove()
}




// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".

const contlegg=document.querySelectorAll(".col-md-6 a")
for (const c of contlegg) {    
    c.addEventListener("click", function(event){
        event.target.closest(".col-md-6").remove()
        // event.target.closest(".container").remove()
    })
}


// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

const autori=document.querySelectorAll("div.blog-post p.blog-post-meta a")
for (const autore of autori) {    
    autore.addEventListener("mouseover", function(event){
        alert(event.target.innerText)
        // event.target.closest("div.blog-post").remove()
    })
}