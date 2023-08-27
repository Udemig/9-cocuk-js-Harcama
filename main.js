const form = document.querySelector('form');
const list = document.querySelector('ul');

// formun gönderilme olayını izleme
form.addEventListener('submit', addExpense);

// listede tıklanma olaylarını izler
list.addEventListener('click', handleDelete);

// harcamayı listeye ekler
function addExpense(event) {
  // sayfayı yenilemyi engelle
  event.preventDefault();

  // inputtaki değerlere erişme
  const title = event.target[0].value;
  const price = event.target[1].value;

  // form boşmu kontrol etme
  if (title === '' || price === '') {
    alert('Lütfen formu doldurun');
    // fonksiyonu durdur
    return;
  }

  // li elementi oluştur
  const liElement = document.createElement('li');

  // içeriğini değiştirme
  liElement.innerHTML = `
          <h3>${title}</h3>
          <h3>${price} &#8378;</h3>
          <button id="delete">Sil</button>
   `;

  // html'deki listeye gönderme
  list.appendChild(liElement);

  // inputları temizleme
  event.target[0].value = '';
  event.target[1].value = '';
}

// eğerki tıklanılan eleman sil butonuysa
// onun kartını siler
function handleDelete(event) {
  const element = event.target;

  // sil butonuna tıklanma olayında çalışır
  if (element.id === 'delete') {
    // butonun kapsayıcısına erişme
    const parent = element.parentElement;
    // ekrandan kaldırma
    parent.remove();
  }
}
