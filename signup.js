function checksignup(entity){
var inputName= document.getElementById('text1').value;
var inputEmail=document.getElementById('text4').value;
var pswd=document.getElementById('text5').value;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+$/;
if(entity=="Admin"){
if(inputEmail.match(mailformat))
{
    //do nothing it will redirect

    //alert("function called");
    post_method(inputName,inputEmail,pswd,entity);
    //alert("out of func");
}
else
{
alert("You have entered an invalid email address!");
return false;
}
}
/*else if (entity=="Student"){
    alert("in student");
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
    for(var i=0;i<s2.length();i++)
    {
        if(s2[i]=='1'||s2[i]=='2'||s2[i]=='3'||s2[i]=='4'||s2[i]=='5'||s2[i]=='6'||s2[i]=='7'||s2[i]=='8'||s2[i]=='9'||s2[i]=='0')
        {
            continue;
        }
        flag=false;
        break;
    }
}
}

if (flag==false)
    {
        //do nothing
        alert("You have entered invalid address!");
        return false;
    
    }
}
*/
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
    //alert("function called");
    post_method(inputName,inputEmail,pswd,entity);
    //alert("out of func");
    }
}
}
function post_method(inputName,inputEmail,pswd,entity)
{
    //alert("in post");
  const data = {
      u_email:inputEmail,
      u_password:pswd,
      u_name:inputName,
      u_type:entity
    };
    
    // The URL of the API endpoint
    const url = 'https://dev142311.service-now.com/api/now/import/u_login';
    const base64Credentials = btoa('admin' + ':' + 'Test@4231');
    // Options for the fetch request
    const options = {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64Credentials
        // You can add other headers here if needed
      },
      body: JSON.stringify(data)
    };
    
    // Make the POST request using the fetch API
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        alert('POST request successful:', data);
        // You can process the response data here
        document.getElementById('signup-form').checked = false;
        document.getElementById('login-form').checked = true;
      })
      .catch(error => {
        document.getElementById('signup-form').checked = true;
        alert('POST request error:', error);
      });
}

