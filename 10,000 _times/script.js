document.querySelector('.btn').addEventListener('click', function () {

    let moon = prompt("What would you like me to print 10,000 times?")

    document.querySelector('.changer').innerHTML = `${moon} `.repeat(10000);

});