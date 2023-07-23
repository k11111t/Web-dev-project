const searchButtons = document.getElementsByClassName("search-option")

for(let i=0; i < searchButtons.length; i++)
{
    searchButtons[i].addEventListener('click', function() {
        searchButtons[i].classList. toggle('clicked');
      }); 
}