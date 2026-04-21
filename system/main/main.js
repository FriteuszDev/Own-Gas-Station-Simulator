const currencies = ['💵', '🛒', '💰', '🏪', '🍌', '🍎', '🛍️', '📦', '💳', '🧾', '🥖', '🥛', '🥦', '🥫', '🧀', '🥩', '🥚', '🥨', '🥐', '🍦', '🍩', '🥤', '🧃', '⛽', '🚗', '⛽️', '⛽️', '🔧', '🛢️', '🚿', '🌭', '☕'];

function createBanknote() {
    const el = document.createElement('div');
    el.className = 'banknot';
    el.innerText = currencies[Math.floor(Math.random() * currencies.length)];
    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 3 + 4;
    const size = Math.random() * 20 + 20;
    const rotation = Math.random() * 360;
    el.style.left = startX + 'px';
    el.style.fontSize = size + 'px';
    el.style.transform = `translateY(0) rotate(${rotation}deg)`; 
    document.body.appendChild(el);
    const animation = el.animate([
        { transform: `translateY(-50px) rotate(${rotation}deg)` },
        { transform: `translateY(${window.innerHeight + 50}px) rotate(${rotation + 720}deg)` }
    ], {
        duration: duration * 1000,
        easing: 'linear'
    });
    animation.onfinish = () => el.remove();
}
setInterval(createBanknote, 300);



const logo = document.querySelector('.logo');

logo.addEventListener('mousemove', (e) => {
  const rect = logo.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / centerY) * -10;
  const rotateY = ((x - centerX) / centerX) * 10;
  
  logo.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

logo.addEventListener('mouseleave', () => {
  logo.style.transform = 'rotateX(0deg) rotateY(0deg)';
});


// <i class="fa-solid fa-star" style="color: rgb(255, 212, 59);"></i>
// <i class="fa-solid fa-star-half" style="color: rgb(255, 212, 59);"></i>
// <i class="fa-solid fa-star"></i>
//<i class="fa-solid fa-star-half fa-flip-horizontal"></i>
//<i class="fa-solid fa-star-half-stroke" style="color: rgb(255, 212, 59);"></i>






localStorage.setItem('money', 150)

let money = localStorage.getItem('money')
let money_text = document.querySelector(".p2")

money_text.innerHTML = `${money} <i class="fa-solid fa-dollar-sign"></i>`;


let selectedLogoId = 1;
const picker = document.querySelector('.logo_picker');
const input_nazwa_edit = document.querySelector(".input_nazwa_edit");


fetch('../php/get_station_name.php')
    .then(response => response.json())
    .then(data => {
        if (data && !data.error) {
            input_nazwa_edit.value = data.station_name;
            selectedLogoId = data.station_logo_id;
            picker.style.backgroundImage = `url('../images/assets/stationlogo${selectedLogoId}.png')`;
            picker.style.backgroundSize = 'cover';
        }
    })
    .catch(error => console.error('Błąd wczytywania:', error));

function toggleLogoSelector() {
    const selector = document.getElementById('logo_selector');
    selector.classList.toggle('logo_selector_visible');
}


function selectLogo(imgElement) {
    selectedLogoId = imgElement.alt;
    picker.style.backgroundImage = `url('${imgElement.src}')`;
    picker.style.backgroundSize = 'cover';
}


document.querySelector(".save_edit").onclick = function() {
    const dane = { 
        nazwa: input_nazwa_edit.value,
        logo_id: selectedLogoId 
    };
    logoID = selectedLogoId
    sciezka = `../images/assets/stationlogo${logoID}.png`
    console.log(sciezka)
    document.querySelector('.station_logo_img').src = sciezka;

    fetch('../php/save_station_logo.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dane)
    })
    .then(response => response.text())
    .then(data => {
        console.log("Serwer:", data);
    })
    .catch(error => console.error('Błąd zapisu:', error));
};


window.onclick = function(event) {
    if (!event.target.matches('.logo_picker') && !event.target.closest('.logo_selector_hidden')) {
        const selector = document.getElementById('logo_selector');
        if (selector) {
            selector.classList.remove('logo_selector_visible');
        }
    }
};


