export async function getVans() {

  const response = await fetch("/api/vans");

  if (!response.ok) {
    console.log("Error")
    throw {
      message: "Failed to fetch data",
      statusText: response.statusText,
      status: response.status
    }
  }
  const data = await response.json();
  return data.vans;
}
