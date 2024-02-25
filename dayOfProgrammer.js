function dayOfProgrammer() {
    var leap = 0; //make 1 if it is a leap year...remove a day
    if(y < 1918){
        if(y%4 === 0){leap = -1}
        console.log(13 + leap + ".09." + y);
    }else if(y > 1918){
        if(y%4 === 0 && y%100 !== 0 || y%400 === 0){leap = -1};
        console.log(13 + leap + ".09." + y);
    }else{ //case for 1918
        console.log("26.09.1918");
    }
}