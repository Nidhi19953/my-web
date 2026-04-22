const quotes = [
  "The moon is a loyal companion.",
  "Stars can’t shine without darkness.",
  "In the calm of night, we find ourselves.",
  "The moon understands what the heart feels.",
  "Silence speaks under the moonlight."
];

function changeQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[random];
}