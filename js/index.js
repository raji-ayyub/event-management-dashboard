



// DEMO RANDOM DATA ---------------------------------------
const eventsData = [
    { eventName: "Cloud Innovation Summit", date: "2024-01-05", speaker: "Sundar Pichai", status: "Completed", description: "Exploring the future of cloud technologies.", attendees: 300, ticketPrice: 150, sponsorship: 5000 },
    { eventName: "Tech Leaders Conference", date: "2024-01-10", speaker: "Satya Nadella", status: "completed", description: "Leadership insights in the tech industry.", attendees: 450, ticketPrice: 200, sponsorship: 7000 },
    { eventName: "AI & Future Technologies", date: "2024-01-15", speaker: "Jane Doe", status: "inprogress", description: "Advancements in AI and emerging technologies.", attendees: 200, ticketPrice: 120, sponsorship: 4000 },
    { eventName: "Web Development Workshop", date: "2024-01-25", speaker: "Mark Zuckerberg", status: "completed", description: "Hands-on learning for web developers.", attendees: 250, ticketPrice: 100, sponsorship: 3000 },
    { eventName: "Cybersecurity Roundtable", date: "2024-02-01", speaker: "Sheryl Sandberg", status: "Completed", description: "Roundtable on the latest cybersecurity trends.", attendees: 350, ticketPrice: 180, sponsorship: 6000 },
    { eventName: "Data Science Symposium", date: "2024-02-05", speaker: "Elon Musk", status: "completed", description: "Deep dive into data science innovations.", attendees: 500, ticketPrice: 250, sponsorship: 8000 },
    { eventName: "Blockchain Bootcamp", date: "2024-02-10", speaker: "Vitalik Buterin", status: "Completed", description: "Understanding blockchain technology.", attendees: 300, ticketPrice: 170, sponsorship: 4500 },
    { eventName: "UX/UI Design Forum", date: "2024-02-15", speaker: "Marissa Mayer", status: "inprogress", description: "The latest in UX/UI design strategies.", attendees: 220, ticketPrice: 140, sponsorship: 3500 },
    { eventName: "Startup Pitch Day", date: "2024-03-20", speaker: "Peter Thiel", status: "Completed", description: "Startups pitching their innovative ideas.", attendees: 400, ticketPrice: 220, sponsorship: 5000 },
    { eventName: "Cloud Security Summit", date: "2024-04-01", speaker: "Diane Greene", status: "inprogress", description: "Ensuring security in cloud environments.", attendees: 250, ticketPrice: 160, sponsorship: 4000 },
    { eventName: "Internet of Things Expo", date: "2024-05-05", speaker: "Tim Cook", status: "Completed", description: "Showcasing IoT advancements.", attendees: 350, ticketPrice: 190, sponsorship: 6500 },
    { eventName: "Mobile Development Workshop", date: "2024-05-10", speaker: "Sundar Pichai", status: "inprogress", description: "Workshop on mobile app development.", attendees: 230, ticketPrice: 130, sponsorship: 3000 },
    { eventName: "Agile Methodologies Conference", date: "2024-05-15", speaker: "Jack Dorsey", status: "Completed", description: "Best practices in agile development.", attendees: 275, ticketPrice: 170, sponsorship: 4500 },
    { eventName: "Digital Marketing Strategies", date: "2024-05-20", speaker: "Susan Wojcicki", status: "inprogress", description: "Innovative digital marketing strategies.", attendees: 220, ticketPrice: 150, sponsorship: 3000 },
    { eventName: "Artificial Intelligence Summit", date: "2024-05-25", speaker: "Andrew Ng", status: "inprogress", description: "Exploring AI advancements and trends.", attendees: 400, ticketPrice: 200, sponsorship: 7000 },
    { eventName: "Fintech Innovations Forum", date: "2024-05-28", speaker: "Christine Lagarde", status: "inprogress", description: "Innovations shaping the future of fintech.", attendees: 350, ticketPrice: 210, sponsorship: 6000 },
    { eventName: "Remote Work Conference", date: "2024-06-05", speaker: "Reed Hastings", status: "inprogress", description: "The evolution of remote work models.", attendees: 260, ticketPrice: 180, sponsorship: 5000 },
    { eventName: "Tech for Good Summit", date: "2024-06-10", speaker: "Jeff Bezos", status: "inprogress", description: "Technology driving social good.", attendees: 290, ticketPrice: 170, sponsorship: 4500 },
    { eventName: "Ethical Hacking Workshop", date: "2024-07-01", speaker: "Kevin Mitnick", status: "Completed", description: "Hands-on ethical hacking training.", attendees: 210, ticketPrice: 160, sponsorship: 3000 },
    { eventName: "Open Source Forum", date: "2024-08-02", speaker: "Linus Torvalds", status: "completed", description: "Discussions on open-source software.", attendees: 380, ticketPrice: 140, sponsorship: 4000 },
    { eventName: "Machine Learning Symposium", date: "2024-08-05", speaker: "Demis Hassabis", status: "Completed", description: "Symposium on machine learning advancements.", attendees: 410, ticketPrice: 200, sponsorship: 7000 },
    { eventName: "Software Engineering Conference", date: "2024-08-10", speaker: "Larry Page", status: "inprogress", description: "Engineering solutions for modern software.", attendees: 330, ticketPrice: 190, sponsorship: 5500 },
    { eventName: "Product Management Workshop", date: "2024-08-15", speaker: "Eric Schmidt", status: "Completed", description: "Best practices in product management.", attendees: 245, ticketPrice: 180, sponsorship: 3500 },
    { eventName: "DevOps Summit", date: "2024-09-05", speaker: "Werner Vogels", status: "inprogress", description: "Latest trends in DevOps.", attendees: 400, ticketPrice: 190, sponsorship: 6000 },
    { eventName: "Virtual Reality Expo", date: "2024-09-10", speaker: "Palmer Luckey", status: "Completed", description: "Showcase of virtual reality technologies.", attendees: 500, ticketPrice: 220, sponsorship: 7500 },
    { eventName: "Tech Innovations Conference", date: "2024-09-20", speaker: "Tony Fadell", status: "inprogress", description: "Exploring cutting-edge tech innovations.", attendees: 300, ticketPrice: 180, sponsorship: 5000 },
    { eventName: "Cloud Migration Workshop", date: "2024-10-01", speaker: "Ava Perez", status: "inprogress", description: "Best practices in cloud migration.", attendees: 240, ticketPrice: 160, sponsorship: 3500 },
    { eventName: "Data Visualization Forum", date: "2024-10-10", speaker: "Alexis Ohanian", status: "inprogress", description: "Exploring new trends in data visualization.", attendees: 310, ticketPrice: 170, sponsorship: 4000 },
    { eventName: "Internet Security Conference", date: "2024-10-15", speaker: "Charlotte Johnson", status: "Completed", description: "Protecting internet infrastructure.", attendees: 320, ticketPrice: 200, sponsorship: 6000 },
    { eventName: "Tech Diversity Summit", date: "2024-11-01", speaker: "Melinda Gates", status: "inprogress", description: "Promoting diversity in the tech sector.", attendees: 350, ticketPrice: 190, sponsorship: 4500 },
    { eventName: "Sustainable Tech Forum", date: "2024-12-01", speaker: "Daniel Robinson", status: "Completed", description: "Sustainable technology innovations.", attendees: 230, ticketPrice: 150, sponsorship: 3000 },
    { eventName: "E-Commerce Innovations Workshop", date: "2024-12-10", speaker: "Emily Martinez", status: "inprogress", description: "Exploring the future of e-commerce.", attendees: 290, ticketPrice: 170, sponsorship: 4000 },
    { eventName: "Smart Cities Conference", date: "2024-12-15", speaker: "Oliver Davis", status: "Completed", description: "Innovations in smart city development.", attendees: 400, ticketPrice: 200, sponsorship: 5000 },
    { eventName: "Digital Transformation Summit", date: "2024-12-20", speaker: "Mia Thomas", status: "inprogress", description: "Driving digital transformation strategies.", attendees: 270, ticketPrice: 180, sponsorship: 3500 },
    { eventName: "Tech Education Forum", date: "2024-12-25", speaker: "William Clark", status: "Completed", description: "The future of tech education.", attendees: 320, ticketPrice: 160, sponsorship: 3000 }
];




