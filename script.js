$("#success-alert").hide();

$("#slash-dash").change(function() {
    if (this.checked) {
        $("#starting").val("//");
        $("#ending").val("//");
        $("#repeating").val("-");
        $("#length").val(79);
        $("#hash").prop("checked", false);
    }
});

$("#hash").change(function() {
    if (this.checked) {
        $("#starting").val("#");
        $("#ending").val("#");
        $("#repeating").val("#");
        $("#length").val(79);
        $("#slash-dash").prop("checked", false);
    }
});

$('form').submit(function() {
    const starting = $("#starting").val();
    const ending = $("#ending").val();
    const repeating = $("#repeating").val();
    const length = $("#length").val();
    const text = $("#text").val();
    const spaces = $("#spaces").prop('checked');
    const header_footer = $("#header-footer").prop("checked");
    let filler = "";
    let output = "";

    try {
        filler = +length - starting.length - ending.length - text.length - 2;
        if (spaces) {
            filler -= 2;
        }

        if (filler < 0) {
            $("#output").val("Error - invalid length");
        }
        else {
            if (filler % 2 == 0) {
                output = `${starting}${spaces ? " " : ""}${repeating.repeat(filler/2)} ${text} ${repeating.repeat(filler/2)}${spaces ? " " : ""}${ending}`;
            }
            else {
                output = `${starting}${spaces ? " " : ""}${repeating.repeat(Math.floor(filler/2))} ${text} ${repeating.repeat(Math.floor(filler/2) + 1)}${spaces ? " " : ""}${ending}`;
            }

            if (header_footer) {
                filler = spaces ? length - starting.length - ending.length - 2 : length - starting.length - ending.length;
                const box = `${starting}${spaces ? " " : ""}${repeating.repeat(filler)}${spaces ? " " : ""}${ending}`;
                output = `${box}\r${output}\r${box}`;
            }
            
            $("#output").val(output);
        }
    }
    catch (error) {
        console.error(error);
        $("#output").val(error);
    }
    
    return false;
});

$("textarea").click(function(){
    if ($("textarea").val().length > 0 && $("textarea").val() !== "Error - invalid length") {
        $("textarea").select();
        document.execCommand('copy');
        $("#success-alert").show();
    }
});
