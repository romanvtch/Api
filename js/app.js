const button = document.getElementById('btn');
const image = document.getElementById('img');
const url = 'http://aws.random.cat//meow';

async function fetchHandler(){
   try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(response)
        image.src = data.file;
   } catch(error){
    console.log(error);
   } 
}
let isLoaded = image.complete;
if(isLoaded){
    fetchHandler()
}
