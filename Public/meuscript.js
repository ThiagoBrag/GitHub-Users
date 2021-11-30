inputFiltro = document.createElement('input');
inputFiltro.id = "InputFiltro"
inputFiltro.placeholder = "Pesquisar nome/user"
let PorFiltro = document.createElement('div')
PorFiltro.id = "PorFiltro";
PorFiltro.appendChild(inputFiltro)
document.body.appendChild(PorFiltro);

const ListaUsuarios = [
    { name: 'Bruno Henrique', userName: 'brunohvc' },
    { name: 'Vytor Augusto Rosa', userName: 'K43RU' },
    { name: 'João Henrique Meireles da Silva', userName: 'nihilth' },
    { name: 'Otavio Augusto dos Santos', userName: 'SantOtavio' },
    { name: 'Camilly de Souza Pessotti', userName: 'camillyPessotti' },
    { name: 'Thiago Marins Braga', userName: 'ThiagoBrag' },
    { name: 'Ester Girelli', userName: 'Esterzinha12' },
    { name: 'Gustavo Rebelatto Zapella', userName: 'rebelattogustavo' },
    { name: 'Henrique Cole Fernandes', userName: 'HenriqueCole' },
    { name: 'Kenzo Hideaky Ferreira Sato', userName: 'Kenzohfs' },
    { name: 'Vinícius Bonatti Benner', userName: 'viniciusz1' },
    { name: 'Leonardo Heitor Poglia', userName: 'leopoglia' },
    { name: 'Felipe Mielke Vieira', userName: 'FelipeMielkeVieira' },
    { name: 'Eduarda Bolgenhagen De Campos', userName: 'eduardabolgenhagen' },
    { name: 'Matheus Franzener Hohmann', userName: 'MatheusFranzener' },
    { name: 'Leonardo Giuseppe de Souza Rafaelli', userName: 'LeonardoRafaelli' },
    { name: 'Diego Planinscheck', userName: 'frst157' },
    { name: 'Camilly Vitoria da Rocha Goltz', userName: 'VitoriaCamilly' },
    { name: 'Bruna Alves Mafra', userName: 'BMafra' },
    { name: 'Otavio Matheus Neves', userName: 'otavionvs' },
]


function Tabela() {
    const TabelaAtual = document.querySelector('table');
    if (TabelaAtual) {
        TabelaAtual.remove();
    }

    const table = document.createElement('table');
    const row = document.createElement('tr');
    const ColunaNome = document.createElement('th');
    const ColunaUsername = document.createElement('th');
    const ColunaBotao = document.createElement('th');
    table.id = "Tablee"

    inputFiltro.onkeyup = ProcurarNome, ProcurarUsername
    function ProcurarNome() {
        var input, filtro, table, tr, td, i, txtValue;
        input = document.getElementById("InputFiltro");
        filtro = input.value.toUpperCase();
        table = document.getElementById("Tablee");
        tr = table.getElementsByTagName("tr");

        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filtro) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
    }
    function ProcurarUsername() {
        var input, filtro, table, tr, td, i, txtValue;
        input = document.getElementById("InputFiltro");
        filtro = input.value.toUpperCase();
        table = document.getElementById("Tablee");
        tr = table.getElementsByTagName("tr");

        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[1];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filtro) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
    }
    ColunaNome.innerText = 'ColunaNome';
    ColunaUsername.innerText = 'ColunaUser';
    ColunaBotao.innerText = 'ColunaBotao';

    row.appendChild(ColunaNome);
    row.appendChild(ColunaUsername);
    row.appendChild(ColunaBotao);
    table.appendChild(row);

    

    ListaUsuarios.forEach(function (element) {
        console.log('element:', element);
        const rowTable = getPersonTableRow(
            element.name,
            element.userName);

        table.appendChild(rowTable);
    })
    let ColocarTabela = document.createElement('div');
    ColocarTabela.id = "ColocarTabela";
    ColocarTabela.appendChild(table);
    document.body.appendChild(ColocarTabela);
}

function getPersonTableRow(name, userName) {
    const row = document.createElement('tr');
    const ColunaNome = document.createElement('td');
    const ColunaUsername = document.createElement('td');
    const ColunaBotao = document.createElement('td');

    function IrPagina() {
        location.href = './index.html?' + userName;
    }

    ColunaNome.innerText = name;
    ColunaUsername.innerText = userName;

    let botao = document.createElement('button');
    botao.innerText = "Accessar dados";
    ColunaBotao.appendChild(botao);
    botao.onclick = IrPagina;

    row.appendChild(ColunaNome);
    row.appendChild(ColunaUsername);
    row.appendChild(ColunaBotao);
    return row;
}
Tabela();




