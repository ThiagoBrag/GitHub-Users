let userName = document.location.search;
a = userName = userName.substr(1, userName.length);

function getUserGithub(a) {
    fetch('https://fake-github2.herokuapp.com/api/search/' + userName)
        .then(function (resultado) {
            resultado.json().then(function (data) {
                console.log('User Data:', data);
                showUserGithub(data);
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
        });
}
getUserGithub();

function showUserGithub(user) {
    if (!user) return;
    const divImagem = document.createElement('img');
    divImagem.src =user.avatar_url;
    document.body.appendChild(divImagem);
    const divName = document.createElement('div');
    divName.innerText =user.name;
    if (user.name == null) {
        divName.innerText = 'Nome esta nulo'; 
    }
    document.body.appendChild(divName);
    const divUserName = document.createElement('div');
    divUserName.innerText =user.login;
    document.body.appendChild(divUserName);
}

function getUserReposGithub(a) {
    fetch('https://fake-github2.herokuapp.com/api/search/' + userName + '/repos')
        .then(function (resultado) {
            resultado.json().then(function (data) {

                data.forEach(function(element) {
                    let NameRepositories = document.createElement('div')
                    NameRepositories.innerText = element.name;
                    document.body.appendChild(NameRepositories);
                    let LinkRepositorio = document.createElement('a');
                    LinkRepositorio.href = element.url;
                    LinkRepositorio.innerText = element.url;
                    NameRepositories.appendChild(LinkRepositorio);

                });
                console.log('Repositories Data:', data);
            });

        }).catch(function (erro) {
            console.log('erro:', erro);
        });
}
getUserReposGithub();
