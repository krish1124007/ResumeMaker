//All the button
let AddButton = document.getElementById('AddButton');
let AddSkill = document.getElementById('AddSkills');
let AddStrength = document.getElementById('AddStrengths');
let AddCerti = document.getElementById('AddCertificates');
let AddLanguages= document.getElementById('AddLanguages');

//Add Eventlistners
AddButton.addEventListener('click',AddCompany);
AddSkill.addEventListener('click', ()=>{
    AddList('Skills','Enter Your Skill');
});
AddStrength.addEventListener('click' , ()=>{
    AddList('Strengths' ,'Add Your Strengths' );
});
AddLanguages.addEventListener('click',()=>{
AddList('Languages' , 'Add Your Languages');
})
AddCerti.addEventListener('click',()=>{
    AddList('Certificates' , 'Add Your CertiLink');

})





//All Functions
function AddCompany()
{
    let Exp = document.getElementById('Exp')
    let NewDiv = document.createElement('div')
    NewDiv.className = 'company';
    NewDiv.innerHTML = `<p>Company Name</p>
                <input type="text" placeholder="Enter company name">
                <p>Years</p>
                <input type="text" placeholder="Duration">
                <p>Location</p>
                <input type="text" placeholder="Location">
                <p>Contact Number</p>
                <input type="text" placeholder="Company contact">
                <p>Summary</p>
                <textarea placeholder="Briefly describe your role"></textarea>`
    Exp.appendChild(NewDiv);
}


function AddList(Container,placeholder)
{
    let Contain = document.getElementById(Container);
    let newinput = document.createElement('input');
    newinput.setAttribute('placeholder' , placeholder);
    Contain.appendChild(newinput)

}