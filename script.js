const form = document.querySelector('form')
if(form){
const inputs = document.querySelectorAll('input, textarea')

inputs.forEach(x=>x.addEventListener('focus',()=>{x.style.borderColor="#c89b3c"}))
inputs.forEach(x=>x.addEventListener('blur',()=>{x.style.borderColor="#555"}))

form.addEventListener('submit',e=>{
e.preventDefault()
alert("Submission received. We'll reach out soon.")
})
}
const attorneyButtons = document.querySelectorAll('.select-btn')
if(attorneyButtons){
attorneyButtons.forEach(btn=>{
btn.addEventListener('click',()=>{
alert("Your attorney has been selected. Our team will contact you shortly.")
})
})
}
