function getURL(e){
    const pageURL = window.location.search.substring(1);
    const urlVariabel = pageURL.split('&');

    for(let i = 0; i < urlVariabel.length; i++){
        const parameterName = urlVariabel[i].split('=');
        if(parameterName [0] == e){
            return parameterName[1];
        }
    }
}
const nomorSurat = getURL('nomorsurat');

function getSurat(){
    fetch(`https://equran.id/api/surat/${nomorSurat}`)
    .then(response => response.json())
    .then(response => {
        // change title start
        const titleSurat = document.querySelector('#title-surat');
        titleSurat.textContent=`${response.nama}`;
        // end
        // changed navbar
        const navSurat = document.querySelector('.header');
        navSurat.innerHTML = `${response.nama_latin}`
        // end




            // judul surat start
        const judulSurat = document.querySelector('.judul-surat');
        const cardJudulSurat =
       `<b>${response.nama_latin} - ${response.nama}</b>
        <p>jumlah ayat:${response.jumlah_ayat} <br>Arti Surat: <b>${response.arti}</b></p>
        <button class="btn btn-primary audio-button-play surat"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
            </svg>
            <b>PLAY</b>
       </button>
       <button class="btn btn-danger audio-button-pause hidden-button surat"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stop-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3z"/>
            </svg>
            <b>STOP</b>
       </button>
       <audio id="audio-tag" src="${response.audio}"></audio>
       `
       ;
       judulSurat.innerHTML=cardJudulSurat;
        // end

        // isi surat start
        const surat = response.ayat;
        let isiSurat = '';
        surat.forEach(s => {
            isiSurat+=`
            <div class="card mb-4 mt-4 surat">
                <div class="card-body">
                    <p>${s.nomor}</p>
                    <h3 class="text-end">${s.ar}</h3>
                    <p>${s.tr}</p>
                    <p>${s.idn}</p>
                </div>
            </div>
            `;
        });
        const cardIsiSurat=document.querySelector('.card-isi-surat')
        cardIsiSurat.innerHTML = isiSurat;
        // end 


        // play and pause 
        const buttonPLay= document.querySelector('.audio-button-play')
        const buttonPause= document.querySelector('.audio-button-pause')
        const audioSurat= document.querySelector('#audio-tag')

        // play division
        buttonPLay.addEventListener('click', function(){
            audioSurat.play();
        })
        buttonPause.addEventListener('click', function(){
            audioSurat.pause()  
        })



        console.log(surat);
    });
}
getSurat();



