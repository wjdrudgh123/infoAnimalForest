const select = document.querySelector("#category select");


const choiceHandler = (evt) => {
    const currentTable = document.querySelector(`.on`);
    const targetTable = document.querySelector(`.table__${evt.target.value}`);
    
    currentTable.classList.remove("on");
    currentTable.classList.add("off");
    targetTable.classList.remove("off");
    targetTable.classList.add("on");

}

const init = () => {
    let choice = select;
    choice.addEventListener("change", choiceHandler);
}

init();