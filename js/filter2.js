function filterVer() {
    var select, ul, li, category;
    select = document.getElementById('versionSelect');
    ul = document.getElementsByClassName('myVer');
    li = ul.getElementsByClassName('div');
    category = select.value;


    for (var i = 0; i < li.length; i++) {
      var dataCategory = li[i].getAttribute('ver-category');

      if (categoryy === 'tutte' || dataCategory === category) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
  }