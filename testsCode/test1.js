let StrRates = "5.0,100,5.5,101,6.0,102:L10;5.0,99,5.5,100,6.0,101:L20;";

let subStrings = StrRates.split(";")

    let matrix = []

    let columns = [[]]
    let rows = []
    for (let i = 0; i < subStrings.length-1; i++){
        let separateCol = subStrings[i].split(":")
        let col = separateCol[1]
        columns.push(col)
        let rowsSplit = separateCol[0].split(",")
        for(let j = 0; j < rowsSplit.length; j+=2){
            console.log("rows", rows)
            let rowSlice = rowsSplit.slice(j,j+2)
            console.log("rowSlice", rowSlice)
            rows.push(rowSlice)

        }
    }
    matrix.push(columns)
    console.log("rows", rows)
    for (let i = 0; i < rows.length; i++){
        matrix.push(rows[i])
    }

    console.log("matrix", matrix)
    let table = "<table>";

    for (let i = 0; i < matrix.length; i++){
        table += "<tr>"
        for (let j = 0; j < matrix[i].length; j++){
            table += "<th>" + matrix[i][j] + "</th>"
        }
        table += "</tr>"
    }
    table += "</table"

    document.write(table)
