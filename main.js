import './style.css';

const tableBody = document.getElementById('table-body');

let flights = [
  {
    time: "08:11",
    destination: "OMAN",
    flight: 'OX 203',
    gate: "A 01",
    remarks: 'ON TIME'
  },
  {
    time: "08:11",
    destination: "TURKEY",
    flight: 'FC 203',
    gate: "Z 25",
    remarks: 'DELAYED'
  },
  {
    time: "10:41",
    destination: "USA",
    flight: 'BK 154',
    gate: "C 09",
    remarks: 'ON TIME'
  },
  {
    time: "08:11",
    destination: "USA",
    flight: 'ZA 3546',
    gate: "F 123",
    remarks: 'ON TIME'
  },
  {
    time: "15:11",
    destination: "CANADA",
    flight: 'ABC 4040',
    gate: "H 56",
    remarks: 'DELAYED'
  },
];

const destination = ["KENYA", "EGYPT", "GHANA", "FRANCE", "LONDON"]
const remarks = ["ON TIME", "DELAYED", "CANCELLED"];
let hour = 15;

function populateTable() {
  for (const flight of flights) {
    const tableRow = document.createElement("tr");

    for (const flightDetail in flight) {
      const tableCell = document.createElement("td");
      const words = Array.from(flight[flightDetail]);
      for (const [index, letter] of words.entries()) {
        const letterElement = document.createElement('div');

        setTimeout(() => {
          letterElement.classList.add('flip');
          letterElement.textContent = letter;
          tableCell.append(letterElement);
        }, 100 * index);
      }
      tableRow.append(tableCell);
    }
    tableBody.append(tableRow);
  }
}

populateTable();

function generateRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}

function generateRandomNumber(maxNumber) {
  const number = "0123456789";

  if (maxNumber) {
    const newNumbers = number.slice(0, maxNumber);
    return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length))
  }
  return number.charAt(Math.floor(Math.random() * number.length))
}

function generateTime() {
  let displayHour = hour;
  if (hour < 24) {
    hour++;
  }

  if (hour >= 24) {
    hour = 1;
    displayHour = hour;
  }

  if (hour < 10) {
    displayHour = "0" + hour;
  }

  return displayHour + ":" + generateRandomNumber() + ":" + generateRandomNumber();
}

function shuffleUP() {
  flights.shift();
  flights.push({
    time: generateTime(),
    destination: destination[Math.floor(Math.random() * destination.length)],
    flight: generateRandomLetter() + generateRandomLetter() + " " + generateRandomNumber(),
    gate: generateRandomLetter() + " " + generateRandomNumber(),
    remarks: remarks[Math.floor(Math.random() * remarks.length)]
  })
  tableBody.textContent = ""
  populateTable()
}

setInterval(shuffleUP, 5000)