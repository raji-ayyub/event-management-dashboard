

// demo data working simulation

// const eventsData = [
//     { 
//         eventName: "Cloud Innovation Summit", 
//         date: "2024-10-15", 
        
//         speaker: "Jane Doe", 
//         status: "Completed" 
//     },
//     { eventName: "Blockchain Revolution Conference", date: "2024-01-01", speaker: "Dr. Peter Smith", status: "Completed" },
//     { eventName: "AI in Healthcare Symposium", date: "2024-01-01", speaker: "Dr. Aisha Malik", status: "In Progress" },
//     { eventName: "Future of Fintech Forum", date: "2024-10-25", speaker: "John Lee", status: "Completed" },
//     { eventName: "Data Analytics in Business", date: "2024-11-03", speaker: "Jane Doe", status: "Completed" },
   
//   ];

const eventsData = [
    { eventName: "Cloud Innovation Summit", date: "2024-01-10", speaker: "Jane Doe", status: "Completed" },
    { eventName: "Tech Leaders Conference", date: "2024-01-25", speaker: "John Smith", status: "inprogress" },
    { eventName: "AI & Future Technologies", date: "2024-02-05", speaker: "Alice Johnson", status: "Completed" },
    { eventName: "Web Development Workshop", date: "2024-02-15", speaker: "Mark Lee", status: "inprogress" },
    { eventName: "Cybersecurity Roundtable", date: "2024-02-20", speaker: "Linda Green", status: "Completed" },
    { eventName: "Data Science Symposium", date: "2024-03-01", speaker: "Michael Brown", status: "inprogress" },
    { eventName: "Blockchain Bootcamp", date: "2024-03-10", speaker: "Emily White", status: "Completed" },
    { eventName: "UX/UI Design Forum", date: "2024-03-15", speaker: "Chris Black", status: "inprogress" },
    { eventName: "Startup Pitch Day", date: "2024-04-05", speaker: "Sarah Davis", status: "Completed" },
    { eventName: "Cloud Security Summit", date: "2024-04-12", speaker: "David Wilson", status: "inprogress" },
    { eventName: "Internet of Things Expo", date: "2024-04-20", speaker: "Jessica Taylor", status: "Completed" },
    { eventName: "Mobile Development Workshop", date: "2024-05-02", speaker: "Daniel Anderson", status: "inprogress" },
    { eventName: "Agile Methodologies Conference", date: "2024-05-10", speaker: "Natalie Martinez", status: "Completed" },
    { eventName: "Digital Marketing Strategies", date: "2024-05-22", speaker: "Paul Thomas", status: "inprogress" },
    { eventName: "Artificial Intelligence Summit", date: "2024-06-05", speaker: "Rebecca Harris", status: "Completed" },
    { eventName: "Fintech Innovations Forum", date: "2024-06-10", speaker: "Kevin Lee", status: "inprogress" },
    { eventName: "Remote Work Conference", date: "2024-06-15", speaker: "Anna Young", status: "Completed" },
    { eventName: "Tech for Good Summit", date: "2024-07-01", speaker: "Henry Scott", status: "inprogress" },
    { eventName: "Ethical Hacking Workshop", date: "2024-07-12", speaker: "Megan Clark", status: "Completed" },
    { eventName: "Open Source Forum", date: "2024-07-20", speaker: "Jason Allen", status: "inprogress" },
    { eventName: "Machine Learning Symposium", date: "2024-08-02", speaker: "Sophia King", status: "Completed" },
    { eventName: "Software Engineering Conference", date: "2024-08-10", speaker: "Matthew Wright", status: "inprogress" },
    { eventName: "Product Management Workshop", date: "2024-08-20", speaker: "Olivia Hall", status: "Completed" },
    { eventName: "DevOps Summit", date: "2024-09-05", speaker: "Ethan Lee", status: "inprogress" },
    { eventName: "Virtual Reality Expo", date: "2024-09-15", speaker: "Isabella Young", status: "Completed" },
    { eventName: "Tech Innovations Conference", date: "2024-09-25", speaker: "Liam Gonzalez", status: "inprogress" },
    { eventName: "Cloud Migration Workshop", date: "2024-10-05", speaker: "Ava Perez", status: "Completed" },
    { eventName: "Data Visualization Forum", date: "2024-10-12", speaker: "Benjamin Martinez", status: "inprogress" },
    { eventName: "Internet Security Conference", date: "2024-10-20", speaker: "Charlotte Johnson", status: "Completed" },
    { eventName: "Tech Diversity Summit", date: "2024-11-01", speaker: "Amelia Rodriguez", status: "inprogress" },
    { eventName: "Sustainable Tech Forum", date: "2024-11-10", speaker: "Daniel Robinson", status: "Completed" },
    { eventName: "E-Commerce Innovations Workshop", date: "2024-11-20", speaker: "Emily Martinez", status: "inprogress" },
    { eventName: "Smart Cities Conference", date: "2024-12-01", speaker: "Oliver Davis", status: "Completed" },
    { eventName: "Digital Transformation Summit", date: "2024-12-15", speaker: "Mia Thomas", status: "inprogress" },
    { eventName: "Tech Education Forum", date: "2024-12-22", speaker: "William Clark", status: "Completed" },
];


// RANDOM DATA END -------------------------------












  function populateTable(events) {

    const tableBody = document.getElementById('eventsBody');
    tableBody.innerHTML = ''; 

    events.forEach(event => {
        const row =     `<li>
                            <div class="event-list-tabs">
                                <div class="event-list-name">
                                    <div class="icon-box mobile-collapse-btn"><img src="icons/chevron-right.svg" class="icon sm" /></div>
                                    <p>${event.eventName}</p>
                                </div>
                                <div class="desktop-middle-tabs">
                                    <p>${event.date}</p>
                                    <p>${event.speaker}</p>
                        
                                </div>
                                <span class="status ${event.status.toLowerCase()}">${event.status}</span>
                            </div>
                        </li>`;
        tableBody.innerHTML += row;
    });
}
  
