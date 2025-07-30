Array.from(document.getElementsByClassName('card')).forEach(button => {
    button.addEventListener('click', () => {
        const moreText = button.getElementsByClassName('card-body')[0].querySelector('.read-more-text');
        if (moreText != null){const isVisible = moreText.classList.contains('show');}
        

        // Toggle visibility
        moreText.classList.toggle('show');
        moreText.classList.toggle('d-none');

        // hides the other thumbnails
        Array.from(document.getElementsByClassName('card')).forEach(card => {
            if (card != button){
                card.classList.toggle("d-none")
                card.classList.toggle("show")
            }
             card.classList.remove('centre-card')
        });

    
        // Update button text
        readMore = button.getElementsByClassName('read-more-btn')[0]
        
        // swaps "read more" for "read less" 
        if (readMore.innerHTML == 'Read less'){readMore.innerHTML = "Read more"}
        else{readMore.innerHTML = 'Read less'}

        button.classList.toggle('centre-card')
    });
});
console.log('hi')



//                     <div class="col">
//                         <div class="card h-100 shadow-sm border-0">
//                             <img src="./Images/premier_thumbnail.png" class="card-img-top" alt="Screenshot of Project">
//                             <div class="card-body d-flex flex-column">
//                                 <h5 class="card-title">Personal AI Assistant</h5>
//                                 <p class="card-text">
//                                     A local, private Raspberry Pi–based assistant with voice control.
//                                     <span class="read-more-text d-none">
//                                         It integrates offline speech recognition and LLMs with Pushcut for iOS, and runs
//                                         entirely without a cloud backend.
//                                     </span>
//                                 </p>
//                                 <div class="mt-auto">
//                                     <button class="btn btn-link btn-sm p-0 read-more-btn" type="button">Read
//                                         more</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

