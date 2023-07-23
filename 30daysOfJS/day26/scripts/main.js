function setOnClickSearchButton()
{
  const searchButtonStart = document.getElementById("search-button-starting")
  const searchButtonAny = document.getElementById("search-button-any")
  const sortOption = document.getElementsByClassName("sort-option")[0]
  
  sortOption.addEventListener('click', () => {
    if(!sortOption.classList.contains("clicked")) displayCountries(1)
    else displayCountries(0)

    sortOption.classList.toggle('clicked')
    if(searchButtonAny.classList.contains("clicked"))
    {
      searchButtonAny.classList.toggle("clicked")
    }
    if(searchButtonStart.classList.contains("clicked"))
    {
      searchButtonStart.classList.toggle("clicked")
    }

    
  })

  // on click - regex start
  searchButtonStart.addEventListener('click', () => {
    // change color
    if(searchButtonAny.classList.contains("clicked"))
    {
      searchButtonAny.classList.toggle("clicked")
    }
    if(!searchButtonStart.classList.contains("clicked")){
      searchButtonStart.classList.toggle("clicked")
      const matches = startSearch(0)
    }
  })

  // on click - regex within
  searchButtonAny.addEventListener('click', () => {
    // change color
    if(searchButtonStart.classList.contains("clicked"))
    {
      searchButtonStart.classList.toggle("clicked")
    }
    if(!searchButtonAny.classList.contains("clicked")){
      searchButtonAny.classList.toggle("clicked")
      startSearch(1)
    }
  })
}

function setOnInputChange()
{
  const inputField = document.getElementById("search-bar-input")
  const searchButtonStart = document.getElementById("search-button-starting")
  const searchButtonAny = document.getElementById("search-button-any")

  inputField.addEventListener('input', () => {
    if(searchButtonStart.classList.contains("clicked"))
    {
      startSearch(0)
    }
    else if(searchButtonAny.classList.contains("clicked"))
    {
      startSearch(1)
    }
  })
}

function setTotalNumberOfCountries()
{
  const totalNumOfCountries = countries.length
  const totalNumCountriesSpan = document.getElementById("number-of-countries")
  totalNumCountriesSpan.innerHTML = totalNumOfCountries
}

function startSearch(mode=0)
{
  const searchStringSpan1 = document.createElement("span")
  searchStringSpan1.textContent = "Countries that start with "
  const searchStringSpan2 = document.createElement("span")
  searchStringSpan2.textContent = "Countries that contain "
  const searchStringAre = document.createElement("span")
  searchStringAre.textContent = " are "

  const searchInfoElement = document.getElementById("search-info") 

  // execute search
  const searchString =  document.getElementById("search-bar-input").value.toString()
  let regex 
  // starts with
  if(mode === 0) regex = new RegExp("^" + searchString, "i")
  // contains
  else if (mode === 1) regex = new RegExp(searchString, "i")
  const matches = countries.filter( (country) => regex.test(country))
  const numberOfMatches = matches.length

  // change the contents of the paragraphs
  const searchedStringSpan = document.createElement("span")
  searchedStringSpan.style.color = "red"
  searchedStringSpan.innerHTML = searchString
  const numberOfMatchesSpan = document.createElement("span")
  numberOfMatchesSpan.style.color = "green"
  numberOfMatchesSpan.innerHTML = numberOfMatches

  searchInfoElement.innerHTML = ""

  // 0 = start with, 1 = contains
  if(mode === 0) searchInfoElement.appendChild(searchStringSpan1)
  else searchInfoElement.appendChild(searchStringSpan2)
  searchInfoElement.appendChild(searchedStringSpan)
  searchInfoElement.appendChild(searchStringAre)
  searchInfoElement.appendChild(numberOfMatchesSpan)

  // store matches in a session storage
  sessionStorage.setItem('countries', JSON.stringify(matches, undefined, 4))
  displayCountries()
}

function displayCountries(order=0)
{
  //get countries list from the local storage
  const countriesList = JSON.parse(sessionStorage.getItem('countries'))
  
  // ascending
  if(order === 0) countriesList.sort((a,b) => a.localeCompare(b))
  // descending
  else if(order === 1) countriesList.sort((a,b) => b.localeCompare(a))

  const mainDiv = document.getElementById("countries-grid-div")
  mainDiv.innerHTML = ""
  // console.log(countriesList)
  const countryMainDiv = document.createElement("div")
  countryMainDiv.className = "countries-holder"
  
  countriesList.forEach(element => {
    const countryDiv = document.createElement("div")
    countryDiv.className = "country-div"
    const div = document.createElement("div")
    div.className = "country-div-content"
    div.textContent = element
    countryDiv.appendChild(div)
    countryMainDiv.appendChild(countryDiv)
  })

  mainDiv.appendChild(countryMainDiv)
}

setTotalNumberOfCountries()
setOnClickSearchButton()
setOnInputChange()
sessionStorage.setItem('countries', JSON.stringify(countries, undefined, 4))
displayCountries()



