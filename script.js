// ***FIRST LINE WRAPS**** all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // made a var that references day.js as shorthand
  var today = dayjs();

  // Displays the current date and time in the header p tag with ID of "currentDay"
  $('#currentDay').text(today.format('MMMM D, YYYY h:mm a'));

  // added event listener for saveBtn class within each time div
  $('.saveBtn').on('click', function () {
    // made new var that references the input from the sibling html description attribute
    var textInput = $(this).siblings('.description').val();
    // made new var that references the parent html id attribute
    var timeKey = $(this).parent().attr("id");

    //sets items to store in local storage
    localStorage.setItem(timeKey, textInput)
  })
  

  //loads any saved data from LocalStorage for each hour from in html
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  
  function hourTracker() {
    //gets current hour
    var currentHour = today.hour(); 
    
    // loops over each div with the time block ID
    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);
    

      // if the time ID is before the current hour, add the past class from CSS
      if (blockHour < currentHour) {
        $(this).addClass('past');
        $(this).removeClass("future");
        $(this).removeClass("present");
     } // if the time ID is equal to the current hour, remove the past and future classes & add the present class
      else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
      } // If the time ID is greater than the current time, remove the past and present classes & add the future class
      else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }
  //calls the hour tracker function to execute
  hourTracker();

  // Use setTimeout to update the time every minute (1000ms * 60s)
  setTimeout(function () {
    // clears the current URL
    location = ''; // location references the current URL
  }, 1000 * 60);
});