// populateTable(eventsData);



// PAGINATION BASED DISPLAY (EVENTS)




let currentPage = 1; 
let rowsPerPage = 10; 
// Display events based on the current page
function displayEventsPage(events, rowsPerPage, currentPage) {
    const tableBody = document.querySelector('#eventsBody'); 
    tableBody.innerHTML = ''; // Clear the table

    // Calculate start and end index for the current page
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    const currentEvents = events.slice(startIndex, endIndex);

    // Populate table with events for the current page
    currentEvents.forEach(event => {
        const row =  `<li>
                            <div class="event-list-tabs">
                                <div class="event-list-name">
                                    <div class="icon-box mobile-collapse-btn"><img src="icons/chevron-right.svg" class="icon sm" /></div>
                                    <p>${event.eventName}</p>
                                </div>
                                <div class="desktop-middle-tabs">
                                    <p>${event.date}</p>
                                    <p>${event.speaker}</p>
                                </div>
                                <span class="status ${event.status.toLowerCase()}">${event.status}</span>
                            </div>
                        </li>`;
        tableBody.innerHTML += row;
    });
}

// Generate pagination buttons dynamically
function generatePaginationControls(events, rowsPerPage) {
    const paginationContainer = document.querySelector('.page-numbers');
    paginationContainer.innerHTML = ''; // Clear existing pagination

    const totalPages = Math.ceil(events.length / rowsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('li');
        pageBtn.classList.add('nums');
        pageBtn.textContent = i;

        if (i === currentPage) {
            pageBtn.classList.add('current');
        }

        pageBtn.addEventListener('click', () => {
            currentPage = i;
            displayEventsPage(events, rowsPerPage, currentPage);
            generatePaginationControls(events, rowsPerPage); // Update page buttons
        });

        paginationContainer.appendChild(pageBtn);
    }
}

// Handle rows-per-page change (dropdown or buttons)
document.querySelector('#rows-select').addEventListener('change', function() {
    rowsPerPage = parseInt(this.value); // Get selected value
    currentPage = 1; // Reset to first page after changing rows per page
    displayEventsPage(eventsData, rowsPerPage, currentPage);
    generatePaginationControls(eventsData, rowsPerPage); // Regenerate pagination
});

// Initial setup
generatePaginationControls(eventsData, rowsPerPage);  // Generate pagination buttons
displayEventsPage(eventsData, rowsPerPage, 1); 




//  bar chart

const ctx = document.getElementById('eventChart').getContext('2d');

const eventChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Ja', 'Fb', 'Mr', 'Ap', 'Ma', 'Jn', 'Jl', 'Au', 'Se', 'Oc', 'No', 'De'], 
        datasets: [{
            label: '',
            data: [900, 700, 600, 800, 1000, 500, 400, 300, 700, 600, 900, 500], 
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
                    stepSize: 200 
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
      event.stopPropagation(); // Prevent immediate closing when button is clicked
      content.classList.toggle('activ');
      document.querySelectorAll('.dropdowns .options').forEach(otherContent => {
        if (otherContent !== content) otherContent.classList.remove('activ'); // Close other dropdowns
      });
    });
  
    // Handle option selection
    content.addEventListener('click', event => {
      const option = event.target.closest('li'); // Update this if you use <li> or <option> for dropdown items
      if (option && option.getAttribute('value')) {
        const value = option.getAttribute('value'); // Using the 'value' attribute instead of 'data-value'
        button.textContent = option.textContent; // Set button text
        content.classList.remove('activ'); // Close dropdown
  
        // Handle the selection logic for filters
        console.log(`Filter selected for: ${value}`);
        // Add your filtering logic here based on the selected value...
      } else {
        console.log('filter issues');
      }
    });
  });
  
  // Close dropdowns when clicking outside
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
            
            // Log the event and its parsed month for debugging
            console.log(`Event: ${event.eventName}, Month: ${eventMonth}`);
            
            return eventMonth.includes(searchInput);
        });

        if (filteredEvents.length > 0) {
            filteredEvents.forEach(event => {
                const row = `<li>
                                <div class="event-list-tabs">
                                    <div class="event-list-name">
                                        <div class="icon-box mobile-collapse-btn">
                                            <img src="icons/chevron-right.svg" class="icon sm" />
                                        </div>
                                        <p>${event.eventName}</p>
                                    </div>
                                    <div class="desktop-middle-tabs">
                                        <p>${event.date}</p>
                                        <p>${event.speaker}</p>
                                    </div>
                                        <span class="status ${event.status.toLowerCase()}">${event.status}</span>
                                </div>
                            </li>`;
                tableBody.innerHTML += row;
            });
        } else {
            tableBody.innerHTML = '<li>No events found for the selected month.</li>';
        }
    }
}

// Example binding to a filter button



document.querySelector('#search-btn').addEventListener('click', function() {
    const searchedDate = document.getElementById("search").value;

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
  
  // Hide all slides and remove the sliding classes
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
    slides[i].classList.remove("slide-in", "slide-out-right", "slide-out-left");
  }

  // Reset dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Show the current slide with sliding effect
  slides[slideIndex].style.opacity = 1;
  slides[slideIndex].classList.add("slide-in");
  dots[slideIndex].className += " active";
  
  // Auto slide after 3 seconds
  autoSlideTimeout = setTimeout(() => {
    plusSlides(1);
  }, 3000); 
}