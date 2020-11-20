export const getLandlordFromAddress = (address) => {
  return fetch("http://127.0.0.1:5000/landlord_from_address", {
    method: "POST",
    body: JSON.stringify(address),
  })
};
