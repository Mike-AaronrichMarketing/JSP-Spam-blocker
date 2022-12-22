


// We are allowing 0 urls or regular expressions that can be changed from this site. https://uibakery.io/regex-library/url


        var allowed = 0; //allowed times
        var regex = /(http|https|ftp|www):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i; //match url

        $('#message').on('input', function () { // match the ID to the field on the form being used
            var textArea = $(this).val().match(regex); // search string
            if (textArea && textArea.length > allowed) { // capture the textarea and the length of the expression
                $('#submit').prop("disabled", true); // disable submit button 
            } else {
                $('#submit').prop("disabled", false); // if no regular expression matches it will not disable the submit button 
            }
        });
  
  
    
    // This function targets the amount of characters on that are allowable on the contact form. 
    
        $('#message').keypress(function () {
            var maxLength = $(this).val().length;
            if (maxLength >= 200) {
                alert('You cannot enter more than ' + maxLength + ' chars');
                return false;
            }
        });
 
	
  // This will prevent the option to copy and paste into the field ID
  
        $('#message').bind('copy paste', function (e) {
            e.preventDefault();
        });

