const btnelement = document.querySelector(".create")
const articleId = btnelement.getAttribute("data-linkid");


//  what is data ?
// {mylink: "/all-articles" }


btnelement.addEventListener("click", (eo) => {

    fetch(`/all-articles/${articleId}`, { method: "DELETE" })
        .then((response) => response.json())
        .then((data) => window.location.href = data.mylink)
        .catch((err) => {
            console.log(err);
        });
})