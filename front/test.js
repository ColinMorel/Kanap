function test_API () {
    fetch("http://localhost:3000/api/products").then(function(res) {
        if (res.ok) {
            return res.json();
        }
    }).then(function(value) {
        console.log(value)
        // document.getElementById("hello-result").innerText = value.queryString.greetings;
    }).catch(function(err) {
        // Une erreur est survenue
      });
}