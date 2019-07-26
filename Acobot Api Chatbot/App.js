// fetching data

$('#shows').on('click', function () {

    var msg = document.getElementById("inputs-cmd").value
    fetch("https://acobot-brainshop-ai-v1.p.rapidapi.com/get?bid=178&key=sX5A2PcYZbsN5EY6&uid=mashape&msg=" + msg, {
            headers: new Headers({
                "X-RapidAPI-Host": "acobot-brainshop-ai-v1.p.rapidapi.com",
                "X-RapidAPI-Key": "1c9eccc37dmsh7fad539e85b0495p199386jsn5e79c2a89e3e"
            })
        })
        .then(response => response.json())
        .then(responseJson => {
            var print1 = "You: " + msg + "<br />";
            var print2 = "Bot: " + responseJson.cnt;
            $("#answer").html(print1 + print2);
        })
        .catch(err => {
            console.log(err)
        })
})