let moreStories

const fetchCards = async ()=>{

     await fetch('https://jsonplaceholder.typicode.com/posts')
    
        .then(response => response.json())
    
        .then(moreArray => moreStories = moreArray )

        const moreContainer = document.querySelector(".moreStories")

        moreStories.forEach((card, i)=>{
            moreContainer.innerHTML += `
            
            <div  style="background-color: #EAEAAC; border-radius: 20px;">
            
                <h2> ${card.id}</h2>
                <h2>${card.title}</h2>
                <h4> ${card.body}</h4>
            </div>`
        })


        
}
fetchCards()

function displayMoreStories(){
    const showMessage =document.getElementById("stories")
    showMessage.style.display=showMessage.style.display==='block' ? 'none' : 'block'
  }






  const fetchUsers = async ()=>{
  
       await fetch('https://jsonplaceholder.typicode.com/users')
      
          .then(response => response.json())
      
          .then(moreArray => moreUsers = moreArray )
  
          const moreContainer = document.querySelector(".moreUsers")
  
          moreUsers.forEach((card, i)=>{
              moreContainer.innerHTML += `
              
              <div  style="background-color: #EAEAAC; border-radius: 20px;">
              
                  <h2> ${card.phone}</h2>
                  <h2>${card.website}</h2>
                  <h4> ${card.company.name}</h4>
              </div>`
          })
  
  
          
  }
  
fetchUsers()

 function displayMoreStoriess(){
    
    const showMessage =document.getElementById("storiess")
    showMessage.style.display=showMessage.style.display==='block' ? 'none' : 'block'
  }
