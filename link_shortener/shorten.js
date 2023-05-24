let btn = document.getElementById("b1");

btn.addEventListener('click', short);


async function short(){
    let orgLink = document.getElementById("orglink").value;
    let shortLink = document.getElementById("shortlink");

    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${orgLink}`);
    const data = await result.json();
    document.getElementById('shortlink').innerHTML=data.result.short_link2;
}