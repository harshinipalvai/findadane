var global_obj = function() {

    var input_label = function(type_of_input, span_value, parent_element) {
        var input_element = parent_element.querySelector(type_of_input);
        var span_element = parent_element.querySelector("span");
        input_element.addEventListener("change", function() {
            if (input_element.value.length > 0) {
                span_element.classList.add("span_elem_class");
                span_element.textContent = span_value;
            } else {
                span_element.classList.remove("span_elem_class");
                span_element.textContent = "";
            }
        });
        input_element.addEventListener("keyup", function() {
            if (input_element.value.length > 0) {
                span_element.classList.add("span_elem_class");
                span_element.textContent = span_value;
            } else {
                span_element.classList.remove("span_elem_class");
                span_element.textContent = "";
            }
        })

    };

    /*
    var set_caret_position = function(elem, start, end) {
        if (elem.setSelectionRange) {
            elem.focus();
            elem.setSelectionRange(start, end);
        }
    };*/

    var toggle_show_password = function(elem, img_elem) {
        if (elem.type === "password") {
            elem.type = "text";
            img_elem.src = "https://dane-imran.appspot.com/imgs/eye.png";
        } else {
            elem.type = "password";
            img_elem.src = "https://dane-imran.appspot.com/imgs/eye-off.png";
        }
    };

    var send_request = function() {

    };

    var pop_toast = function(message, duration) {
        console.log("triggering toast");
        var durationActive = duration;
        var toastDiv = document.createElement('DIV');
        toastDiv.setAttribute('id', 'mirToastDiv');
        toastDiv.setAttribute('style', 'transition: all 0.2s linear;background-color: #edba32 ;width : 350px;font-size:1.2rem;padding:8px;text-align: center;color: #48116D;position: fixed; top:5%; right: 2%;opacity: 0;transition: opacity 0.3s, top 0.4s;');
        var toastMessage = document.createTextNode(message.toString());
        toastDiv.appendChild(toastMessage);
        document.getElementsByTagName('body')[0].appendChild(toastDiv);

        var in_transition_duration = 200;
        var out_transition_duration = 400;
        durationActive += in_transition_duration + out_transition_duration;

        setTimeout(function() {
            toastDiv.style.top = '10%';
            toastDiv.style.opacity = '1';
            setTimeout(function() {
                toastDiv.style.top = '15%';
                toastDiv.style.opacity = '0';
                setTimeout(function() { document.getElementsByTagName('body')[0].removeChild(toastDiv); }, durationActive + 1800);
            }, durationActive);
        }, in_transition_duration);
    };

    var title_case = function(string_name) {
        if (string_name !== null && typeof(string_name) === "string") {
            var string_name_array = string_name.split(' ');
            for (var i = 0; i < string_name_array.length; i++) {
                string_name_array[i] = string_name_array[i].charAt(0).toUpperCase() + string_name_array[i].substr(1);
                var hyphen_case_split = string_name_array[i].split("-");
                if (hyphen_case_split.length > 1) {
                    for (var j = 0; j < hyphen_case_split.length; j++) {
                        hyphen_case_split[j] = hyphen_case_split[j].charAt(0).toUpperCase() + hyphen_case_split[j].substr(1);
                    }
                    string_name_array[i] = hyphen_case_split.join("-");
                }
            }
            var titleCase_string = string_name_array.join(' ');
            return titleCase_string;
        } else {
            console.log("Only string can be processed");
        }
    };

    return {
        input_label: input_label,
        toggle_show_password: toggle_show_password,
        pop_toast: pop_toast,
        title_case: title_case
    }
}();