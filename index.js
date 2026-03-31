const attendee = {
  attendeeId: 'T001',
  name: 'Alice Smith',
  event: 'JavaScript Conference',
  ticketType: 'VIP',
  ticketPrice: 150.00
};

function logAttendeeName(attendeeObject) {
  console.log(attendeeObject.name);
}

function logTicketPrice(attendeeObject) {
  console.log(attendeeObject.ticketPrice);
}

function updateTicketType(attendeeObject, newTicketType) {
  attendeeObject.ticketType = newTicketType;
}

function updateTicketPrice(attendeeObject, newTicketPrice) {
  attendeeObject.ticketPrice = newTicketPrice;
}

function removeEventProperty(attendeeObject) {
  delete attendeeObject.event;
}

function addCheckedInProperty(attendeeObject) {
  attendeeObject.checkedIn = true;
}

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};
