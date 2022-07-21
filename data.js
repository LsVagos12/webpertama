const nama = "Yohanes Ananto Putro";
let usia = 18;

 let biodata = document.getElementById(`biodata`);
 console.log(biodata);

function generationBiodata() {
    let generasi;

    if (usia > 10 && usia <= 18) { 
        generasi = "generasi remaja";
    } 
    else  if (usia > 18 && usia < 30) {
        generasi = "generasi dewasa"
    }
    else if (usia >= 30) {
        generasi = "generasi tua"
    }
    else if (usia > 2 && usia <= 10) {
        generasi = "generasi anak anak"
    }
    else {
        generasi = "generasi balita"
    }

    return biodata.innerHTML =generasi;

}

console.log(nama);
console.log(usia);

generationBiodata();