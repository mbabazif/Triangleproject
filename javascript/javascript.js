function triangle() {
    var X = parseInt(document.sides.X.value);
    var Y = parseInt(document.sides.Y.value);
    var Z = parseInt(document.sides.Z.value);
    

  
  var XY = parseInt(document.sides.X.value) + parseInt(document.sides.Y.value);
    var XZ = parseInt(document.sides.X.value) + parseInt(document.sides.Z.value);
    var YZ = parseInt(document.sides.Z.value) + parseInt(document.sides.Z.value);

    // var array_of_functions = [
    //     first_function,
    //     second_function,
    //     third_function,
    //     forth_function
    // ]
    // array_of_functions[0]('a string');

    if ((X === Z) && (X=== Y) && (Y===Z)){
        window.alert(" equilateral triangle!");
    }
    
    else if ((X===Y) ||(X===Z) || (Y===Z)) {
     window.alert(" Isoscelenes triangle!");
   
   }

  else if ((XY > Z) && (XZ > Y) && (YZ > X) && (X!=Y) && (X!=Z) && (Y!=Z)) {
   window.alert(" scalene triangle!");}
   
   else if ((XY <=Z) ||(XZ<= Y) ||(YZ <= X) ) {
      window.alert("can not form a triangle!");}
    else {
        window.alert("This not valid number.");
    }
    
            
};
