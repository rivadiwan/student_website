function updaterecord(){
    alert("updating details");
    var input_rollno=document.getElementById('rno').value;
    var input_java=document.getElementById('marks1').value;
    var input_dbms=document.getElementById('marks2').value;
    var input_os=document.getElementById('marks3').value;
    //alert("func is called");
    post_updatedata(input_rollno, input_java, input_dbms, input_os);
}
function edit_attendance(){
    var input_attend=document.getElementById('attend').value;
    var input_rollno=document.getElementById('rno').value;
    post_updateattend(input_rollno,input_attend);
}
function post_updatedata(input_rollno,input_java,input_dbms,input_os)
{
    //alert("in post");
  const data = {
    u_dbms:input_dbms,
    u_java:input_java,
    u_os:input_os,
    u_rollnumber:input_rollno
    };
    
    // The URL of the API endpoint
    const url = 'https://dev142311.service-now.com/api/now/import/u_update_record';
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

//function to update attendance.....

    function post_updateattend(input_rollno,input_attend)
{
    //alert("in post");
  const data = {
    u_attendance:input_attend,
    u_rollnumber:input_rollno
    };
    
    // The URL of the API endpoint
    const url = 'https://dev142311.service-now.com/api/now/import/u_update_record';
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
    