// RANDOM DATA END -------------------------------







  function populateTable(events) {

    const tableBody = document.getElementById('eventsBody');
    tableBody.innerHTML = ''; 

    events.forEach(event => {
        const row =     `<li class="items-list">
                            <div class="event-list-tabs">
                                <div class="event-list-name">
                                    <div class="icon-box mobile-collapse-btn"><img src="icons/chevron-right.svg" class="icon sm" /></div>
                                    <p>${event.eventName}</p>
                                </div>
                                <div class="desktop-middle-tabs">
                                    <p class="e-date">${event.date}</p>
                                    <p>${event.speaker}</p>
                        
                                </div>
                                <span class="status ${event.status.toLowerCase()}"> <span class="stat-bob"></span> ${event.status}</span>
                            </div>

                            <div class="list-collapsible ">

                                    <p class="e-date">${event.date}</p>

                                    <p class="hidden-infos"> <span id="info-spk">${event.speaker}</span><span id="info-dsc">${event.description}</span> <span id="info-atd">${event.attendees}</span> </p>

                                    <p>${event.speaker}</p>

                                    
                                
                                </div>


                        </li>`;
        tableBody.innerHTML += row;

        modalCard();
    });
}


function populateEventNameSelect(evName) {

    const tableBody = document.getElementById('evNames');
    tableBody.innerHTML = ''; 

    evName.forEach(event => {
       

        const row =     `<li data-value="speader1">${event.eventName}</li>`;


                        
        tableBody.innerHTML += row;

        
    });
}