let edit_btn = document.querySelector(".edit_btn")
let edit_panel = document.querySelector(".edit_panel")
let antyclick_edit = document.querySelector(".antyclick_editpanel")
let close_edit = document.querySelector(".close_edit")

edit_btn.addEventListener("click", () => {
    edit_panel.style.display = "flex"
    antyclick_edit.style.display = "block"
})

close_edit.addEventListener("click", () => {
    edit_panel.style.display = "none"
    antyclick_edit.style.display = "none"
})
let station_name_logo = document.querySelector(".station_name_logo")

fetch('../php/get_station_name.php')
    .then(response => response.json())
    .then(data => {
        if (data && data.station_name) {
            console.log("Dane odebrane:", data.station_name);
            input_nazwa_edit.value = data.station_name;
            station_name_logo.innerHTML = data.station_name
        } else {
            console.log("Baza danych jest pusta lub ID 1 nie istnieje.");
        }
    })
    .catch(error => {
        console.error('Błąd połączenia lub błąd w pliku PHP:', error);
    });

let save_edit = document.querySelector(".save_edit")

let alert = document.querySelector(".alert")




save_edit.addEventListener("click", () => {
    input_nazwa_edit.addEventListener("input", () => {
        alert.style.display = "none"
    })
    let name_now = input_nazwa_edit.value
    if (name_now.length >=4 && name_now.length <=10){
        
        const dane = { nazwa: name_now};
        station_name_logo.innerHTML = name_now
        fetch('../php/save.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dane)
        })
        .then(response => response.text())
        .then(data => console.log(data));
    } else {
        alert.style.display = "block"
    }
})


let station_logos_tab = ['stationlogo1.png', 'stationlogo2.png', 'stationlogo3.png', 'stationlogo5.png']
let logoID
let station_logo_img = document.querySelector('.station_logo_img');
let sciezka

fetch('../php/get_station_logo.php')
  .then(response => response.json())
  .then(data => {
    logoID = data.station_logo_id
    sciezka = `../images/assets/stationlogo${logoID}.png`
    console.log(sciezka)
    document.querySelector('.station_logo_img').src = sciezka;
    if (logoID==99){
        document.querySelector('.station_logo_img').src = `../images/assets/nologo.png`;
    }
  })
  .catch(error => console.error('Błąd podczas pobierania danych:', error));

let reputacja

fetch('../php/get_station_reputation.php')
  .then(response => response.json())
  .then(data => {
    reputacja = data.station_reputation
    let stars = document.querySelectorAll(".fa-star")

stars.forEach((star, index) => {
    if (reputacja>0.5){
        star.className = 'fa-solid fa-star';
        star.style.color = 'rgb(255, 212, 59)'
        reputacja--
    } else if (reputacja==0.5){
        star.className = 'fa-solid fa-star-half-stroke';
        star.style.color = 'rgb(255, 212, 59)'
        reputacja-=0.5
    } else {
        star.className = 'fa-solid fa-star';
        reputacja = 0
    }
})
  })
  .catch(error => console.error('Błąd podczas pobierania danych:', error));





const MILISEKUND_NA_MINUTE = 1000;

        let h = 0;
        let m = 0;

        function tick() {
            m++;
            if (m >= 60) {
                m = 0;
                h++;
            }
            if (h >= 24) h = 0;

            const displayH = String(h).padStart(2, '0');
            const displayM = String(m).padStart(2, '0');
            document.getElementById('time').textContent = `${displayH}:${displayM}`;
        }
        setInterval(tick, MILISEKUND_NA_MINUTE);


        
let OpCl = document.querySelector(".OpCl")
let OpCl_p = document.querySelector(".OpCl_p")
let is_opened = 0

OpCl.addEventListener("click", () => {
    if (is_opened ==0){
        is_opened = 1
        OpCl_p.style.color = "green"
        OpCl_p.style.textShadow = '0 0 2px green';
    } else if (is_opened==1){
        is_opened = 0
        OpCl_p.style.color = "red"
        OpCl_p.style.textShadow = '0 0 2px red';
    }
})