function fix_string(str)
{
    var out = "";
    // read single character
    for(var i = 0; i < str.length; ++i) {
        var c = str.charCodeAt(i);
        // m is defined from map.js
        if(c in m) { out += String.fromCharCode(m[c]); }
        else { out += str.charAt(i); }
    }

    return out;
}

function blur_event()
{
    var input  = document.getElementById("input_text");
    var output = document.getElementById("output_text");
    output.value = fix_string(input.value);
}
