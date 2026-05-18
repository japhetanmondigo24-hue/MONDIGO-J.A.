function.handleLogIn(event){
  event.preventDefault();

  const username=document.getElementById('username').value.trim();
  const password= document.getElementById('password').value.trim():

  document.getElementById('usernameError').style.display='none';
  document.getElementById('passwordError').style.display='none';
  document.getElementById('successMessage').style.display='none';

  let isValid= true;

if(username==''){
  document.getElementById('usernameError').textContent= 'Username is required';
  document.getElementById('usernameError').style.display='block';
  isValid= false;
}  else if(password.length<6){
  document.getElementById('passwordError').textContent= 'Password must be at least 6     characters!';
  document.getElementById('passwordError').style.display='block';
  isValid= false;
}


if(isValid){
  console.log('LogIn attempt:', {username,password});
  document.getElementById('successMessage').style.display='block';
  document.getElementById('LogInForm').reset();

}