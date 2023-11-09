//-- declare the trelloData variable
//-- an object with an array of columns, each column is an object with a name and an array of cards.
//-- each card is an object with a title, content, a timestamp

let trelloData = {
    columns: [
        {
            name: "To-Do",
            cards: [
                {
                    title: "Example card",
                    content: "Drag this around to other columns! You may need to make another column first though.",
                    timestamp: null
                }
            ]
        }
    ]
}

function renderColumns(){
    let trelloDataRowRootNode = document.getElementById("dataDisplayRow");
    
    //-- Removing any stale or old HTML content 
    trelloDataRowRootNode.innerHTML = "";

}

renderColumns()

console.log(trelloData)