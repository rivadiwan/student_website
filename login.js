function ValidateEmail(entity)
{
var inputEmail=document.getElementById('text2').value;
var pswd=document.getElementById('text3').value;

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+$/;
if(entity=="Admin"){
if(inputEmail.match(mailformat))
{
    //do nothing it will redirect

    alert("function called");
    var action = get_method(inputEmail,pswd);
    alert(action);
          // return false;
}
else
{
alert("You have entered an invalid email address!");
return false;
}
}
}

 async function get_method(inputText, pswd) {
  event.preventDefault(); 
  var query = inputText + "/" + pswd;
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
    
    alert("Data fetched successfully: " + JSON.stringify(data));

    if(data.result.found=='true')
    {
    return data.result.status;
    }
  else{
    alert("Invalid");
   return data.result.status;
  }
  } catch (error) {
    console.error('GET request error:', error);
    alert("Error fetching data: " + error.message);
  }
}




  