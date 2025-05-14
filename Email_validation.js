async function ValidateEmail(entity)
{
    //alert(entity);
var inputEmail=document.getElementById('text2').value;
var pswd=document.getElementById('text3').value;

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+$/;
if(entity=="Admin"){
if(inputEmail.match(mailformat))
{
    //do nothing it will redirect

    //alert("function called");
    var action = await get_method(inputEmail,pswd,entity);
    //alert(action);
    if(action)
    window.location.href = "admindashboard.html";
          // return false;
}
else
{
alert("You have entered an invalid email address!");
return false;
}
}
else if (entity=="Student"){
    //alert("in student");
    var flag=true;
    var s = inputEmail;
    var ind = s.indexOf("@");
    if(ind==-1)
    flag=false;
    else{
    var s1 = s.substring(ind);
    if(s1!="@mmmut.com")
    flag=false;
    else { 
    var s2 = s.substring(0,ind);
    //alert("before for");
    for(var i=0;i<s2.length;i++)
    {
      alert("in for");
        if(s2[i]=='1'||s2[i]=='2'||s2[i]=='3'||s2[i]=='4'||s2[i]=='5'||s2[i]=='6'||s2[i]=='7'||s2[i]=='8'||s2[i]=='9'||s2[i]=='0')
        {
            continue;
        }
        //alert("for went wrong");
        flag=false;
        break;
    }
}
}

if (flag==false)
    {
        //do nothing
        alert("You have entered invalid address!");
        return f;
    
    }
    else{
      var action = await get_method(inputEmail,pswd,entity);
      //alert(action);
      if(action)
      window.location.href = "studentdashboard.html";
    }
}
else if(entity=="Faculty"){
    //alert("in faculty!");
    var f=true;
    var s = inputEmail;
    var ind = s.indexOf("@");
    if(ind==-1)
    f=false;
    else{
        var a=s.substring(ind);
        if(a!='@mmmut.com')
        f=false;
        else{
            var a1=s.substring(0,ind);
            var b=a1.startsWith("hod");
            if(b!=true)
            f=false;
        }
    }
    if (f==false)
    {
        //do nothing
        alert("You have entered invalid address!");
        return f;
    
    }
    else{
      //if email is valid use get and go to faculty dashboard..
    var action = await get_method(inputEmail,pswd,entity);
    if(action)
    window.location.href = "Facultydashboard.html";
    }
}
}
 ////////get api call
 async function get_method(inputText, pswd,entity ){
  event.preventDefault(); 
  var query = inputText + "/" + pswd+ "/"+entity;
  var geturl = 'https://dev142311.service-now.com/api/1108901/get_user/loginuser/' + query;
  const base64Credentials = btoa('admin' + ':' + 'Test@4231');

  try {
    const response = await fetch(geturl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Basic ' + base64Credentials
      }
    });

    console.log('Raw response:', response);

    const data = await response.json();
    // Process the response data here
    
    //alert("Data fetched successfully: " + JSON.stringify(data));

    if(data.result.found=='true')
    {
    return true;
    }
  else{
    alert("Invalid");
   return false;
  }
  } catch (error) {
    console.error('GET request error:', error);
    alert("Error fetching data: " + error.message); 
  }
}
 