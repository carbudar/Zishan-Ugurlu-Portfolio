document.addEventListener("DOMContentLoaded", () => { 
    header();
    worksGallery();
    backBtn();

   
})

 function header(){
        const header = document.querySelector('.header')

        const headerTitle = document.createElement('div');
        headerTitle.classList.add('headerTitle')

        const headerTitleContent = document.createElement('h2');
        headerTitleContent.textContent = "Zishan Ugurlu"; // Name in header

        headerTitle.appendChild(headerTitleContent);
        
        


        const navigationBar = document.createElement('div');
        navigationBar.classList.add('navigationBar')

        const navBarHome = document.createElement('h3');
        navBarHome.textContent = "Home"; //home menu in header
        navBarHome.addEventListener('click',()=>{
        window.location.href = "index.html";
        });

        const navBarEducator = document.createElement('h3');
        navBarEducator.textContent = "Educator"; //educator menu in header
        navBarEducator.addEventListener('click',()=>{
            window.location.href = "works.html"
        })

        const navBarDirecting = document.createElement('h3');
        navBarDirecting.textContent = "Directing"; //directing menu in header
        navBarDirecting.addEventListener('click',()=>{
            window.location.href = "works.html"
        })

        const navBarActing = document.createElement('h3');
        navBarActing.textContent = "Acting"; //directing menu in header
        navBarActing.addEventListener('click',()=>{
            window.location.href = "works.html"
        })

        const navBarProfile = document.createElement('h3');
        navBarProfile.textContent = "About Me"; //about me menu in header
        navBarProfile.addEventListener('click',()=>{
            window.location.href = "profile.html";
        });
        

        navigationBar.appendChild(navBarHome);
        navigationBar.appendChild(navBarEducator);
        navigationBar.appendChild(navBarDirecting);
        navigationBar.appendChild(navBarActing);
        navigationBar.appendChild(navBarProfile);

 


        header.appendChild(headerTitle)
        header.appendChild(navigationBar)
        
    }

function worksGallery() {
  fetch("projects.json")
    .then(response => response.json())
    .then(data => {
      const gridContainer = document.querySelector(".works-gallery");

      data["theater productions, directing"].forEach(item => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("gridItem");

        gridItem.addEventListener('click',()=>{
            window.location.href="details.html"
        })

        // image
        const img = document.createElement("img");
        img.src = item.thumbnail;
        img.alt = item.title;

        // overlay
        const overlay = document.createElement("div");
        overlay.classList.add("projectInfoHover");
        overlay.innerHTML = `<h3>${item.title}</h3>`;

        // add both into the gridItem
        gridItem.appendChild(img);
        gridItem.appendChild(overlay);

        // append gridItem to container
        gridContainer.appendChild(gridItem);
      });
    })
    .catch(err => console.error("Error loading JSON:", err));
}

function backBtn(){
const backBtn = document.querySelector('.backBtn')
backBtn.addEventListener('click',()=>{
    window.history.back()
})

}