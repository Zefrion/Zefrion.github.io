function ricerca() {
    var input; 
    var filtro;
    var lista;
    var voci;
    var x;
    var i;
    var testo;
    var resto;
      input = document.getElementById("barra-ricerca");
      filtro = input.value.toUpperCase();
      lista = document.getElementById("elenco");
      voci = lista.getElementsByTagName("h5");
      resto = lista.getElementsByTagName("mer");
      for (i = 0; i < voci.length; i++) {
        x = lista.getElementsByTagName("h5")[i];
        testo = x.textContent || x.innerText;
        if (testo.toUpperCase().indexOf(filtro) > -1) {
          voci[i].style.display = "";
        } else {
          voci[i].style.display = "none";
        }
        if (testo.toUpperCase().indexOf(filtro) > -1) {
            resto[i].style.display = "";
          } else {
            resto[i].style.display = "none";
          }
      }
    }