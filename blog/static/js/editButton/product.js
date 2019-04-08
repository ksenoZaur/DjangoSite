function changeAmountMaterial ( index ) {
    let dataString = "id=" + index +"&amount=" + document.getElementById(index).value ;

    $.ajax({
        type: "POST",
        url: "/product/" + "1" + "/editPosition",
        data: dataString,
        cache: false,
        success: function(html)
        {
            alert(html);
            let result = html.toString();
            if( result.localeCompare("Element deleted!") == 0) {

                let el = document.getElementById('position' + index);
                el.parentNode.removeChild(el);

            }
        }
    });

}

function addInMap( idMaterial, idMap ){
    let dataString = "idMaterial=" + idMaterial +"&idMap=" + idMap ;

    $.ajax({
        type: "POST",
        url: "/product/" + "materials" + "/addMaterialInTechnologyMap",

            url: "/product/" + "1" + "/addMaterial",

        data: dataString,
        cache: false,
        success: function(html)
        {
            document.getElementById("map").innerHTML += html;
        }
    });
}

function saveInfo( id ) {

    // alert(id);

    var title = document.getElementById("title").value;
    var code = document.getElementById("code").value;
    var balance = document.getElementById("balance").value;
    var description = document.getElementById("description").value;

    let dataString = "title=" + title + "&code=" + code +
        "&balance=" + balance + "&description=" + description;

    $.ajax({
        type: "POST",
        url: "/product/" + id + "/editajax",
        data: dataString,
        cache: false,
        success: function(html)
        {
            alert(html);
        }
    });
}

function addPositionMap( id ) {

    // alert(id);

    var title = document.getElementById("title").value;
    var code = document.getElementById("code").value;
    var balance = document.getElementById("balance").value;
    var description = document.getElementById("description").value;

    let dataString = "title=" + title + "&code=" + code +
        "&balance=" + balance + "&description=" + description;

    $.ajax({
        type: "POST",
        url: "/product/" + id + "/edit",
        data: dataString,
        cache: false,
        success: function(html)
        {
            alert(html);
        }
    });
}

