function check() {
  //   console.log("works");
  event.preventDefault();
  const bundeslandInfo = document.getElementById("bundeslandInfo");
  const bundeslandInfoErgebnis = document.body.querySelector(
    "#bundeslandInfoErgebnis"
  );
  switch (bundeslandInfo.value) {
    case "Baden-Württemberg":
      bundeslandInfoErgebnis.textContent = `${bundeslandInfo.value} hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt `;
      break;
    case "Bayern":
      bundeslandInfoErgebnis.textContent = `${bundeslandInfo.value} hat 12,844 Mio Einwohner und München ist die Hauptstadt `;
      break;
    case "Berlin":
      bundeslandInfoErgebnis.textContent = `${bundeslandInfo.value} hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt `;
      break;
    case "Brandenburg":
      bundeslandInfoErgebnis.textContent = `${bundeslandInfo.value} hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt`;
      break;
    case "Bremen":
      bundeslandInfoErgebnis.textContent = `${bundeslandInfo.value} hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt`;
      break;
    case "Hamburg":
      bundeslandInfoErgebnis.textContent = `${bundeslandInfo.value} hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt`;
      break;
    case "Hessen":
      bundeslandInfoErgebnis.textContent = `${bundeslandInfo.value} hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt `;
      break;
    case "Mecklenburg-Vorpommern":
      bundeslandInfoErgebnis.textContent = `${bundeslandInfo.value} hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt `;
      break;
    case "Niedersachsen":
      bundeslandInfoErgebnis.textContent = `${bundeslandInfo.value} hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt `;
      break;
    case "Nordrhein-Westfalen":
      bundeslandInfoErgebnis.textContent = `${bundeslandInfo.value} hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt `;
      break;
    case "Rheinland-Pfalz":
      bundeslandInfoErgebnis.textContent = `${bundeslandInfo.value} hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt `;
      break;
    case "Saarland":
      bundeslandInfoErgebnis.textContent = `${bundeslandInfo.value} hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt `;
      break;
    case "Sachsen":
      bundeslandInfoErgebnis.textContent = `${bundeslandInfo.value} hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt `;
      break;
    case "Sachsen-Anhalt":
      bundeslandInfoErgebnis.textContent = `${bundeslandInfo.value} hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt `;
      break;
    case "Schleswig-Holstein":
      bundeslandInfoErgebnis.textContent = `${bundeslandInfo.value} hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt `;
      break;
    case "Thüringen":
      bundeslandInfoErgebnis.textContent = `${bundeslandInfo.value} hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt `;
      break;
    default:
      bundeslandInfoErgebnis.textContent = ` Ein solches Bundesland gibt es in Deutschland nicht.`;
  }
}
