export const domain = "https://socialapp-api.herokuapp.com";

export const jsonHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const handleJsonResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((result) => {
    throw result;
  });
};
