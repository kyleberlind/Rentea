export const getLandlordByAddress = (address) => {
  return fetch(
    `http://127.0.0.1:5000/get_landlord_by_address?address=${address}`
  );
};

export const addLandlordReviewByAddress = (formattedAddress, landlordData) => {
  const reviewData = { formattedAddress, landlordData };
  return fetch(`http://127.0.0.1:5000/add_landlord_review_by_address`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reviewData),
  });
};
