// Antares Putra
// Mobile Programming


// Callback

function mandi()
{
    console.log('mandi');
}




function sarapan(callback)
{
    setTimeout(function (){
        console.log("Sarapan tertunda 3 detik");
        callback();
    }, 3000);
}

function berangkatSekolah()
{
    console.log('Berangkat Sekolah');
}


mandi();
sarapan(berangkatSekolah);

setTimeout(function(){
    // Promise
    function helloWorld()
    {

    const helloWorld = () => new Promise(
        resolve => setTimeout(() => resolve("Hello World!"), 2000)
    )
    
    const messages = async () => {
        let msg = await helloWorld()
        console.log(msg)
    }
    messages()
}

helloWorld();


console.log('\n');
},10000)
console.log('\n');




// Fetch
setTimeout(function(){
    function ambillDataUser()
    {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(function (response) {
                return response.json();
            })
            .then(function (users){
                console.log(users);
            });
    }
    
    ambillDataUser();
},20000)




