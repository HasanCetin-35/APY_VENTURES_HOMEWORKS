/* ödevi yaprken arkadaşlardan ve internet üzerinden bolca yardım aldım
aslında algoritmasını kurdum kafamda ama koda dökemedim çünkü bir sürü parametre ve fonsiyon var 
Aslında hiç internete bakamadan belli bir yere kadar geldim. Sonra tıkandım diyebilirim.*/
const imgContainer = document.querySelector('.img-container');
const imgURL = 'https://source.unsplash.com/random/';


for(let i = 0; i <15; i++){ 
    const img = document.createElement('img');
    img.src = `${imgURL}${farklıresim()}`;/* bu kullanım sayesinde 300 farklı resim arasından döngü kadar farklı resim getircek */ 
    imgContainer.appendChild(img);/* bu kullanım ise resimleri eklememizi sağlıyor*/
        
    
    
}

function farklıresim(){
    return `${rand()}`;
}

function rand(){
    /*math.random rastgele float sayılarda döndüreceği için floor parametresini kullanarak int sayı türüne çevirdim.*/
    return Math.floor(Math.random()*300);/*300 farklı sayı türeticek */
}
