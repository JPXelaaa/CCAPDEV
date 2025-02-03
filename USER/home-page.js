// carousel
let currentIndex = 0;
    
    function updateActiveItem() {
      const items = document.querySelectorAll('.establishment-preview');
      const leftButton = document.querySelector('.prev');
      const rightButton = document.querySelector('.next');
    
      items.forEach((item, index) => {
        item.classList.remove('active');  // Remove active class from all items
        if (index === currentIndex) {
          item.classList.add('active');  // Add active class to the current item
        }
      });
    
      if (currentIndex == 0) {
        leftButton.classList.add('hide');
      } else {
        leftButton.classList.remove('hide');
      }
    
      if (currentIndex == 5) {
        rightButton.classList.add('hide');
      } else {
        rightButton.classList.remove('hide');
      }
    }
    
    function moveSlide(direction) {
      const carousel = document.querySelector('.main-section');
      const items = document.querySelectorAll('.establishment-preview');
      const totalItems = items.length;
    
      currentIndex = (currentIndex + direction) % totalItems;  
      
      updateActiveItem();
    
      const offset = -(currentIndex * (window.innerWidth * 0.195)); 
      carousel.style.transform = `translateX(${offset}px)`;
    }
    
    updateActiveItem();

// view establishments navigation
document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.querySelector('.pagination .page-item:nth-child(3) .page-link'); 
  const filterIcon = document.querySelector('.pagination .page-item:nth-child(4) .page-link'); 
  const searchBarContainer = document.getElementById("searchBarContainer");
  const dropdownMenu = document.getElementById("dropdownMenu");

  searchIcon.addEventListener("click", function (event) {
    event.preventDefault(); 
    searchBarContainer.classList.toggle("hidden");
  });

  filterIcon.addEventListener("click", function (event) {
    event.preventDefault();
    dropdownMenu.classList.toggle("hidden");
  });

  document.addEventListener("click", function (event) {
    if (!searchIcon.contains(event.target) && !searchBarContainer.contains(event.target)) {
      searchBarContainer.classList.add("hidden");
    }

    if (!filterIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.add("hidden");
    }
  });
});

// log out
function toggleLogOut() {
  let dropdown = document.getElementById("dropdownLogOut");
  dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}