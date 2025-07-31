// // IDS = {'chess-ai', 'digit-recog', 'prem-pred', 'weather-stat', 'epidemiology', 'ai-assist'}


// document.getElementById('return-card-display').addEventListener('click', () => {
//     document.getElementById("specific-project").classList.toggle('d-none')
//     document.getElementById("card-display").classList.toggle('d-none')
// });



// function renderCards() {
//     const container = document.getElementById("card-display-container");
//     container.innerHTML = ""; // Clear any existing content

//     dataArray.forEach(project => {
//         const col = document.createElement("div");
//         col.className = "col";

//         const card = document.createElement("div");
//         card.className = "card h-100 shadow-sm border-0";
//         card.id = project.ID;

//         const img = document.createElement("img");
//         img.className = "card-img-top";
//         img.src = project.Thumbnail || "./Images/default.jpg";
//         img.alt = "Screenshot of Project";

//         const cardBody = document.createElement("div");
//         cardBody.className = "card-body d-flex flex-column";

//         const title = document.createElement("h5");
//         title.className = "card-title";
//         title.innerText = project.Title;

//         const intro = document.createElement("p");
//         intro.className = "card-text";
//         intro.innerText = project.Intro;

//         const buttonDiv = document.createElement("div");
//         buttonDiv.className = "mt-auto";

//         const button = document.createElement("button");
//         button.className = "btn btn-link btn-sm p-0 read-more-btn";
//         button.type = "button";
//         button.innerText = "Read more";

//         // Add click listener for detail view
//         card.addEventListener("click", () => {
//             document.getElementById("specific-project").classList.remove("d-none");
//             document.getElementById("card-display").classList.add("d-none");

//             const textContent = document.getElementsByClassName('text-content')[0];
//             const carouselInner = document.getElementsByClassName("carousel-inner")[0];
//             const projectTitle = document.getElementById("specific-project-title");

//             textContent.innerHTML = project.Description;
//             projectTitle.innerText = project.Title;
//             carouselInner.innerHTML = '';

//             project.Images.forEach((src, index) => {
//                 const itemDiv = document.createElement('div');
//                 itemDiv.className = 'carousel-item' + (index === 0 ? ' active' : '');

//                 const img = document.createElement('img');
//                 img.src = src;
//                 img.alt = `Image ${index + 1}`;
//                 img.className = 'd-block w-100';

//                 itemDiv.appendChild(img);
//                 carouselInner.appendChild(itemDiv);
//             });
//         });

//         // Assemble the card
//         buttonDiv.appendChild(button);
//         cardBody.appendChild(title);
//         cardBody.appendChild(intro);
//         cardBody.appendChild(buttonDiv);

//         card.appendChild(img);
//         card.appendChild(cardBody);
//         col.appendChild(card);
//         container.appendChild(col);
//     });
// }

// renderCards();

const fadeDuration = 400; // matches CSS fade time in ms

document.getElementById('return-card-display').addEventListener('click', () => {
    const specific = document.getElementById("specific-project");
    const cards = document.getElementById("card-display");

    // Clean up classes
    specific.classList.remove('fade-in', 'fade-out');
    cards.classList.remove('fade-in', 'fade-out');

    // Fade out specific project
    specific.classList.add('fade-out');

    setTimeout(() => {
        specific.classList.add('d-none');
        specific.classList.remove('fade-out');

        cards.classList.remove('d-none');
        cards.classList.add('fade-in');
    }, fadeDuration);
});

function renderCards() {
    const container = document.getElementById("card-display-container");
    container.innerHTML = ""; // Clear existing cards

    dataArray.forEach(project => {
        const col = document.createElement("div");
        col.className = "col";

        const card = document.createElement("div");
        card.className = "card h-100 shadow-sm border-0";
        card.id = project.ID;

        const img = document.createElement("img");
        img.className = "card-img-top";
        img.src = project.Thumbnail || "./Images/default.jpg";
        img.alt = "Screenshot of Project";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body d-flex flex-column";

        const title = document.createElement("h5");
        title.className = "card-title";
        title.innerText = project.Title;

        const intro = document.createElement("p");
        intro.className = "card-text";
        intro.innerText = project.Intro;

        const buttonDiv = document.createElement("div");
        buttonDiv.className = "mt-auto";

        const button = document.createElement("button");
        button.className = "btn btn-link btn-sm p-0 read-more-btn";
        button.type = "button";
        button.innerText = "Read more";

        // When card is clicked
        card.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            const specific = document.getElementById("specific-project");
            const cards = document.getElementById("card-display");

            // Clean up old classes
            specific.classList.remove('fade-in', 'fade-out');
            cards.classList.remove('fade-in', 'fade-out');

            // Start fade-out on cards
            cards.classList.add('fade-out');

            setTimeout(() => {
                cards.classList.add('d-none');
                cards.classList.remove('fade-out');

                // Update project details
                const textContent = document.querySelector('.text-content');
                const carouselInner = document.querySelector('.carousel-inner');
                const projectTitle = document.getElementById("specific-project-title");

                textContent.innerHTML = project.Description;
                projectTitle.innerText = project.Title;
                carouselInner.innerHTML = '';

                project.Images.forEach((src, index) => {
                    const itemDiv = document.createElement('div');
                    itemDiv.className = 'carousel-item' + (index === 0 ? ' active' : '');

                    const img = document.createElement('img');
                    img.src = src;
                    img.alt = `Image ${index + 1}`;
                    img.className = 'd-block w-100';

                    itemDiv.appendChild(img);
                    carouselInner.appendChild(itemDiv);
                });

                // Show specific project with fade-in
                specific.classList.remove('d-none');
                specific.classList.add('fade-in');
            }, fadeDuration);
        });

        // Assemble card
        buttonDiv.appendChild(button);
        cardBody.appendChild(title);
        cardBody.appendChild(intro);
        cardBody.appendChild(buttonDiv);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        container.appendChild(col);
    });
}

renderCards();


