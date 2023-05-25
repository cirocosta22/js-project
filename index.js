const listaAnimais = document.querySelectorAll('.js-tabmenu li')
const p = document.querySelectorAll('.tab-text section')
p[0].classList.add('ativo')



    function activeTab(e){ 
     

        p.forEach(item => { 
           item.classList.remove('ativo')
        })
         p[e].classList.add('ativo')
            
  } 
  
  
  listaAnimais.forEach((item,index )=> {
              item.addEventListener('click',function(){
                    activeTab(index)
              })
  })
  
const questions2 = document.querySelectorAll('.js-acordionlist dt')
questions2[0].classList.add('ativo')
questions2[0].nextElementSibling.classList.add('ativo')
function activeText(){ 
       
       this.classList.toggle('ativo')
       this.nextElementSibling.classList.toggle('ativo')
        
}


questions2.forEach(item => { 
        item.addEventListener('click',activeText)
})



const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')


function scrollSuave(event){
         event.preventDefault()
         const href  = event.currentTarget.getAttribute('href')
         console.log(href)
         const section = document.querySelector(href)
         const top = section.offsetHeight
        
        window.scrollTo({ 
           top:top,
           behavior: 'smooth',
        })
            
              
}


linksInternos.forEach(item => { 
   item.addEventListener('click',scrollSuave)
})

const sections = document.querySelectorAll('.js-scroll')
const windowMetade = window.innerHeight * 0.6
function animationScroll(e){ 
        sections.forEach(section => { 
           const sectionTop = section.getBoundingClientRect().top - windowMetade;
          

            if(sectionTop < 0 ){ 
                section.classList.add('ativo')
            }
        })
}


window.addEventListener('scroll',animationScroll)