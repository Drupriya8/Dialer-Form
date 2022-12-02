
  let signupform = document.querySelector(".signup-form")
  let username  = document.querySelector("#username")
  let contact = document.querySelector("#phone")
  let email = document.querySelector("#email")
 
  let count = 0
 

  signupform.addEventListener("submit", converttable)

  function converttable(e){
    e.preventDefault()

    count++
    let tablebody = document.querySelector(".tablebody")
    let tablerow = document.createElement("tr")
       tablerow.className = "tablerow"
    let tabledatahead = document.createElement("th")
        tabledatahead.className = "Th"
       tabledatahead.innerText = count
    let tabledat1 = document.createElement("td")
       tabledat1.innerText = username.value
    let tabledat2 = document.createElement("td")
        tabledat2.className = "contactNotd Td"
       tabledat2.innerText = contact.value
      //  const No = tabledat2.value
      // let attrvalue = "tel:" + No
      // console.log(attrvalue)
      let dialnumber = `tel:${contact.value}`
    let tabledat3 = document.createElement("td")
       tabledat3.innerText = email.value
    let tabledat4 = document.createElement("td")
       tabledat4.className = "dialtd"
       let dialbtn = document.createElement("button")
           dialbtn.className = "dialbtn border-0 bg-success text-light py-1 px-3 rounded-5"   
           
         //  dialbtn.innerText = "Call"
          tabledat4.appendChild(dialbtn)
     let diallink = document.createElement("a")    
     diallink.className = "text-light text-decoration-none" 
     diallink.innerText = "Call"
     diallink.setAttribute('href', dialnumber)

     dialbtn.appendChild(diallink)
      
    console.log(tabledat4)
    tablebody.appendChild(tablerow)
    tablerow.appendChild(tabledatahead)
    tablerow.appendChild(tabledat1)
    tablerow.appendChild(tabledat2)
    tablerow.appendChild(tabledat3)
    tablerow.appendChild(tabledat4)
    signupform.reset()


  }



 
 



  




