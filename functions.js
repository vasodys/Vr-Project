/**
 * Created by vasilisodysseos on 2/9/17.
 */
$(document).ready(function(){

    var scene = document.querySelector('a-scene');
    var sphere = scene.querySelector('#sphere');
    var indicator = scene.querySelector('#indicator');

    console.log(sphere);

    sphere.addEventListener('click', function () {
        console.log("I'm clicked!");
        sphere.setAttribute('material', {color: '#FF0000'});
        indicator.emit("clicked");
    });

});