populateEventNameSelect(eventsData)
  



// PAGINATION BASED DISPLAY (EVENTS) and Events sorting ------------------------


let selectedSort = "Most Recent"

// const sortFilter = document.getElementById('sortFilter');

document.querySelector('#sortFilter').addEventListener('change', function() {
    selectedSort = this.value; 
    displayEventsPage(eventsData, rowsPerPage, currentPage, selectedSort);
    
    generatePaginationControls(eventsData, rowsPerPage);
});


sortFilter.addEventListener('change', (event) => {
    const selectedSort = event.target.value;
    currentPage = 1; 
    displayEventsPage(eventsData, rowsPerPage, currentPage, selectedSort);
    generatePaginationControls(eventsData, rowsPerPage); 
});




let currentPage = 1; 
let rowsPerPage = 10; 


function displayEventsPage(events, rowsPerPage, currentPage, sortOrder) {
    const tableBody = document.querySelector('#eventsBody'); 
    tableBody.innerHTML = ''; 



     // Sort events
     const sortedEvents = [...eventsData];
   

        if (sortOrder === 'Most Recent') {
            sortedEvents.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by most recent date

        } else if (sortOrder === 'Oldest First') {
            sortedEvents.sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by oldest date first
        }
  

    
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    const currentEvents = sortedEvents.slice(startIndex, endIndex);

    

    // Populate table with events for the current page
    currentEvents.forEach(event => {
        const row =  `<li class="items-list">
                            <div class="event-list-tabs">
                                <div class="event-list-name">
                                    <div class="icon-box mobile-collapse-btn"><img src="icons/chevron-right.svg" class="icon sm" /></div>
                                    <p>${event.eventName}</p>
                                </div>
                                <div class="desktop-middle-tabs">
                                    <p class="e-date">${event.date}</p>
                                    <p>${event.speaker}</p>
                                </div>
                                <span class="status ${event.status.toLowerCase()}"> <span class="stat-bob"></span> ${event.status} </span>
                            </div>

                            <div class="list-collapsible ">

                                    <p class="e-date">${event.date}</p>
                                    <p class="hidden-infos"> <span id="info-spk">${event.speaker}</span><span id="info-dsc">${event.description}</span> <span id="info-atd">${event.attendees}</span> </p>
                                    <p>${event.speaker}</p>

                                
                                </div>


                        </li>`;
        tableBody.innerHTML += row;

        modalCard();
    });


    filterRenderedItems()
}




// Generate pagination buttons dynamically
function generatePaginationControls(events, rowsPerPage) {
    const paginationContainer = document.querySelector('.page-numbers');
    paginationContainer.innerHTML = ''; // Clear existing pagination

    const totalPages = Math.ceil(eventsData.length / rowsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('li');
        pageBtn.classList.add('nums');
        pageBtn.textContent = i;

        if (i === currentPage) {
            pageBtn.classList.add('current');
        }

        pageBtn.addEventListener('click', () => {
            currentPage = i;
            
            
            const searchB = document.getElementById("search");
            const selectedSort = sortFilter.value.trim().toLowerCase; 

            if(searchB.value !== "") {

                filterEvents();

            } else{
                

                displayEventsPage(events, rowsPerPage, currentPage, selectedSort);
                generatePaginationControls(eventsData, rowsPerPage);

                filterRenderedItems()
            }
           

            
        });

        paginationContainer.appendChild(pageBtn);
    }
}


