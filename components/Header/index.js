// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const header = (hDate, hTitle, hTemp) => {

    const headers = document.createElement('div')
    const date = document.createElement('span')
    const title = document.createElement('h1')
    const temp = document.createElement('span')

    headers.appendChild(date)
    headers.appendChild(title)
    headers.appendChild(temp)

    headers.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')

    date.textContent = hDate
    title.textContent = hTitle
    temp.textContent = hTemp

    return headers
}

const headCon = document.querySelector(".header-container")

headCon.appendChild(header('SMARCH 28, 2019','Lambda Times', '98°'))
