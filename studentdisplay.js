async function getStudent(){
    //alert("displaying details");
    var input_rollno=document.getElementById('gdetail1').value;
    var action = await get_method(input_rollno);
}
async function get_method(inputText){
    event.preventDefault(); 
    var query = inputText;
    var geturl = 'https://dev142311.service-now.com/api/1108901/get_user/studentdetail/' + query;
    const base64Credentials = btoa('admin' + ':' + 'Test@4231');
  
    try {
      const response = await fetch(geturl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Basic ' + base64Credentials
        }
      });
  
      //console.log('Raw response:', response);
  
      const data = await response.json();
      // Process the response data here
      
      //alert("Data fetched successfully: " + JSON.stringify(data));
  
      if(data.result.found=='true')
      {
      //alert("data deleted");
      document.getElementById('studentInfo').innerText =
      `NAME: ${data.result.name}\n
      FATHER'S NAME:${data.result.fname}\n
      ROLL_NUMBER:${data.result.rollno}\n
      EMAIL:${data.result.email}\n
      PASSWORD:${data.result.pswd}\n
      ATTENDANCE: ${data.result.attend}\n
      DBMS:${data.result.dbms}\n
      JAVA:${data.result.java}\n
      OS: ${data.result.os}`;

  // Show the result container
  document.getElementById('resultContainer').style.display = 'block';
      }
    else{
      alert("Invalid Roll no");
    }
    } catch (error) {
      console.error('GET request error:', error);
      alert("Error fetching data: " + error.message); 
    }
  }
  