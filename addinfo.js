function adddetails(){
    alert("adding details");
    var input_rollno=document.getElementById('detail1').value;
    var input_name=document.getElementById('detail2').value;
    var input_fname=document.getElementById('detail3').value;
    var input_attendance=document.getElementById('detail4').value;
    var input_email=document.getElementById('detail5').value;
    //check for the correct email
    var flag=true;
    var s = input_email;
    var ind = s.indexOf("@");
    if(ind==-1)
    flag=false;
    else
    {
    var s1 = s.substring(ind);
    if(s1!="@mmmut.com")
    flag=false;
    else 
    { 
    var s2 = s.substring(0,ind);
    for(var i=0;i<s2.length;i++)
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
            alert("You have entered incorrect email format!");        
        }
        else{
            //call the post func
            //alert("post function is called");
            post_info(input_rollno,input_name,input_fname,input_attendance,input_email);
        }
}
function post_info(input_rollno,input_name,input_fname,input_attendance,input_email)
{
    //alert("in post");
  const data = {
      u_rollnumber:input_rollno,
      u_name:input_name,
      u_fathers_name:input_fname,
      u_attendance:input_attendance,
      u_email:input_email,
      u_password:input_name+'1234'
    };
    
    // The URL of the API endpoint
    const url = 'https://dev142311.service-now.com/api/now/import/u_student_record';
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
      })
      .catch(error => {
        alert('POST request error:', error);
      });
}
// add info ke through passwordset ho rha hai by default that is :name1234