let botaoCadastro = document.createElement('button');
let listPerson = [];
botaoCadastro.onclick = clickButtonRegisteryPerson;
botaoCadastro.innerText = "Cadastrar Pessoa";
let ColocarBotao = document.createElement("div")
ColocarBotao.id = "ColocarBotao"
ColocarBotao.appendChild(botaoCadastro);
document.body.appendChild(ColocarBotao);


function clickButtonRegisteryPerson() {
    const modal = createModal();
    const content = getContentRegesteryPersonModal(modal.removeModal);

    modal.insertHeader(content.header);
    modal.insertMain(content.main);
    modal.insertFooter(content.footer);
}

function createModal() {
    let background = document.createElement('div');
    background.id = "background-modal";
    let modal = document.createElement('div');
    modal.id = "modal";
    background.appendChild(modal);
    document.body.appendChild(background);

    let header = document.createElement('div');
    let main = document.createElement('div');
    let footer = document.createElement('div');

    header.id = 'modal-header';
    main.id = 'modal-main';
    footer.id = 'modal-footer';

    modal.appendChild(header);
    modal.appendChild(main);
    modal.appendChild(footer);

    function removeModal() {
        background.remove();
    }

    function insertHeader(html) {
        header.appendChild(html);
    }

    function insertMain(html) {
        main.appendChild(html);
    }

    function insertFooter(html) {
        footer.appendChild(html);
    }

    let retorno = {
        background: background,
        modal: modal,
        removeModal: removeModal,
        insertHeader: insertHeader,
        insertMain: insertMain,
        insertFooter: insertFooter,
    }

    return retorno;
}

function getContentRegesteryPersonModal(removeModal) {
    const header = document.createElement('div');
    header.id = 'person-header';
    const title = document.createElement('h1');
    title.innerText = 'Cadastrar Novo User';
    header.appendChild(title);

    const main = document.createElement('div');
    main.id = 'person-main';

    const NomePalavra = document.createElement('h2');
    NomePalavra.innerText = 'Nome:';
    main.appendChild(NomePalavra);

    const inputNome = document.createElement('input');
    inputNome.type = 'text';
    inputNome.placeholder = 'Nome completo';
    main.appendChild(inputNome);

    const UsernamePalavra = document.createElement('h2');
    UsernamePalavra.innerText = 'Username:';
    main.appendChild(UsernamePalavra);

    const inputUsername = document.createElement('input');
    inputUsername.type = 'text';
    inputUsername.placeholder = 'UserName';
    main.appendChild(inputUsername);

    const footer = document.createElement('div');
    footer.id = 'person-footer';
    const buttonRegistery = document.createElement('button');
    buttonRegistery.innerText = 'Registrar';
    buttonRegistery.id = "BotaoRegistrar";
    function registery() {
        const name = inputNome.value;
        const userName = inputUsername.value;

        if (!name || name == '' || !userName || userName == '') {
            let DivVermelha = document.createElement('div');
            DivVermelha.className = "DivVermelha";
            main.appendChild(DivVermelha);
            let TextoAviso = document.createElement('div');
            TextoAviso.className = "TextoAviso"
            TextoAviso.innerText = "Cadastro inválido!";
            DivVermelha.appendChild(TextoAviso);
            setTimeout(() => { DivVermelha.remove(); }, 3200)
            return;
        } else {

            let colocarDivVerde = document.createElement('div');
            colocarDivVerde.className = "colocarDivVerde";
            document.body.appendChild(colocarDivVerde);
            let DivVerde = document.createElement('div');
            DivVerde.className = "DivVerde";
            colocarDivVerde.appendChild(DivVerde);
            let TextoAvisoVerde = document.createElement('div');
            TextoAvisoVerde.className = "TextoAvisoVerde"
            TextoAvisoVerde.innerText = "Cadastrado com Sucesso!";
            DivVerde.appendChild(TextoAvisoVerde);
            setTimeout(() => { DivVerde.remove(); }, 3200)
        }

        registeryPerson(name, userName);
        removeModal();
    }
    buttonRegistery.onclick = registery;

    const buttonCancel = document.createElement('button');
    buttonCancel.innerText = 'Cancelar';
    buttonCancel.id = "BotaoCancelar"
    buttonCancel.onclick = removeModal;

    footer.appendChild(buttonRegistery);
    footer.appendChild(buttonCancel);

    return {
        header: header,
        main: main,
        footer: footer,
    }
}

function registeryPerson(name, userName) {
    let person = {
        name: name,
        userName: userName
    }

    ListaUsuarios.push(person);
    Tabela();
}
