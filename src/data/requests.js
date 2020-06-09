export const allRequests = (type) => {
  const p = fetch("http://localhost:3000/api/requests/" + type, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then(async (response) => {
      const data = await response.json();
      // check for error response
      if (response.ok) {
        console.log(data);
        return Promise.resolve(data.payload);
      }
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });

  return p;
};

export const getRequest = (uid) => {
  const p = fetch(`http://localhost:3000/api/request/${uid}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then(async (response) => {
      const data = await response.json();
      // check for error response
      if (response.ok) {
        console.log(data);
        return Promise.resolve(data.payload);
      }
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });

  return p;
};
