export async function getVans(id) {


  const url = id ? `/api/vans/${id}` : "/api/vans"

  const response = await fetch(url);

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


// export async function vanDetails() {


//   const response = await fetch("")

//   useEffect(() => {
//     const fetchedData = Axios.get(`/api/vans/${params.id}`).then((res) => {
//       setVanData(res.data.van);
//     });
//   }, []);



// }
