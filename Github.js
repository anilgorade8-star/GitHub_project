
async function github(){


   try{
   const response= await fetch("https://api.github.com/users");

   if(!response.ok){
      throw new Error("data is not parsent")
   }
   const data= await response.json();
   
   const parent =document.getElementById('first')
   for(let user of data){
   
      const element=document.createElement("div")
      element.classList.add('user')

      const img=document.createElement('img')
      img.src=user.avatar_url
    
      const username=document.createElement('h2')
      username.textContent=user.login



      const a=document.createElement('a')
      a.href=user.html_url
      a.textContent="visit \n"
   
      element.append(img,username,a)
      parent.append(element)
   }

}

catch(error){
   console.log('error')
}

}
github();

