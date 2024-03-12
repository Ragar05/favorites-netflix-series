(() => {
    const cardContainer = document.getElementById("card-movie-container");

    const createCardItem = ({
        name,
        image,
        description
    }) => {
        return `<div class="card" style="width: 18rem;">
        <img src="${image}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${description}</p>
          <a href="#" class="btn btn-primary">View</a>
        </div>
      </div>`
    }
})()