document.querySelector('#rows-select').addEventListener('change', function() {
    rowsPerPage = parseInt(this.value); 
    currentPage = 1; 

    const filteredEvents = filterRenderedItems(eventsData);

    displayEventsPage(filteredEvents, rowsPerPage, currentPage);
    generatePaginationControls(filteredEvents, rowsPerPage); // Regenerate pagination
    

   
});


generatePaginationControls(eventsData, rowsPerPage); 

displayEventsPage(eventsData, rowsPerPage, 1); 

filterRenderedItems()

// --------------------------------------------------------














//     BAR CHART -------------------------------------
function getMonthName(dateStrng) {
    const [year, month, day] = dateStrng.split('-');
    const date = new Date(year, month - 1, day); // Month is 0-indexed
    return date.toLocaleString('default', { month: 'short' }); // Return short month name like 'Jan'
}

const eventsPerMonth = {
    'Jan': 0, 'Feb': 0, 'Mar': 0, 'Apr': 0, 'May': 0, 'Jun': 0,
    'Jul': 0, 'Aug': 0, 'Sep': 0, 'Oct': 0, 'Nov': 0, 'Dec': 0
};

eventsData.forEach(eventinf => {
    const month = getMonthName(eventinf.date);
    eventsPerMonth[month]++;
});



const monthly = Object.keys(eventsPerMonth); 
const eventCounting = Object.values(eventsPerMonth); 

const ctx = document.getElementById('eventChart').getContext('2d');

const eventChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: monthly, // Use the fixed month labels
        datasets: [{
            label: 'Monthly Rate',
            data: eventCounting,
            backgroundColor: 'rgba(128, 90, 213, 0.7)',
            borderColor: 'rgba(128, 90, 213, 1)', 
            borderWidth: 1 
        }]

    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1 // Use smaller step size for better scaling
                }
            }
        }
    }
});









// GRAPH ENDS ------------------------










// CUSTOM DROPDOWNS ------------------





document.querySelectorAll('.dropdowns').forEach(dropdown => {

    const button = dropdown.querySelector('.sel-button');
    const content = dropdown.querySelector('.options');
  
    // Toggle dropdown on button click
    button.addEventListener('click', (event) => {
      event.stopPropagation(); 
      content.classList.toggle('activ');
      document.querySelectorAll('.dropdowns .options').forEach(otherContent => {
        if (otherContent !== content) otherContent.classList.remove('activ'); 
      });
    });
  
    // Handle option selection
    content.addEventListener('click', event => {
      const option = event.target.closest('li'); 
      if (option && option.dataset.value) {
        const value = option.dataset.value; 
        button.textContent = option.textContent; 
        content.classList.remove('activ'); 
  
        // Handle the selection logic for filters
       
        
        filterRenderedItems();
        
        

      } else {
      
      }
    });


   

  });


       //   Filter logic

       function filterRenderedItems(){

        const eventNameFilter = document.querySelector('#ev-name').textContent; 
        const dateFilterRaw = document.querySelector('#date').textContent; 
        const statusFilter = document.querySelector('#status').textContent; 


        

        const dateFilter = dateFilterRaw.toLowerCase();
        
       

        const renderedEvents = document.querySelectorAll('.events-list .items-list');

        

        renderedEvents.forEach(renderedEv => {

            const eventName = renderedEv.querySelector('.event-list-name p').textContent;
            const dateStr = renderedEv.querySelector('.e-date').textContent; 
            const status = renderedEv.querySelector('.status').textContent; 

            

            const dateObj = new Date(dateStr);
            const dateAb = dateObj.toLocaleString('default', { month: 'short' }).toLowerCase();
                
                

            // checking match
            

           

            const matchesEventName = !eventNameFilter || eventName.trim().toLowerCase() === eventNameFilter.trim().toLowerCase() || eventNameFilter==="Name";
            const matchesDate = !dateFilter || dateAb.includes(dateFilter) || dateFilter === "date"; // in months
            const matchesStatus = !statusFilter || status.trim().toLowerCase() === statusFilter.trim().toLowerCase() || statusFilter === "Status";

           
            
    

            

            if (matchesEventName && matchesDate && matchesStatus) {
                renderedEv.style.display = ''; // Show item

           
            } else {
                renderedEv.style.display = 'none'; // Hide item

                
            }

            

           

        })

        
    }






  
  document.addEventListener('click', event => {
    if (!event.target.closest('.dropdowns')) {
      document.querySelectorAll('.dropdowns .options').forEach(content => content.classList.remove('activ'));
    }
  });
  










