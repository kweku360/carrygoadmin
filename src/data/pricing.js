import { serverUrl } from "../utils/server";

export const savePricing = (data) => {
  console.log(data);

  const body = JSON.stringify({
    type: "service",
    servicename: data.service,
    providerid: "none",
    rateperkm: data.rateperkm,
    fixedprice: data.fixedprice,
    duration: "request",
  });
  const p = fetch(`${serverUrl()}/api/pricing`, {
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

export const allPricing = () => {
  const p = fetch(`${serverUrl()}/api/pricing/all`, {
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
