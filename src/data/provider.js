export const searchProvider = (searchString) => {
  const body = JSON.stringify({
    search: searchString,
  });
  const p = fetch("http://localhost:3000/api/serviceproviders/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body,
  })
    .then(async (response) => {
      const data = await response.json();
      // check for error response
      if (response.ok) {
        return Promise.resolve(data.payload);
      }
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });

  return p;
};

export const allProviders = () => {
  const p = fetch("http://localhost:3000/api/serviceproviders", {
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

export const getProvider = (uid) => {
  const p = fetch(`http://localhost:3000/api/serviceprovider/${uid}`, {
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

export const updateProvider = (uid, field, value) => {
  const body = JSON.stringify({
    uid: uid,
    field: field,
    value: value,
  });
  const p = fetch("http://localhost:3000/api/serviceprovider/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body,
  })
    .then(async (response) => {
      const datares = await response.json();
      // check for error response
      if (response.ok) {
        return Promise.resolve(datares);
      }
    })
    .catch((error) => {
      let err = { message: error };
      return Promise.resolve(err);
    });

  return p;
};

export const saveProvider = (data) => {
  console.log(data);
  const body = JSON.stringify({
    driverid: data.driverid,
    vehiclebrand: data.vehiclebrand,
    email: data.email,
    vehiclenumber: data.vehiclenumber,
    providerunion: data.agentunion,
    carrygopartner: data.carrygopartner,
    providerid: "12323",
    primarycontact: data.contact,
    profileimg: "null",
    location: data.location,
    description: data.notes,
    nationalid: data.nationalid,
    contactperson: data.fullname,
    image: "null",
  });
  const p = fetch("http://localhost:3000/api/serviceprovider/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body,
  })
    .then(async (response) => {
      const datares = await response.json();
      // check for error response
      if (response.ok) {
        return Promise.resolve(datares);
      }
    })
    .catch((error) => {
      let err = { message: error };
      return Promise.resolve(err);
    });

  return p;
};
