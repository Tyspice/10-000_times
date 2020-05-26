

function myFunk(thng) {
    moon = [];

    for(i=0;i<10000;i++) {

        moon.push(' '+thng+' ');
    } document.querySelector('.changer').innerHTML = moon;
};

document.querySelector('.btn').addEventListener('click',function(){
       
    myFunk(prompt("What would you like me to print 10,000 times?"))

});