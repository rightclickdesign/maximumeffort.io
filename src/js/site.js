$(window).on('hashchange', function() {
    var hash = window.location.hash;
    var top = '0px';
    if (hash) {
        var id = hash.substring(2);
        top = $('#' + id).offset().top - 30 + 'px';
    }
    $('body').animate({scrollTop: top}, 500);
});

function isValidEmail(email) {
    var ampersandIndex = email.indexOf('@');
    if (ampersandIndex >= 1) {
        if (email.length > ampersandIndex) {
            var sub = email.substring(ampersandIndex + 1);
            var dotIndex = sub.indexOf('.');
            if (dotIndex > 0) {
                sub = sub.substring(dotIndex + 1);
                return sub.length > 0;
            }
        }
    }
    return false;
}

$(document).ready(function() {
    // setTimeout(function() {
    //     $('#title').addClass('show');
    //     setTimeout(function() {
    //         $('#slogan').addClass('show');
    //         $('#masthead-pic-wrapper').addClass('show');
    //     }, 200)
    // }, 300)

    $('#submit-contact').on('click', function() {
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        var subject = $('#subject').val();
        var hasError = false;

        if (!name) {
            $('#name').addClass('error');
            hasError = true;
        } else {
            $('#name').removeClass('error');
        }
        if (!email || !isValidEmail(email)) {
            $('#email').addClass('error');
            hasError = true;
        } else {
            $('#email').removeClass('error');
        }
        if (!message) {
            $('#message').addClass('error');
            hasError = true;
        } else {
            $('#message').removeClass('error');
        }

        if (hasError) {
            return;
        }

        $('#thank-you').show();
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
        $('#submit-contact').hide();

        // var url = 'https://rightclickdesign.agilecrm.com/dev/api/contacts';
        //
        // $.ajax({
        //     type: "POST",
        //     url: url,
        //     data: JSON.stringify({
        //     "star_value": "4",
        //     "lead_score": "92",
        //     "tags": [
        //         "Lead",
        //         "Likely Buyer"
        //     ],
        //     "properties": [
        //         {
        //             "type": "SYSTEM",
        //             "name": "first_name",
        //             "value": "Test"
        //         },
        //         {
        //             "type": "SYSTEM",
        //             "name": "last_name",
        //             "value": "Contact"
        //         },
        //         {
        //             "type": "SYSTEM",
        //             "name": "email",
        //             "subtype": "work",
        //             "value": "samson@walt.ltd"
        //         },
        //         {
        //             "type": "CUSTOM",
        //             "name": "My Custom Field",
        //             "value": "This is a message"
        //         }
        //     ]
        // }),
        //     success: function(data) {
        //         console.log(data);
        //     },
        //     //dataType: dataType
        // });

    })
})








