'use strict';

// Hamburger EventListener
const $openButtonEl = document.querySelector('#open-sidebar-button')
const $navbarEl = document.querySelector('#navbar')


const $mediaEl = window.matchMedia("(width < 700px)");
$mediaEl.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e){
  const isMobile = e.matches
  console.log(isMobile)
  if(isMobile){
    $navbarEl.setAttribute('inert', '')
  }
  else{
    // desktop device
    $navbarEl.removeAttribute('inert')
  }
}

function openSidebar(){
 $navbarEl.classList.add('show')
  $openButtonEl.setAttribute('aria-expanded', 'true')
  $navbarEl.removeAttribute('inert')
}

function closeSidebar(){
 $navbarEl.classList.remove('show')
  $openButtonEl.setAttribute('aria-expanded', 'false')
  $navbarEl.setAttribute('inert', '')
}

// For Bookmark Links
// const navLinks = document.querySelectorAll('nav a')
// navLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     closeSidebar()
//   })
// })

updateNavbar($mediaEl)



// typewriter code below here
  let  $typewriterEl = document.querySelector('#typewriter') ;
        const $words =['TrueTone' , 'Artistry' , 'TheMusic' , 'Melody'];
         
        let $wordsIndex = 0;
        let $characterIndex = 0;

        
        
      updateText()
        function updateText(){
            $characterIndex++;
            $typewriterEl.textContent =  `${$words[$wordsIndex].slice(0,$characterIndex)}`
          

            // change it to move in yoyo form backwards and forwards
              if($characterIndex === $words[$wordsIndex].length){
            $wordsIndex++;
            $characterIndex = 0;
        }

        if($wordsIndex === $words.length){
            $wordsIndex = 0;
        }
        //  seconds
        setTimeout(updateText,400)
        }


        // loading sub here
        // there is a bug within this code if the user doesn't enter an email prompt the user to enter and checked if the email is corrects use the same formats to work about and try it every programming using python ,php and javascripts 
      //    document.addEventListener("DOMContentLoaded", function () {
      //   const form = document.querySelector(".contact-form");
      //   const inputs = form.querySelectorAll("input[required], textarea[required]");

      //   form.addEventListener("submit", function (e) {
      //     e.preventDefault();
      //     let isValid = true;
          
      //     inputs.forEach((input) => {
      //       if (!input.value.trim()) {
      //         isValid = false;
      //         input.classList.add("error");
      //       } else {
      //         input.classList.remove("error");
      //       }
      //     });

      //     if (isValid) {
      //       alert("Thank you for your message! We will get back to you soon.");
      //       form.reset();
      //       inputs.forEach(input => input.classList.remove("error"));
      //     } else {
      //       alert("Please fill in all required fields.");
      //     }
      //   });

      //   // Remove the error style when the user starts typing
      //   inputs.forEach((input) => {
      //     input.addEventListener("input", function () {
      //       if (this.value.trim()) {
      //           this.classList.remove("error");
      //       }
      //     });
      //   });
      // });
    const submitButton = document.querySelector('#btn-submit')
		const submitButtonText = document.querySelector('#btn-submit .button-text')

		submitButton.addEventListener('click', (e) => {
			e.preventDefault()

			// add the loading class
			submitButton.classList.add('loading')

			setTimeout(() =>{
				// remove the lading class
				submitButton.classList.remove('loading')
				submitButton.classList.add('success')

				// change the butten text
				submitButtonText.innerHTML = 'Successful'
			},4000)
		})

    
 

