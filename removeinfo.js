async function removedetails(){
    alert("removing details");
    var input_rollno=document.getElementById('rdetail1').value;
    var action = await remove_method(input_rollno);
}
async function remove_method(inputText){
    event.preventDefault(); 
    var query = inputText;
    var geturl = 'https://dev142311.service-now.com/api/1108901/get_user/removeuser/' + query;
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
      alert("data deleted");
      }
    else{
      alert("Invalid Roll no");
    }
    } catch (error) {
      console.error('GET request error:', error);
      alert("Error fetching data: " + error.message); 
    }
  }
  