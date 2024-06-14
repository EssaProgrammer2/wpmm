const kata2randomberbahagia = ["halo", "sambal", "mie", "bakso", "bakar", "goreng", "sedap", "orang", "jalan", "di", "dunia", "ada", "notebook", "visual", "kode", "perkalian", "dari", "ujung", "desa", "kota", "virus", "kamu", "nanya", "aku", "suka", "makan", "kodok", "tapi", "itu", "hal", "yang", "main", "laptop", "indonesia", "bahasa", "berbahagia", "dengan", "kancil", "melihat", "membaca", "mendengar"]
console.log(kata2randomberbahagia[(Math.floor(Math.random() * kata2randomberbahagia.length))])
let wakawkwakwakwkawkawk = ""
let katakata = []
let idbarabida = 1
let start = false
let timer = 60
let selesai = false
let katayangberhasil = 0
let katayangtiadkberhasil = 0
let seluruhkata = 0
let halo = ""
for (let i = 0; i < 150; i ++){
    let orang = kata2randomberbahagia[(Math.floor(Math.random() * kata2randomberbahagia.length))]
    katakata.push(orang)
    const newel = document.createElement("span")
    newel.textContent = orang
    newel.id = `t${i + 1}`
    document.getElementById("context").append(newel)
}
document.getElementById("timer").textContent = "1:00"
document.getElementById("t1").style.backgroundColor = "rgb(212, 212, 212)"
document.getElementById("inputan").addEventListener("input", () => {
    if (start == false){
        start = true
        intirval = setInterval(() => {
            timer --
            if (timer == 60){
                document.getElementById("timer").textContent = "1:00"
            }else {
                document.getElementById("timer").textContent = timer
            }
            if (timer == 0){
                selesai = true
                halo = (katayangberhasil / seluruhkata).toFixed(3)
                alert(`wpm anda adalah: ${katayangberhasil}, accuracy anda adalah: ${halo * 100}%`)
                halobang()
            }
        }, 1000)
        
        function halobang(){
            clearInterval(intirval)
        }
    }
    if (selesai == false){
    if (document.getElementById("inputan").value[document.getElementById("inputan").value.length - 1] == " "){
        let infutanorang = ""
        for (let i = 0; i < document.getElementById("inputan").value.length - 1; i ++){
            infutanorang = infutanorang + document.getElementById("inputan").value[i]
        }
        if (document.getElementById("inputan").value != " "){
        document.getElementById("inputan").value = ""
        document.getElementById(`t${idbarabida}`).style.backgroundColor = "white"
        if (infutanorang == document.getElementById(`t${idbarabida}`).textContent){
            document.getElementById(`t${idbarabida}`).style.color = "rgb(55, 255, 0)"
            idbarabida ++
            katayangberhasil ++
        }else {
            document.getElementById(`t${idbarabida}`).style.color = "rgb(255, 0, 0)"
            idbarabida ++
            katayangtiadkberhasil ++
        }
        seluruhkata ++
        document.getElementById(`t${idbarabida}`).style.backgroundColor = "rgb(212, 212, 212)"
        }else {
            document.getElementById("inputan").value = ""
        }
    }else {
        if (document.getElementById("inputan").value == ""){
            document.getElementById(`t${idbarabida}`).style.color = "black"
        }else{
        for (let i = 0; i < document.getElementById("inputan").value.length; i ++){
            if (document.getElementById("inputan").value != null || document.getElementById("inputan").value != ""){
            if (document.getElementById("inputan").value[i] == document.getElementById(`t${idbarabida}`).textContent[i]){
                document.getElementById(`t${idbarabida}`).style.color = "rgb(55, 255, 0)"
            }else {
                document.getElementById(`t${idbarabida}`).style.color = "rgb(255, 0, 0)"
            }
        }else {
            document.getElementById(`t${idbarabida}`).style.color = "black"
        }
        }
    }
    }
    }
})