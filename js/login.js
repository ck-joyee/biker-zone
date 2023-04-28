document.getElementById('btn-submit').addEventListener('click', function(){


       const emailField = document.getElementById('user-email');
       const email = emailField.value;
    
    
    
       const passwordField = document.getElementById('user-password');
       const password = passwordField.value;
      
  
        if(email === 'joyee@gmail.com' && password === 'joyee'){
            window.location.href = 'index.html';
        } 
        else{
            alert('Invalid User');
        } 
    })