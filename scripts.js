const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-botao");
const listaDeCompras = document.getElementById("lista-compras");
const listaDeComprados = document.getElementById("lista-comprados");
botaoSalvarItem.addEventListener("click", adicionarItem);
const mensagemListaVazia = document.getElementById("mensagem-vazia");
let contador = 0;


 

function adicionarItem(evento) {
    evento.preventDefault();

    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("item-lista-container");

    const containerNomeDoItem = document.createElement("div");
    const containerCheckBox = document.createElement("div");
    containerCheckBox.classList.add("checkbox-container");
    const checkBoxInput = document.createElement("input");
    checkBoxInput.type = "checkbox";
    checkBoxInput.classList.add("checkbox-input");
    checkBoxInput.id = "checkbox-" + contador++;

   

    const checkBoxLabel = document.createElement("label");
    checkBoxLabel.setAttribute ("for", checkBoxInput.id);

    const checkBoxCustomizado = document.createElement("div");
    checkBoxCustomizado.classList.add("checkbox-customizado");

    checkBoxLabel.appendChild(checkBoxInput);
    checkBoxLabel.appendChild(checkBoxCustomizado);

    containerCheckBox.appendChild(checkBoxLabel);
    containerNomeDoItem.appendChild(containerCheckBox);

   

    const nomeDoItem = document.createElement("p");
    nomeDoItem.innerText = item.value; 
    containerNomeDoItem.appendChild(nomeDoItem);

    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("botao-acao");
    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";
    imagemRemover.alt = "Remover";
    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("botao-acao");
    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt = "Editar";
    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);
    containerItemLista.append(containerNomeDoItem);
    containerItemLista.append(containerBotoes);
    itemDaLista.appendChild(containerItemLista);
    const itemData = document.createElement("p");
    const diaDaSemana = new Date().toLocaleDateString("pt-BR", { weekday: "long" });
    const diaComPrimeiraMaiuscula = diaDaSemana.charAt(0).toUpperCase() + diaDaSemana.slice(1);
    itemData.innerText = `${diaComPrimeiraMaiuscula} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", {hour: "numeric", minute: "numeric"})}`;
    itemData.classList.add("item-lista-texto");
    itemDaLista.appendChild(itemData);
    listaDeCompras.appendChild(itemDaLista);
    nomeDoItem.id = "item-titulo";
    checkBoxLabel.addEventListener("click", function (evento) {
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo");
        const checkBoxInput  = evento.currentTarget.querySelector(".checkbox-input");
        const checkBoxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
        if (checkBoxInput.checked) {
            checkBoxCustomizado.classList.add("checked");
            listaDeComprados.appendChild(itemDaLista);
            itemTitulo.style.textDecoration = "line-through";
        } else {
            checkBoxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista);
        }
    })
}