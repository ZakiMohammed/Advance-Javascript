const API_URL = 'https://jsonplaceholder.typicode.com/';
const LOADER = `<div class="spinner-border spinner-border-sm" role="status"></div>`;
const MESSAGE = {
    SAVE: 'Record saved successfully'
};

window.onload = function (ev) {

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let posts = JSON.parse(this.responseText);
            posts.forEach(post => {
                let html = `
                    <li class="list-group-item">
                        <input type="hidden" value="${post.id}"></input>
                        <h5>${post.title}</h5>
                        <p>${post.body}</p>
                        <button type="button" class="btn btn-sm btn-warning" onclick="edit(this)">Edit</button>
                    </li>
                `;
                document.getElementById('lstPost').innerHTML += html;
            });
        }
    };
    xhr.open('GET', API_URL + 'posts');
    xhr.send();

    $('#modalAction').on('hidden.bs.modal', function (e) {
        document.getElementById('hidId').value = '0';
        document.getElementById('txtTitle').value = '';
        document.getElementById('txtBody').value = '';
        document.getElementById('txtTitle').classList.remove('is-invalid');
        document.getElementById('txtBody').classList.remove('is-invalid');
    });
    $('.toast').toast({
        animation: true,
        autohide: true,
        delay: 2000,
    });
};

function save(event) {
    
    let txtTitle = document.getElementById('txtTitle');
    let txtBody = document.getElementById('txtBody');
    let hasError = false;

    if (!txtTitle || txtTitle.value === '') {
        document.getElementById('txtTitle').classList.add('is-invalid');
    }
    if (!txtBody || txtBody.value === '') {
        document.getElementById('txtBody').classList.add('is-invalid');
    }

    if (hasError) {
        return;
    }

    let dto = { title: txtTitle.value, body: txtBody.value };
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState === 3) {
            document.getElementById('btnSave').innerHTML = LOADER;
        }
        if (this.readyState === 4) {
            document.getElementById('btnSave').innerHTML = 'Save';
            if (this.status === 201) {
                let html = `
                    <li class="list-group-item">
                        <h5>${dto.title}</h5>
                        <p>${dto.body}</p>
                        <button type="button" class="btn btn-sm btn-warning" data-toggle="modal" data-target="#modalAction">Edit</button>
                    </li>`;
                html += document.getElementById('lstPost').innerHTML;
                document.getElementById('lstPost').innerHTML = html;

                modal('hide');
                toast(MESSAGE.SAVE);
            }
        }
    };
    xhr.open('POST', API_URL + 'posts');
    xhr.send(JSON.stringify(dto));
}
function edit(event) {
    let id = event.parentElement.getElementsByTagName('input')[0].value;
    let title = event.parentElement.getElementsByTagName('h5')[0].innerHTML;
    let body = event.parentElement.getElementsByTagName('p')[0].innerHTML;

    document.getElementById('hidId').value = id;
    document.getElementById('txtTitle').value = title;
    document.getElementById('txtBody').value = body;

    modal('show');
}

function modal(action) {
    $('#modalAction').modal(action);
}
function toast(message) {
    $('.toast-message').html(message);
    $('.toast').toast('show');
}

