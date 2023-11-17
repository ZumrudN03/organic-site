const departmentsBtn = document.querySelector(".navSearch .departments .departments-header")
const departmentList=document.querySelector(".navSearch .departments .content")


departmentsBtn.addEventListener("click",function(){
    departmentList.classList.toggle("active")
})