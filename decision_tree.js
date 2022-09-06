var Id = 0;
var money = 0;
var inProgress = false;
var level = 1;
var t1 = 0;
var t2 = 0;
var t3 = 0;
var t4 = 0;
var track = false;
var logged = [["Subject ID","Trial 1","Trial 2","Trial 3","Trial 4","Trial 1 Time","Trial 2 Time","Trial 3 Time","Trial 4 Time","Total Money"]];
var time1, time2, time3, time4, time;
var finalNode;

function subjectID(){
    Id = document.getElementById("ID").value;
    document.getElementById("screen1").style.display = "none";
    document.getElementById("screen2").style.display = "block";
    return false;
}

function screen2(){
    document.getElementById("screen2").style.display = "none";
    document.getElementById("screen3").style.display = "block";
    return false;
}

function screen3(){
    document.getElementById("screen3").style.display = "none";
    document.getElementById("screen4").style.display = "block";
    return false;
}

function screen4(){
    document.getElementById("screen4").style.display = "none";
    document.getElementById("screen5").style.display = "block";
    return false;
}

function screen5(){
    document.getElementById("screen5").style.display = "none";
    document.getElementById("screen6").style.display = "block";
    restart();
    return false;
}

function screen6(){
    document.getElementById("screen6").style.display = "none";
    document.getElementById("screen7").style.display = "block";
    restart();
    return false;
}

function screen7(){
    document.getElementById("screen7").style.display = "none";
    document.getElementById("screen8").style.display = "block";
    restart();
    return false;
}

function screen8(){
    document.getElementById("screen8").style.display = "none";
    document.getElementById("screen9").style.display = "block";
    restart();
    track = true;
    time = new Date().getTime();
    return false;
}

function screen9(){
    document.getElementById("screen9").style.display = "none";
    document.getElementById("screen10").style.display = "block";
    time1 = new Date().getTime() - time;
    t1 = money;
    restart();
    time = new Date().getTime();
    track = true;
    return false;
}

function screen10(){
    document.getElementById("screen10").style.display = "none";
    document.getElementById("screen11").style.display = "block";
    time2 = new Date().getTime() - time;
    t2 = money;
    restart();
    time = new Date().getTime();
    track = true;
    return false;
}

function screen11(){
    document.getElementById("screen11").style.display = "none";
    document.getElementById("screen12").style.display = "block";
    time3 = new Date().getTime() - time;
    t3 = money;
    restart();
    time = new Date().getTime();
    track = true;
    return false;
}

function screen12(){
    document.getElementById("screen12").style.display = "none";
    document.getElementById("screen13").style.display = "block";
    time4 = new Date().getTime() - time;
    t4 = money;
    restart();
    var total = t1 + t2 + t3 + t4;
    logged.push([
        Id,
        t1,
        t2,
        t3,
        t4,
        time1,time2,time3,time4,
        total
    ]);
    return false;
}

function addClass(className, toAdd){
    var elm = document.getElementsByClassName(className);
    console.log(elm);
    for(var i = 0; i < elm.length; i++){
        elm[i].classList.add(toAdd);
    }
}

function showMoney(){
    if(!track) return;
    var elm = document.getElementsByClassName("money");

    for(var i = 0; i < elm.length; i++){
        elm[i].innerHTML = "You currently have $"+money+"";
    }
}

function removeClass(className, toAdd){
    var elm = document.getElementsByClassName(className);
    for(var i = 0; i < elm.length; i++){
        elm[i].classList.remove(toAdd);
    }
}

function cn1(){
    if (!inProgress || level != 1)
        return;
    addClass("cn1","chosen");
    removeClass("cn1","active");
    addClass("right1","chosen");
    removeClass("right1","active");

    removeClass("left1","active");
    removeClass("on1","active");

    addClass("left2","active");
    addClass("right2","active");
    addClass("dn2a","active");
    addClass("dn2b","active");
    level++;

    showMoney();
    setTimeout(()=>{
        var dir = Math.random();
        if(dir <= 0.5 ){
            addClass("dn2a","chosen");
            removeClass("dn2a","active");
            addClass("right2","chosen");
            removeClass("right2","active");

            removeClass("left2","active");
            removeClass("dn2b","active");

            addClass("left3","active");
            addClass("right3","active");
            addClass("cn2a","active");
            addClass("cn2b","active");

        }else{
            addClass("dn2b","chosen");
            removeClass("dn2b","active");
            addClass("left2","chosen");
            removeClass("left2","active");

            removeClass("right2","active");
            removeClass("dn2a","active");

            addClass("left6","active");
            addClass("right6","active");
            addClass("cn2c","active");
            addClass("cn2d","active");
        }
        showMoney();
        level++;
    }, 1.5);
}

function on1(){

    if (!inProgress || level != 1)
        return;

    addClass("on1","chosen");
    removeClass("on1","active");
    addClass("left1","chosen");
    removeClass("left1","active");

    removeClass("right1","active");
    removeClass("cn1","active");
    money+=1000; //add money///////////////////////////////////////////////////////////////////////////
    finalNode = "on1";
    showMoney();
    inProgress = false;
}

