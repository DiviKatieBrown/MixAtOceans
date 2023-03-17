// Custom Scripts Written for the Mix at Oceans Restaurant Site
// JS to Toggle Header Hamburger Menu
    let btn = document.querySelectorAll('.hamburger-menu');
    let menu = document.querySelectorAll('.dropdown-menu');
    
    // Event Listeners
    btn.forEach((button) => {
    button.addEventListener('click', toggleNavDisplay)
    });

    // Toggle Function
    function toggleNavDisplay() {
        menu.forEach((item) => {
        item.classList.toggle('hidden')
        })
    };


// JS to Toggle Visible Menu

  let bites = document.querySelector('#bites-section');
  let sips = document.querySelector('#sips-section');
  
  // Sips Listeners
  sips.addEventListener('click', toggleSips);
  sips.addEventListener('click', toggleBites);
  
  // Bites Listeners
  bites.addEventListener('click', toggleBites);
  bites.addEventListener('click', toggleSips);
  
  // Toggle Functions
  function toggleBites() {
  bites.classList.toggle('hidden')
  };
  function toggleSips() {
   sips.classList.toggle('hidden')
  }
