// // IDS = {'chess-ai', 'digit-recog', 'prem-pred', 'weather-stat', 'epidemiology', 'ai-assist'}


const fadeDuration = 400; // matches CSS fade time in ms

// document.getElementById('return-card-display').addEventListener('click', () => {
document.querySelectorAll('#return-card-display').forEach(button => {
  button.addEventListener('click', () => {
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
    
    })
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
        img.style.cssText = `
        object-fit: scale-down !important; 
        `

        const cardBody = document.createElement("div");
        cardBody.className = "card-body d-flex flex-column";

        const title = document.createElement("h5");
        title.className = "card-title";
        title.innerText = project.Title;


        // <div id="specific-project-tags"
        // class="text-center mb-4 d-flex flex-wrap justify-content-center gap-2">
        //  </div>
        const tagContainer = document.createElement('div')
        tagContainer.id = "thumbnail-project-tags"
        tagContainer.className = "justify-content-start py-2 mb-4 d-flex flex-wrap gap-2"

        project.Tags?.forEach(tag => {
                    const span = document.createElement("span");
                    span.className = "badge bg-secondary";
                    span.innerText = tag;
                    tagContainer.appendChild(span);
                });

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
                const tagContainerSpec = document.getElementById("specific-project-tags");

                const zoomText = document.createElement('div')
                zoomText.innerHTML = "Click to zoom"
                zoomText.style.cssText = `
                color: grey; 
                z-index: 100000; 
                background-color: red; 
                width: 100%; 
                height: 100%; 
                position: absolute;
                
                
                `

                

                console.log(tagContainerSpec)
                textContent.innerHTML = project.Description;
                projectTitle.innerText = project.Title;
                carouselInner.innerHTML = '';
                tagContainerSpec.innerHTML = "";

                carouselInner.appendChild(zoomText)
                project.Images.forEach((src, index) => {
                    const itemDiv = document.createElement('div');
                    itemDiv.className = 'carousel-item' + (index === 0 ? ' active' : '');

                    const img = document.createElement('img');
                    img.src = src;
                    img.alt = `Image ${index + 1}`;
                    img.className = '';

                    itemDiv.appendChild(img);
                    carouselInner.appendChild(itemDiv);

                });

                project.Tags?.forEach(tag => {
                    const span = document.createElement("span");
                    span.className = "specific-tag badge bg-secondary";
                    span.innerText = tag;
                    tagContainerSpec.appendChild(span);
                });

                // Show specific project with fade-in
                specific.classList.remove('d-none');
                specific.classList.add('fade-in');
            }, fadeDuration);
        });

        // Assemble card
        buttonDiv.appendChild(button);
        cardBody.appendChild(title);
        cardBody.appendChild(tagContainer)
        cardBody.appendChild(intro);
        cardBody.appendChild(buttonDiv);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        container.appendChild(col);
    });
}

renderCards();



 // Clear previous tags




// Enlarge carousel image into fullscreen modal

// Create modal HTML once and append to body
document.addEventListener('DOMContentLoaded', () => {
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'image-modal-overlay';
    modalOverlay.style.cssText = `
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background-color: rgba(0,0,0,0.85);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 1050;
        padding: 2rem;
    `;

    const modalContent = document.createElement('div');
    modalContent.id = 'image-modal-content';
    modalContent.style.cssText = `
        position: relative;
        max-width: 80vw;
        max-height: 80vh;
        width: 80vw;
        height: 80vh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: scroll !important;
        max-width: 100% !important;
        max-height: 100% !important;
        object-fit: scale-down !important;
    `;

    const modalClose = document.createElement('button');
    modalClose.innerHTML = '&times;';
    modalClose.setAttribute('aria-label', 'Close');
    modalClose.style.cssText = `
        position: fixed;
        top: 5vh;
        right: 5vw;
        font-size: 2rem;
        background: none;
        color: white;
        border: none;
        cursor: pointer;
        z-index: 10;
    `;

    modalOverlay.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
        modalContent.querySelector('img')?.remove();
    });

    modalOverlay.appendChild(modalContent);
    modalContent.appendChild(modalClose);
    document.body.appendChild(modalOverlay);

    // Click handler for carousel images
    document.getElementById('imageCarousel')?.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            const img = e.target.cloneNode(true);
            img.style.cssText = `
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
                border-radius: 12px;
                box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
                
            `;
            modalContent.appendChild(img);
            modalOverlay.style.display = 'flex';
        }
    });
});

