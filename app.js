const btn=document.getElementById("button");
const jokecontent=document.getElementById("jokeContent");
const joke=document.getElementById("joke");

btn.onclick=()=>{
    axios.get("https://official-joke-api.appspot.com/random_joke").then(function(response){
        btn.textContent="Next!";
        jokecontent.textContent=response.data.setup;
        setTimeout(function(){
            joke.textContent=response.data.punchline;

        },1500);
    })
    .catch(function(error){
        console.log("error");
    });
};