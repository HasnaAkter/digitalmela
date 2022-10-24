document.getElementById ("visitorRegistration").addEventListener ("click", visitorRegistration, false);
document.getElementById ("seminarRegistration").addEventListener ("click", seminarRegistration, false);

function visitorRegistration() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var gender = document.getElementById("gender").value;

    var profession = document.getElementById("profession").value;
    var organisation = document.getElementById("organisation").value;

   // if (name == '' || email == '' || mobile == '' || gender == '' || profession == ''|| organisation == '') {
    if (name.trim() == '' ) {
        alert("Name is required");
        document.getElementById("name").focus();
    }
    else if (email.trim() == '') {
        alert("Email is required");
        document.getElementById("email").focus();
    }
    else if (mobile.trim() == '') {
        alert("Mobile is required");
        document.getElementById("mobile").focus();
    }
    else if (profession.trim() == '') {
        alert("Select your profession");
        document.getElementById("profession").focus();
    }
    else {

        var dataString = 'name=' + name.trim() + '&email=' + email.trim() + '&mobile=' + mobile.trim() + '&gender=' + gender.trim() + '&profession=' + profession.trim() + '&organisation=' + organisation.trim();
            $.ajax({
                type: "POST",
                url: "visitorRegistration.php",
                data: dataString,
                cache: false,
                success: function(html) {
                    alert(html);
                    location.reload();
                }
            });



    }
    return false;
}

function seminarRegistration() {
    var name = document.getElementById("select_name").value;
    var email = document.getElementById("select_email").value;
    var mobile = document.getElementById("select_mobile").value;
    var gender = document.getElementById("select_gender").value;

    var profession = document.getElementById("select_profession").value;
    var organisation = document.getElementById("select_organisation").value;
    var select_seminar = document.getElementById("select_seminar").value;
    var hall_name = document.getElementById("hall_name").value;
    var seminar_time = document.getElementById("seminar_time").value;

    // if (name == '' || email == '' || mobile == '' || gender == '' || profession == ''|| organisation == '') {
    if (name.trim() == '' ) {
        alert("Name is required");
        document.getElementById("select_name").focus();
    }
    else if (email.trim() == '') {
        alert("Email is required");
        document.getElementById("select_email").focus();
    }
    else if (mobile.trim() == '') {
        alert("Mobile is required");
        document.getElementById("select_mobile").focus();
    }
    else if (profession.trim() == '') {
        alert("Select your profession");
        document.getElementById("select_profession").focus();
    }
    else if (select_seminar.trim()== '') {
        alert("Please select seminar");
        document.getElementById("select_seminar").focus();
    }else {

        var dataString = 'name=' + name.trim() + '&email=' + email.trim() + '&mobile=' + mobile.trim() +
            '&gender=' + gender.trim() + '&profession=' + profession.trim() + '&organisation=' + organisation.trim()+
            '&select_seminar=' + select_seminar.trim()+
            '&hall_name=' + hall_name.trim()+
            '&seminar_time=' + seminar_time.trim();
        $.ajax({
            type: "POST",
            url: "seminarRegistration.php",
            data: dataString,
            cache: false,
            success: function(html) {
                alert(html);
                location.reload();
            }
        });



    }

    return false;
}

// AJAX code to check input field values when onblur event triggerd.
function validate(field, query) {
    var xmlhttp;
    if (window.XMLHttpRequest) { // for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState != 4 && xmlhttp.status == 200) {
            document.getElementById(field).innerHTML = "Validating..";
        } else if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById(field).innerHTML = xmlhttp.responseText;
        } else {
            document.getElementById(field).innerHTML = "Error Occurred. <a href='index.php'>Reload Or Try Again</a> the page.";
        }
    }
    xmlhttp.open("GET", "validation.php?field=" + field + "&query=" + query, false);
    xmlhttp.send();
}

function seminarRegistrationModal(hall_string,time_string,seminar_string){
   // alert(hall_string);
   //// alert(time_string);
   // alert(seminar_string);

 document.getElementById("select_seminar").value = seminar_string.trim();
document.getElementById("hall_string").innerHTML = '<strong>'+hall_string+'</strong> &nbsp;&nbsp;'.trim();
document.getElementById("hall_name").value = hall_string.trim();
document.getElementById("time_string").innerHTML = time_string.trim();
document.getElementById("seminar_time").value = time_string.trim();

    $('#seminar_registration2').modal('show');
}