function cn2a(){
    if (!inProgress || level != 3)
        return;
    addClass("cn2a","chosen");
    removeClass("cn2a","active");
    addClass("right3","chosen");
    removeClass("right3","active");

    removeClass("left3","active");
    removeClass("cn2b","active");

    addClass("left4","active");
    addClass("right4","active");
    addClass("on2","active");
    addClass("on3","active");
    level++;

    showMoney();
    setTimeout(()=>{
        var dir = Math.random();
        if(dir <= 0.5 ){
            addClass("on2","chosen");
            removeClass("on2","active");
            addClass("right4","chosen");
            removeClass("right4","active");

            removeClass("left4","active");
            removeClass("on3","active");
            money+=1000; //add money///////////////////////////////////////////////////////////////////////////
            finalNode = "on2";
        }else{
            addClass("on3","chosen");
            removeClass("on3","active");
            addClass("left4","chosen");
            removeClass("left4","active");

            removeClass("right4","active");
            removeClass("on2","active");
            money+=1000; //add money///////////////////////////////////////////////////////////////////////////
            finalNode = "on3";
        }
        showMoney();
        level++;
        inProgress = false;
    }, 1.5);
}

function cn2b(){
    if (!inProgress || level != 3)
        return;
    addClass("cn2b","chosen");
    removeClass("cn2b","active");
    addClass("left3","chosen");
    removeClass("left3","active");

    removeClass("right3","active");
    removeClass("cn2a","active");

    addClass("left5","active");
    addClass("right5","active");
    addClass("on4","active");
    addClass("on5","active");
    level++;

    showMoney();
    setTimeout(()=>{
        var dir = Math.random();
        if(dir <= 0.5 ){
            addClass("on4","chosen");
            removeClass("on4","active");
            addClass("right5","chosen");
            removeClass("right5","active");

            removeClass("left5","active");
            removeClass("on5","active");
            money+=1000; //add money///////////////////////////////////////////////////////////////////////////
            finalNode = "on4";
        }else{
            addClass("on5","chosen");
            removeClass("on5","active");
            addClass("left5","chosen");
            removeClass("left5","active");

            removeClass("right5","active");
            removeClass("on4","active");
            money+=1000; //add money///////////////////////////////////////////////////////////////////////////
            finalNode = "on5";
        }
        showMoney();
        level++;
        inProgress = false;
    }, 1.5);
}

function cn2c(){
    if (!inProgress || level != 3)
        return;
    addClass("cn2c","chosen");
    removeClass("cn2c","active");
    addClass("right6","chosen");
    removeClass("right6","active");

    removeClass("left6","active");
    removeClass("cn2d","active");

    addClass("left7","active");
    addClass("right7","active");
    addClass("on6","active");
    addClass("on7","active");
    level++;

    showMoney();
    setTimeout(()=>{
        var dir = Math.random();
        if(dir <= 0.5 ){
            addClass("on6","chosen");
            removeClass("on6","active");
            addClass("right7","chosen");
            removeClass("right7","active");

            removeClass("left7","active");
            removeClass("on7","active");
            money+=1000; //add money///////////////////////////////////////////////////////////////////////////
            finalNode = "on6";
        }else{
            addClass("on7","chosen");
            removeClass("on7","active");
            addClass("left7","chosen");
            removeClass("left7","active");

            removeClass("right7","active");
            removeClass("on6","active");
            money+=1000; //add money///////////////////////////////////////////////////////////////////////////
            finalNode = "on7";
        }
        showMoney();
        level++;
        inProgress = false;
    }, 1.5);
}

function cn2d(){
    if (!inProgress || level != 3)
        return;
    addClass("cn2d","chosen");
    removeClass("cn2d","active");
    addClass("left6","chosen");
    removeClass("left6","active");

    removeClass("right6","active");
    removeClass("cn2c","active");

    addClass("left8","active");
    addClass("right8","active");
    addClass("on8","active");
    addClass("on9","active");
    level++;
    showMoney();
    setTimeout(()=>{
        var dir = Math.random();
        if(dir <= 0.5 ){
            addClass("on8","chosen");
            removeClass("on8","active");
            addClass("right8","chosen");
            removeClass("right8","active");

            removeClass("left8","active");
            removeClass("on9","active");
            money+=1000; //add money///////////////////////////////////////////////////////////////////////////
            finalNode = "on8";
        }else{
            addClass("on9","chosen");
            removeClass("on9","active");
            addClass("left8","chosen");
            removeClass("left8","active");

            removeClass("right8","active");
            removeClass("on8","active");
            money+=1000; //add money///////////////////////////////////////////////////////////////////////////
            finalNode = "on9";
        }
        showMoney();
        level++;
        inProgress = false;
    }, 1.5);
}

function restart(){
    removeClass("CN","active");
    removeClass("ON","active");
    removeClass("DN","active");
    removeClass("line", "active");

    removeClass("CN","chosen");
    removeClass("ON","chosen");
    removeClass("DN","chosen");
    removeClass("line", "chosen");

    addClass("dn1", "chosen");
    addClass("left1","active");
    addClass("right1","active");
    addClass("cn1","active");
    addClass("on1","active");
    level = 1;
    money = 0;
    inProgress = true;
}

function downloadCSV(){
    var data = []

    for(const row of logged){
        data.push(row.join(","))
    }
    var str = data.join("\n");
    
    var blob = new Blob([str], {type: 'text/csv'});
    let url = window.URL.createObjectURL(blob);
    let a  = document.createElement('a');
    a.setAttribute('hidden','');
    a.setAttribute('href',url);
    a.setAttribute('download','score.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    return false;
}