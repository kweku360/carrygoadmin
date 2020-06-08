export const verifyLogin = (username, password) => {
  const body = JSON.stringify({
    username: username,
    password: password,
  });
  const p = fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body,
  })
    .then(async (response) => {
      const data = await response.json();
      // check for error response
      if (response.ok) {
        console.log(data);
        return Promise.resolve(data);
      }
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });

  return p;
};
