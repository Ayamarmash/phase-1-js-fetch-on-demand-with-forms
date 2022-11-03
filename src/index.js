const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event)=>{
        event.preventDefault();
        const input = document.querySelector('input#searchByID');
        console.log(input.value);
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(res => res.json())
        .then(Data => showOnScreen(Data))
    })
}

document.addEventListener('DOMContentLoaded', init);
function showOnScreen(data){
    const title = document.querySelector('section#movieDetails h4');
    const summary = document.querySelector('section#movieDetails p');
    title.innerText = data.title;
    summary.innerText = data.summary;
}
/*
1- Add event listeners to capture form data and override a form's default behavior
2- Fetch data based on what the user types into that form
3- Display that data on the page
*/