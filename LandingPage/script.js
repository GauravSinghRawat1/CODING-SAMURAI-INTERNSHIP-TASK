function sidebar_open() {
  const sidebar = document.getElementById("sidebar");
  if(window.innerWidth>450){
    sidebar.style.width = "40%";
  }
  else{
    sidebar.style.width = "100%";
  }
   
}
  
  function sidebar_close() {
    document.getElementById("sidebar").style.width = "0%";
  }
  if(window.innerWidth > 990){
    sidebar_close();
  }
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 990) {
        document.getElementById('sidebar').style.width = '0%';
    }
});