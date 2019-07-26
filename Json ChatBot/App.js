// // Json Chatbot Brain

$('#btn-recall').on('click', function () {
    var msg = document.getElementById('ipt-recall').value;
    var inputData = msg.toLowerCase();
    document.getElementById('ipt-recall').value = "";
    document.getElementById("output").innerHTML += "you: " + msg + "<br />"
    fetch('http://localhost:3000/conversation')
        .then((response) => response.json())
        .then((responseJson) => {
            if (inputData in responseJson) {
                document.getElementById("output").innerHTML += "Bot: " + responseJson[inputData] + "<br /><br />";
            } else {
                document.getElementById("output").innerHTML += "Bot: I don't understand...<br /><br />";
            }
        })
        .catch((err) => {
            console.log(err)
        })

})