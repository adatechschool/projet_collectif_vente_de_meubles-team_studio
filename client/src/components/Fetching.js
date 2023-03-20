export function Fetching() {
    const getFurnitures = async () => {
      const res = await fetch("http://localhost:9000/furnitures", {
            type: "GET",
        });
        return await res.json();
    };
  
    return {
      getFurnitures,
    };
  }