// FILTERS




function filterEvents() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const dateFilter = document.getElementById('date');
    const statusFilter = document.getElementById('status').value.toLowerCase();
    const tableBody = document.getElementById('eventsBody'); // Assuming this is your UL

    

    if (tableBody) {
        tableBody.innerHTML = '';
        
        const filteredEvents = eventsData.filter(event => {
            // Parse the event date properly
            const eventDate = new Date(event.date);
            const eventMonth = eventDate.toLocaleString('default', { month: 'long' }).toLowerCase();
            
           
            
            return eventMonth.includes(searchInput);
        });

        if (filteredEvents.length > 0) {

            filteredEvents.forEach(event => {
                const row = `<li class="items-list">
                                <div class="event-list-tabs">
                                    <div class="event-list-name">
                                        <div class="icon-box mobile-collapse-btn">
                                            <img src="icons/chevron-right.svg" class="icon sm" />
                                        </div>
                                        <p>${event.eventName}</p>
                                    </div>
                                    <div class="desktop-middle-tabs">
                                        <p class="e-date">${event.date}</p>
                                        <p>${event.speaker}</p>
                                    </div>
                                        <span class="status ${event.status.toLowerCase()}"> <span class="stat-bob"></span> ${event.status}</span>
                                </div>

                                <div class="list-collapsible ">

                                    <p class="e-date">${event.date}</p>

                                    <p class="hidden-infos"> <span id="info-spk">${event.speaker}</span><span id="info-dsc">${event.description}</span> <span id="info-atd">${event.attendees}</span> </p>

                                    <p>${event.speaker}</p>

                                
                                </div>

                            </li>`;
                tableBody.innerHTML += row;

                modalCard();
            });
        } else {
            tableBody.innerHTML = '<li>No events found for the selected month.</li>';
        }
    }
}




document.querySelector('#search-btn').addEventListener('click', function() {
    const searchedDate = document.getElementById("search").value.trim().toLowerCase;

    if(searchedDate !== "") {
        filterEvents();
        
    } else{
        displayEventsPage(eventsData, rowsPerPage, 1);  
    }
});











// CAROUSEL SLIDES

let slideIndex = 0;
let autoSlideTimeout;
showSlides();

function plusSlides(n) {
  clearTimeout(autoSlideTimeout);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(autoSlideTimeout);
  showSlides(slideIndex = n - 1);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("sliders");
  let dots = document.getElementsByClassName("dot");
  
  // Handle out-of-bounds
  if (n >= slides.length) { slideIndex = 0; }    
  if (n < 0) { slideIndex = slides.length - 1; }
  
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
    slides[i].classList.remove("slide-in", "slide-out-right", "slide-out-left");
  }

  // Reset dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex].style.opacity = 1;
  slides[slideIndex].classList.add("slide-in");
  dots[slideIndex].className += " active";
  
  autoSlideTimeout = setTimeout(() => {
    plusSlides(1);
  }, 3000); 
}











// OTHER FUNCTIONS


document.addEventListener("DOMContentLoaded", function() {


    // DARK MODE LIGHT MODE SWITCH LOGIC

    const toggleButtonAll = document.querySelectorAll(".theme-switch");
    const toggleBobAll = document.querySelectorAll('.theme-btn-bob');
    
    
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

  
    toggleButtonAll.forEach(toggleButton => {
        toggleButton.addEventListener("click", function() {
            document.body.classList.toggle("dark-mode");
    
            toggleBobAll.forEach(toggleBob => {
                toggleBob.classList.toggle("bob-toggled");
            })
    
            
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        });
    })





    // SIDEBAR TOGGLE

    const sideBartoggler = document.getElementById("sidbar-toggle");
    const fixHeader = document.getElementById("header");
    const sideBar = document.getElementById("sidebar");

    const close = document.getElementById("close");
    const bars = document.getElementById("bars");

    sideBartoggler.addEventListener("click", function() {
        sideBar.classList.toggle("slide-fade");
        fixHeader.classList.toggle("fixed");

        close.classList.toggle("show");
        bars.classList.toggle("hide");


    })

    // --------------
    
    
    // ASIDE-TABS CONTROL

    const collapsible = document.getElementById("collapsible");
    const aside = document.getElementById("aside");
    const asTabText = document.querySelectorAll(".aside-tab-text");

    const asideItems = document.querySelectorAll(".aside-items");




    collapsible.addEventListener("click", function(){
        aside.classList.toggle("aside-collapse");
        
        asideItems.forEach(items => {
            items.classList.toggle("aside-items-collapsed")
        })

        asTabText.forEach(asText => {
            setTimeout(() => {
                asText.classList.toggle("hidden-text");
            }, 400);
        })
    })

})










