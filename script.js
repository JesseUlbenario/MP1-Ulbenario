document.getElementById("btnResult").addEventListener("click",
    function replaceAll(){
        let input = document.getElementById("inputText").value;

        let result = input.replaceAll(" ", "");

        document.getElementById("stringResult").innerHTML = result;
    }
)

