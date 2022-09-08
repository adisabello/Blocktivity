// function login(){
//     event.preventDefault();
//     var username = prompt("Enter your username");
//     var password = prompt("Enter your password");

//     var url = 'http://localhost:3001/api/users/login?username='+username+'&password='+password;
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);
  
//     xhr.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             var data = JSON.parse(this.responseText)
//         }
//     }

//     xhr.send();

// }

function validateForm(form){
    var username = form.username.value;
    var password = form.password.value;

    var url = 'http://localhost:3001/api/users/login?username='+username+'&password='+password;
    window.location.href = url;

    return false;
}

function validateReg(form){
    var username = form.username.value;
    var password = form.password.value;

    var url = 'http://localhost:3001/api/users/register?username='+username+'&password='+password;
    window.location.href = url;

    return false;
}

function deletePerson(id){
    var url = 'http://localhost:3001/api/people/delete/'+id
    window.location.href = url;
}

function addMember(){
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender');
    var gVal = gender.options[gender.selectedIndex].value;

    
    var url = 'http://localhost:3001/api/people/post?fname='+fname+'&lname='+lname+'&email='+email+'&age='+age+'&gender='+gVal;
    window.location.href = url;
}

function formTeams(){
    var url = 'http://localhost:3001/api/people/get_all'
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
  
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            generateTeams(data);
        }
    }

    xhr.send();
}

function generateTeams(data){
    var teams = []
    var numPeople = document.getElementById("number").value;
    var numTeams = data.length/numPeople;

    for(var i = 0; i < numTeams; i++){
        teams.push([]);
    }

    var currTeam = 0;
    while(data.length > 0){
        
        var index = (Math.random()*100)%data.length;
        var person = data.splice(index,1)[0];
        teams[currTeam].push(person.firstName+" "+person.lastName);
        if(teams[currTeam].length == numPeople){
            currTeam++;
        }
    }

    var str = "";
    for(var i = 0; i < numTeams; i++){
        str+="<div class='team'><h3>Team "+(i+1)+"</h3>";
        if(teams[i].length > 0){
            str+="<ol>";
            for(var j = 0; j < teams[i].length; j++){
                
                str+="<li>"+teams[i][j]+"</li>";
            }
            str+="</ol>";
        }else{
            str+="<p>No Members</p>";
        }
        str+="</div>";
    }
    document.getElementById("teams").innerHTML = str;
}