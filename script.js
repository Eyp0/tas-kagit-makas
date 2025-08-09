function bilgisayarSecimi() {
    const secenekler = ["taş", "kağıt", "makas"];
    return secenekler[Math.floor(Math.random() * 3)];
}

function sonucuBelirle(kullanici, bilgisayar) {
    if (kullanici === bilgisayar) return "Berabere!";
    if (
        (kullanici === "taş" && bilgisayar === "makas") ||
        (kullanici === "kağıt" && bilgisayar === "taş") ||
        (kullanici === "makas" && bilgisayar === "kağıt")
    ) {
        return "Kazandınız!";
    }
    return "Kaybettiniz!";
}

function oyun(oyuncuSecimi) {
    const bilgisayar = bilgisayarSecimi();
    document.getElementById("user-choice").textContent = oyuncuSecimi;
    document.getElementById("computer-choice").textContent = bilgisayar;
    document.getElementById("winner").textContent = "Sonuç: " + sonucuBelirle(oyuncuSecimi, bilgisayar);
}

document.querySelector('[data-choice="tas"]').addEventListener("click", function() {
    oyun("taş");
});

document.querySelector('[data-choice="kagit"]').addEventListener("click", function() {
    oyun("kağıt");
});

document.querySelector('[data-choice="makas"]').addEventListener("click", function() {
    oyun("makas");
});