const form=document.getElementById("loginForm");
const error=document.getElementById("error");

form.addEventListener("submit",e=>{
  e.preventDefault();
  const username=document.getElementById("username").value.trim();
  const password=document.getElementById("password").value;
  // Demo saja. Ganti dengan sistem autentikasi server sebelum dipakai sungguhan.
  if(username==="admin" && password==="admin123"){
    sessionStorage.setItem("lilacmart_admin","1");
    error.style.color="#2e7d32";
    error.textContent="Login berhasil. Panel admin demo siap.";
    setTimeout(()=>alert("Login berhasil. Untuk keamanan, autentikasi nyata perlu backend/server."),100);
  }else{
    error.textContent="Username atau password salah.";
  }
});
