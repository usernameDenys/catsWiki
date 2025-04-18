const API_KEY =
  "live_0fQW4VM47ewwAPvZAupmZMFDPsjEmXybsIFuBmC4Wg5k7tpgyn8TtoJVgVzn3hLT";
const BASE_URL = "https://api.thecatapi.com/v1";

export async function getBreeds() {
  const res = await fetch(`${BASE_URL}/breeds`, {
    headers: {
      "x-api-key": API_KEY,
    },
  });
  return res.json();
}

export async function getCatsImagesByBreed(breed_id, amount) {
  const res = await fetch(
    `${BASE_URL}/images/search?breed_ids=${breed_id}&limit=${amount}`,
    {
      headers: {
        "x-api-key": API_KEY,
      },
    }
  );
  return res.json();
}
