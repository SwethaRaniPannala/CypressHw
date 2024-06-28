import { BookingPage } from "../Pages/BookingTicketPage";

//import { bookingElements } from "../Elements/BookingTicketElements";


const bookingPage = new BookingPage();

describe('Dummy Ticket Booking', function()  {
  /*before(() => {
    bookingPage.visit();
  });*/
  before(function()  {
    cy.fixture('bookingData').then(function(data)  {
      this.data = data;
    });
  });
  

  it('should book a dummy ticket successfully', function() {

    bookingPage.visit();

    /*bookingPage.fillBookingForm(
      'Sai',
      'Rao',
      'New York',
      'Los Angeles',
      '1234567890',
      'sai.rao@gmail.com',
      'Japan',
      'dsnl 2',
      '45678',
      'Hyd'
      
    );*/

    bookingPage.fillBookingForm(
      this.data.firstName,
      this.data.lastName,
      this.data.fromCity,
      this.data.toCity,
      this.data.phoneNumber,
      this.data.email,
      this.data.countryname,
      this.data.address,
      this.data.postalno,
      this.data.cityaddress
    );

    
});
});

