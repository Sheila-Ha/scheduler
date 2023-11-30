  
   // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
  // the code isn't run until the browser has finished rendering all the elements
  // in the html.
  $(document).ready(function(){
    // $("button").click(function(){
    //   $("p").wrapAll("<div></div>");
  
    // TODO: Add code to display the current date in the header of the page.
  const currentDate = dayjs(); 
  const formattedDate = currentDate.format('ddd MMM D, YYYY HH:mm:ss A');
  $('#currentDay').text(formattedDate);
    
    //TODO: When I scroll down, then I'm presented with time blocks for 9-5pm
      //as you scroll down the time blocks are seen
    //TODO: I view the time blocks for that day, then each time block is 
    // color-coded to indicate whether it is in the past, present, or future
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    $('.time-block').each(function(index) {
      var blockHour = $(this).attr('id').replace('hour-', '');
      var currentHour = dayjs().hour();
      //if time is greater than the block time add past color
      if (currentHour>blockHour) {
        $(this).removeClass('present future').addClass('past');
      }
      else if (currentHour==blockHour) {
        $(this).removeClass('past future').addClass('present');
      }
    });
  
 
  // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. 
    // HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
  


  

  // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    $('.saveBtn').on('click', function() {
      var text = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');
      // console.log('test');
      // console.log(text);
      // console.log(time);
  });

});
