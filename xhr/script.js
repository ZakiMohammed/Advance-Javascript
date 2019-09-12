const API_URL = 'https://jsonplaceholder.typicode.com/';

window.onload = function (ev) {
    
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {            
            let posts = JSON.parse(this.responseText);
            posts.forEach(post => {
                let html = `
                    <li class="list-group-item">
                        <h5>${post.title}</h5>
                        <p>${post.body}</p>
                        <button id="btnEdit" type="button" class="btn btn-sm btn-warning" onclick="edit(this);">Edit</button>
                    </li>
                `;
                document.getElementById('lstPost').innerHTML += html;
            });
        }
    };
    xhr.open('GET', API_URL + 'posts');
    xhr.send();

};


function add(event) {
    console.log('🏓', event);
}
function edit(event) {
    console.log('⚽', event);
}