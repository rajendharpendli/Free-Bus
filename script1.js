let isSeatAvailable = prompt(`Is seat is available?`);
if (isSeatAvailable.toLowerCase() == "yes") {
  console.log("seatAvailable");
  let isAgeAbove50 = prompt(`Is your age above 50 years?`);
  if (isAgeAbove50.toLowerCase() == "yes") {
    console.log("ageAbove50");
    let hasAadharCard = prompt("do you hava aadhar card?");
    if (hasAadharCard.toLowerCase() == "yes") {
      console.log("aadharcard");
      alert("please come inside the bus");
    } else {
      console.log("don't have any aadharcard");
    }
  } else {
    console.log("your age is  below 50");
  }
} else {
  console.logh("don't have any available seats");
}
