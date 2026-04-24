let sklep_icon = document.querySelector(".sklep")
let produkty_icon = document.querySelector(".produkty")
let sklep_panel = document.querySelector(".sklep-panel")
let produkty_panel =document.querySelector(".produkty-panel")
let now

sklep_icon.addEventListener("click", () => {
    sklep_panel.style.display = "block"
    now = "shop"
})
produkty_icon.addEventListener("click", () => {
    produkty_panel.style.display = "block"
    now = "produkty"
})

let sklep_panel_produkty = document.querySelector(".sklep-panel_produkty")
let sklep_panel_asortyment = document.querySelector(".sklep-panel_asortyment")
let produkty_zakladka = document.querySelector(".produkty_zakladka")
let wyposazenie_zakladka = document.querySelector(".wyposazenie_zakladka")
    produkty_zakladka.style.backgroundColor = "rgba(51, 54, 100, 0.93)"
    produkty_zakladka.style.boxShadow = "0 0 10px rgba(30, 31, 48, 0.933)"
produkty_zakladka.addEventListener("click", () => {
    produkty_zakladka.style.backgroundColor = "rgba(51, 54, 100, 0.93)"
    produkty_zakladka.style.boxShadow = "0 0 10px rgba(30, 31, 48, 0.933)"
    wyposazenie_zakladka.style.backgroundColor = "rgba(30, 31, 48, 0.933)"
    sklep_panel_produkty.style.display = "grid"
    sklep_panel_asortyment.style.display = "none"
})

wyposazenie_zakladka.addEventListener("click", () => {
    wyposazenie_zakladka.style.backgroundColor = "rgba(51, 54, 100, 0.93)"
    wyposazenie_zakladka.style.boxShadow = "0 0 10px rgba(30, 31, 48, 0.933)"
    produkty_zakladka.style.backgroundColor = "rgba(30, 31, 48, 0.933)"
    sklep_panel_asortyment.style.display = "grid"
    sklep_panel_produkty.style.display = "none"
})

let fa_angle_left = document.querySelector(".fa-angle-left")

fa_angle_left.addEventListener("click", () => {
    if (now == "shop"){
        sklep_panel.style.display = "none"
    } else if (now == "produkty"){
        produkty_panel.style.display = "none"
    }
})


const produktySklepu = [
    { id: "produkt_1", obrazek: "matches.png", nazwa: "Zapałki" },
    { id: "produkt_2", obrazek: "guma.png", nazwa: "Guma do żucia" },
    { id: "produkt_3", obrazek: "woda.png", nazwa: "Woda mineralna" },
    { id: "produkt_4", obrazek: "chusteczki.png", nazwa: "Chusteczki higieniczne" },
    { id: "produkt_5", obrazek: "baton.png", nazwa: "Baton czekoladowy" },
    { id: "produkt_6", obrazek: "zapalniczka.png", nazwa: "Zapalniczka" },
    { id: "produkt_7", obrazek: "rogal.png", nazwa: "Rogal słodki" },
    { id: "produkt_8", obrazek: "napoj.png", nazwa: "Napój gazowany" },
    { id: "produkt_9", obrazek: "chipsy.png", nazwa: "Chipsy" },
    { id: "produkt_10", obrazek: "baton_energetyczny.png", nazwa: "Baton energetyczny" },
    { id: "produkt_11", obrazek: "energetyk.png", nazwa: "Energetyk" },
    { id: "produkt_12", obrazek: "kawa.png", nazwa: "Kawa czarna" },
    { id: "produkt_13", obrazek: "hotdog.png", nazwa: "Hot-dog" },
    { id: "produkt_14", obrazek: "zapach.png", nazwa: "Zapach samochodowy" },
    { id: "produkt_15", obrazek: "kanapka.png", nazwa: "Kanapka trójkątna" },
    { id: "produkt_16", obrazek: "chusteczki_nawilzane.png", nazwa: "Chusteczki nawilżane" },
    { id: "produkt_17", obrazek: "bezpieczniki.png", nazwa: "Bezpieczniki" },
    { id: "produkt_18", obrazek: "zarowka.png", nazwa: "Żarówka samochodowa" },
    { id: "produkt_19", obrazek: "mikrofibra.png", nazwa: "Szmatka z mikrofibry" },
    { id: "produkt_20", obrazek: "plyn_letni.png", nazwa: "Płyn do spryskiwaczy letni" },
    { id: "produkt_21", obrazek: "okulary.png", nazwa: "Okulary przeciwsłoneczne" },
    { id: "produkt_22", obrazek: "olej.png", nazwa: "Olej silnikowy" },
    { id: "produkt_23", obrazek: "plyn_chlodniczy.png", nazwa: "Płyn chłodniczy" },
    { id: "produkt_24", obrazek: "plyn_zimowy.png", nazwa: "Płyn do spryskiwaczy zimowy" },
    { id: "produkt_25", obrazek: "kabel.png", nazwa: "Kabel USB" },
    { id: "produkt_26", obrazek: "ladowarka.png", nazwa: "Ładowarka samochodowa" },
    { id: "produkt_27", obrazek: "powerbank.png", nazwa: "Powerbank" },
    { id: "produkt_28", obrazek: "maskotka.png", nazwa: "Maskotka pluszowa" },
    { id: "produkt_29", obrazek: "kawa_ziarna.png", nazwa: "Kawa ziarnista premium" }
];