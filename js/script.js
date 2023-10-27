function getSurat(){
    fetch('https://equran.id/api/surat')
    .then(response => response.json())
    .then(response => {
    let cardSurat='';
    response.forEach(surat => {
    cardSurat+=`
    <div class=" mt- col-lg-3 col-md-4 col-sm-12 bg-secondary.bg-gradient">
    <div class="card mb-5 card-surat">
    <div class="card-body" onclick="location.href='surat.html?nomorsurat=${surat.nomor}'">
    <h5 class="card-title card-judul">${surat.nomor} ${surat.nama_latin}   ${surat.jumlah_ayat}</h5>
    <h3 class="card-subtitle mb-2 text-muted text-end"> ${surat.nama}</h3>
    <p class="card-text text-end">${surat.arti}</p>
    </div>
    </div>
    </div>`;
    
    
    });
    const listSurat= document.querySelector('.card-surat-list');
    listSurat.innerHTML = cardSurat;
    
    console.log(response)
    });
   }
   
   getSurat();





   