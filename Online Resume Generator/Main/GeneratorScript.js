<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

     
     function addNewWorkExperience() {

        
        const container = document.querySelector('.werow');


        const newRow = document.createElement('div');
        newRow.classList.add('row', 'align-items-start','werow', 'mt-2'); 

        

        const col1 = document.createElement('div');
        col1.classList.add('col-md-3'); 
        col1.style.display = 'flex';
        col1.style.flexDirection = 'column';  
        const textarea = document.createElement('textarea');
        textarea.classList.add('form-control');
        textarea.setAttribute('placeholder', 'Specify years worked');
        textarea.setAttribute('rows', '3');
        textarea.setAttribute('name', 'years_worked[]'); 
        col1.appendChild(textarea);


        
        const col2 = document.createElement('div');
        col2.classList.add('col-md-9'); 
        col2.style.display = 'flex';
        col2.style.flexDirection = 'column'; 
        col2.style.gap = '10px'; 

        

        const designationInput = document.createElement('input');
        designationInput.classList.add('form-control');
        designationInput.setAttribute('type', 'text');
        designationInput.setAttribute('placeholder', 'Designation');
        designationInput.setAttribute('name', 'designation[]'); 
        col2.appendChild(designationInput);


        
        const experienceInput = document.createElement('input');
        experienceInput.classList.add('form-control');
        experienceInput.setAttribute('type', 'text');
        experienceInput.setAttribute('placeholder', 'Experience Highlights');
        experienceInput.setAttribute('name', 'experience_highlights[]'); 
        col2.appendChild(experienceInput);


        
        newRow.appendChild(col1);
        newRow.appendChild(col2);

        
        
        container.appendChild(newRow);

        
        
    }

    


    function addNewEducation() {
        
        const container = document.querySelector('.edrow');

        
        const newRow = document.createElement('div');
        newRow.classList.add('row', 'edrow','align-items-start' ,'mt-2', );
        
        const col1 = document.createElement('div');
        col1.classList.add('col-md-3'); 
        col1.style.display = 'flex';
        col1.style.flexDirection = 'column';
        const textarea = document.createElement('textarea');
        textarea.classList.add('form-control');
        textarea.setAttribute('placeholder', 'Specify years of study');
        textarea.setAttribute('rows', '3');
        textarea.setAttribute('name', 'years_studied[]'); 
        col1.appendChild(textarea);


        const col2 = document.createElement('div');
        col2.classList.add('col-md-9'); 
        col2.style.display = 'flex';
        col2.style.flexDirection = 'column'; 
        col2.style.gap = '10px'; 

        
        const degreeInput = document.createElement('input');
        degreeInput.classList.add('form-control');
        degreeInput.setAttribute('type', 'text');
        degreeInput.setAttribute('placeholder', 'Degree/Class');
        degreeInput.setAttribute('name', 'degree[]'); 
        col2.appendChild(degreeInput);

        
        const institutionInput = document.createElement('input');
        institutionInput.classList.add('form-control');
        institutionInput.setAttribute('type', 'text');
        institutionInput.setAttribute('placeholder', 'Institution');
        institutionInput.setAttribute('name', 'institution[]');
        col2.appendChild(institutionInput);

        
        newRow.appendChild(col1);
        newRow.appendChild(col2);

        
        container.appendChild(newRow);

       
    }

    

    document.getElementById('education_btn').addEventListener('click', addNewEducation);

    container.insertBefore(newRow, addButton.parentNode);

    function addNewInterest() {
        
        const interestsContainer = document.getElementById("interestsContainer");

        
        const newInterestInput = document.createElement("input");
        newInterestInput.type = "text";
        newInterestInput.classList.add("form-control", "mb-2", "mt-2"); 
        newInterestInput.placeholder = "Your interest"; 

        
        interestsContainer.appendChild(newInterestInput);
    }

    
    document.getElementById("interests_btn").addEventListener("click", function(event) {
        event.preventDefault(); 
        addNewInterest(); 
    });





function GenerateCV(){
    let nameField =document.getElementById("nameField").value;
    let nameFieldTemp=document.getElementById("nameFieldTemp");
    nameFieldTemp.innerHTML=nameField;


    let workField =document.getElementById("workField").value;
    let workFieldTemp=document.getElementById("workFieldTemp");
    workFieldTemp.innerHTML=workField;


    let contactField =document.getElementById("contactField").value;
    let contactFieldTemp=document.getElementById("contactFieldTemp");
    contactFieldTemp.innerHTML=contactField;


    let mailField =document.getElementById("mailField").value;
    let mailFieldTemp=document.getElementById("mailFieldTemp");
    mailFieldTemp.innerHTML=mailField;


    let websiteField =document.getElementById("websiteField").value;
    let websiteFieldTemp=document.getElementById("websiteFieldTemp");
    websiteFieldTemp.innerHTML=websiteField;


    let linkedField =document.getElementById("linkedField").value;
    let linkedFieldTemp=document.getElementById("linkedFieldTemp");
    linkedFieldTemp.innerHTML=linkedField;


    let locationField =document.getElementById("locationField").value;
    let locationFieldTemp=document.getElementById("locationFieldTemp");
    locationFieldTemp.innerHTML=locationField;


    let profile_overview =document.getElementById("profile_overview").value;
    let profile_overviewTemp=document.getElementById("profile_overviewTemp");
    profile_overviewTemp.innerHTML=profile_overview;


    let years_worked =document.getElementById("years_worked").value;
    let years_workedTemp=document.getElementById("years_workedTemp");
    years_workedTemp.innerHTML=years_worked;


    let designation =document.getElementById("designation").value;
    let designationTemp=document.getElementById("designationTemp");
    designationTemp.innerHTML=designation;


    let experience_highlights =document.getElementById("experience_highlights").value;
    let experience_higlightsTemp=document.getElementById("experience_highlightsTemp");
    experience_highlights.innerHTML=experience_higlightsTemp;


    let interestsContainer =document.getElementById("interestsContainer").value;
    let interestsContainerTemp=document.getElementById("interestsContainerTemp");
    interestsContainerTemp.innerHTML=interestsContainer;

    
}