// Modal popops





    
    function modalCard() {


        

       

        const eventListDiv = document.querySelectorAll(".items-list");
        const modalCard = document.getElementById("modal");

        const modalEvName = document.querySelector(".name h2")
        const modalEvDate = document.querySelector(".name p")
        const modalEvDescr = document.querySelector(".card.des")
        const modalEvSpeaker = document.querySelector(".ev-speaker")
        const modalAttendees = document.querySelector(".total-attendees")




        const closeModal = document.getElementById("close-modal");

        eventListDiv.forEach( eventList => {

            

            const eventsListNameBtn = eventList.querySelector(".event-list-name p, #info-spk");

            const eventsListDate = eventList.querySelector(".e-date");
            const eventsSpeaker = eventList.querySelector("#info-spk");
            const eventsAttendees = eventList.querySelector("#info-atd");
            // const eventsAttendees = eventList.querySelector("#info-atd");


            eventsListNameBtn.addEventListener("click", function() {

                modalEvName.textContent = eventsListNameBtn.textContent;
                modalEvDate.textContent = eventsListDate.textContent;
                modalEvSpeaker.textContent = eventsSpeaker.textContent;
                modalAttendees.textContent = eventsAttendees.textContent;
                console.log(modalEvSpeaker);



                modalCard.style.display="flex";

                setTimeout(() => {
                    modalCard.style.opacity = "1";
                }, 200);
            })

            
            
           

            const collapsibleListContent = eventList.querySelector(".list-collapsible");

            const collapsibleBtn = eventList.querySelector(".mobile-collapse-btn");

            // collapsibleBtn.addEventListener("click", function() {

              

            //    collapsibleBtn.classList.add("rotate-90");
            //    collapsibleListContent.classList.add('collapse-down');

                

                

            // });

            collapsibleBtn.addEventListener("click", function() {

                collapsibleBtn.classList.add("rotate-90");
                collapsibleListContent.classList.add("collapse-down")

               
            });
            


       

        
        });


        closeModal.addEventListener("click", function() {
            
            modalCard.style.opacity= "0";

            setTimeout(() => {
                modalCard.style.display="none";
            }, 200);
        })


    }

    

    modalCard();









    // ----------STATISTICS ---------------------

// const statisticsCardList = document.querySelectorAll(".stat-div");

    const statCardTotalEvents = document.querySelector(".stat-data-total");
    const totalEvents = Math.ceil(eventsData.length);

    statCardTotalEvents.textContent = totalEvents;


  
    const statActiveSpeakers = document.querySelector(".active-speakers");

    const uniqueSpeakers = new Set(eventsData.map(event => event.speaker));
    
    const totalSpeakers = uniqueSpeakers.size + 1;
    
    statActiveSpeakers.textContent = totalSpeakers;
    
    





    const totalAttendees = eventsData.reduce((sum, event) => sum + (event.attendees || 0), 0);

    const statCardAttendees = document.querySelector(".total-regi")
    console.log(totalAttendees);
    statCardAttendees.textContent = totalAttendees;


    

    const statCardRevenue = document.querySelector(".total-revenue")

    const calculateTotalRevenue = (events) => {
        return events.reduce((totalRevenue, event) => {
            const eventRevenue = (event.ticketPrice * event.attendees) + event.sponsorship;
            return totalRevenue + eventRevenue;
        }, 0);
    };
    
    const totalRevenue = calculateTotalRevenue(eventsData);
    statCardRevenue.textContent = totalRevenue;
    console.log("Total Revenue:", totalRevenue);
    
    
   
    
    




