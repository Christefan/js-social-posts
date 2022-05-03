const posts = [
    {
        id: 1,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=171",
        author: {
            name: "Phil Mangione",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 80,
        created: "2021-06-25"
    },
    {
        id: 2,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=171",
        author: {
            name: "Phil Mangione",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 80,
        created: "2021-06-25"
    }
];

const container = document.querySelector(".posts-list");

console.log(container)
posts.forEach((element) => {

const createElement = createPost(element);
container.append(createElement);

});

function createPost(elementP){
    const newElement = document.createElement("div");
    newElement.classList.add("post");
    newElement.innerHTML=` 
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${elementP.author.image}" alt="${elementP.author.name}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${elementP.author.name}</div>
                <div class="post-meta__time">${elementP.created}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${elementP.content}</div>
    <div class="post__image">
        <img src="${elementP.media}" alt="${elementP.media}">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${elementP.likes}</b> persone
            </div>
        </div> 
    </div>            
    `;

                return newElement;
}

let like = document.querySelectorAll(".like-button");
for(let i = 0; i < like.length; i++){
    like[i].addEventListener("click", function(){
        const check = this.classList.contains("like-button--liked")
        console.log(check)
        if(!check){
            this.classList.add("like-button--liked");
        }else{
            this.classList.remove("like-button--liked");
        }
    });
    
}