let btn = document.getElementById('btn-switch');
btn.addEventListener('click', darkMode);

function darkMode() {
  let element = document.body;
  element.classList.toggle('dark-mode');
  btn.classList.toggle('active');
}

const navBtnR = document.getElementById("navBtnR");


const loadPage = async (path) => {
  const response = await fetch(path);
  const htmlString = await response.text();
  document.getElementById("content").innerHTML = htmlString;
};

navBtnR.addEventListener1("click", () => {
  
  if (location.pathname === "/etape2.html") {
    loadPage("/etape1.html");
    navBtn.innerHTML = "Switch to Page 1";
  }
    else if (location.pathname === "/etape2.html") {
    loadPage("/etape3.html");
    navBtn.innerHTML = "Switch to Page 3";
  } 
  else if (location.pathname === "/etape3.html") {
    loadPage("/etape4.html");
    navBtn.innerHTML = "Switch to Page 4";
  } 
  
});

loadPage(location.pathname);


const navBtnL = document.getElementById("navBtnL");

navBtnL.addEventListener1("click", () => {
  

   if (location.pathname === "/etapa1.html") {
    loadPage("/etape2.html");
    navBtn.innerHTML = "Switch to Page 2";

  }
   else if (location.pathname === "/etape3.html") {
    loadPage("/etape2.html");
    navBtn.innerHTML = "Switch to Page 2";
  }
   else if (location.pathname === "/etape4.html") {
    loadPage("/etape3.html");
    navBtn.innerHTML = "Switch to Page 3";
  }
  
});

loadPage(location.pathname);