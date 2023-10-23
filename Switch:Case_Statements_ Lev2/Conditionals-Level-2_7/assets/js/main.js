// JS Assets:

/* <b>Brief und Postkarte</b> <br>
    	L: 10 - 23,5 cm
    	B: 7 - 12,5 cm
    	H: bis 1 cm

<b>DHL Paket 2 kg</b> <br>
      bis 60 x 30 x 15 cm

<b>DHL Paket 5 kg</b> <br>
      bis 120 x 60 x 60 cm

<b>DHL Paket 10 kg</b> <br>
      bis 120 x 60 x 60 cm

"<b>Extra große Größe</b> */

function showtxt() {
  console.log("works");

  const mylist = document.getElementById("mylist");

  const masseTitle = document.getElementById("masseTitle");
  const masse = document.getElementById("masse");

  switch (mylist.value) {
    case "0":
      masseTitle.innerHTML = `<b>Brief und Postkarte</b>`;
      masse.textContent = "L: 10 - 23,5 cm B: 7 - 12,5 cm H: bis 1 cm";
      break;
    case "1":
      masseTitle.innerHTML = `<b>DHL Paket 2 kg</b>`;
      masse.textContent = "bis 60 x 30 x 15 cm";
      break;
    case "2":
      masseTitle.innerHTML = `<b>DHL Paket 5 kg</b>`;
      masse.textContent = "  bis 120 x 60 x 60 cm";
      break;
    case "3":
      masseTitle.innerHTML = `<b>DHL Paket 10 kg</b>`;
      masse.textContent = "bis 120 x 60 x 60 cm";
      break;
    default:
      masse.textContent = "Extra große Größe";
  }
}
