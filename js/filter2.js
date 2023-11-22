function filterList() {
    var select, ul, li, category;
    select = document.getElementById('versionSelect');
    ul = document.getElementById('myList');
    li = ul.getElementsByTagName('div');
    category = select.value;

    // Mostra o nascondi gli elementi in base alla categoria selezionata
    for (var i = 0; i < li.length; i++) {
      var dataCategory = li[i].getAttribute('data-category');

      if (category === 'tutte' || dataCategory === category) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
  }