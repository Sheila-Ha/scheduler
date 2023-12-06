  
  // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
  // the code isn't run until the browser has finished rendering all the elements
  // in the html.
  var appointments = JSON.parse(localStorage.getItem('appointments'))||[];
  $(document).ready(function(){
    $(appointments).each(function(index) {
      //console.log(this.text + ' ' + this.time);
      //on page load, app finds any appointments stored in local storage
      //loops through to populate scheduler
      $('#' + this.time + ' textarea').val(this.text);
    });
  // Added code to display the current date in the header of the page.
  const currentDate = dayjs(); 
  const formattedDate = currentDate.format('ddd MMM D, YYYY HH:mm:ss A');
  $('#currentDay').text(formattedDate);
    
    // Added code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour.
    $('.time-block').each(function(index) {
      var blockHour = $(this).attr('id').replace('hour-', '');
      var currentHour = dayjs().hour();
      //if current hour is greater than the block hour = grey
      if (currentHour>blockHour) {
        $(this).removeClass('present future').addClass('past');
      }
      //if current hour is equal to block hour = red
      else if (currentHour==blockHour) {
        $(this).removeClass('past future').addClass('present');
      }
      //if current hour is before block hour = green
      else {
        $(this).removeClass('past present').addClass('future');
      }
    });

  // Added code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.
    $('.saveBtn').on('click', function() {
      var appointmentText = $(this).siblings('.description').val();
      var appointmentTime = $(this).parent().attr('id');
      var appointment = {
        text: appointmentText,
        time: appointmentTime
      }

      //saving appointment to local storage
      appointments.push(appointment);
      localStorage.setItem('appointments', JSON.stringify(appointments));
      // console.log('test');
      // console.log(text);
      // console.log(time);
  });

});
