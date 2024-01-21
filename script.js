pop=document.getElementById("popup")
lay=document.getElementById("layover")
addout=document.getElementById("btnpop")//for pop up
cancel=document.getElementById("tocancel")
addbook=document.getElementById("toadd")//for adding the book
mainbook=document.getElementById("books")
del=document.getElementById("btn")
title=document.getElementById("booktitle")
author=document.getElementById("bookauthor")
description=document.getElementById("description")
function remove(hi)
{
    hi.target.parentElement.remove()
}
addbook.addEventListener("click",function(event)
{
    div =document.createElement("div")
    div.setAttribute("id","book1")
    div.innerHTML=`<h2>${title.value}</h2>
                   <h5>${author.value}</h5>
                   <p>${description.value}</p>
                   <button id="btn" onclick="remove(event)">Delete</button>`
    mainbook.append(div)
    pop.style.display="none"
    lay.style.display="none"
    event.preventDefault()
})
addout.addEventListener("click",function(){
    pop.style.display="block"
    lay.style.display="block"
})
cancel.addEventListener("click",function(event){
    pop.style.display="none"
    lay.style.display="none"
    event.preventDefault()
})
del.addEventListener("click",function(event){
    event.target.parentElement.remove()
})