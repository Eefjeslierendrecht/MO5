const getData = async function () {
    const apiUrl = `https://tronalddump.io/random/quote`;
    try {
        const res = await fetch(apiUrl, { method: "GET" });
        const data = await res.json();      
        return data;
    } catch (error) {
        console.log(error);
    }
  };
