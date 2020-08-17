let form = document.querySelector('form')
let output = document.querySelector('.output');
const typeSelected = ()=>{
    
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
       let input=  form.querySelector('input').value
       let select = form.querySelector('select').value
        
        if(select === 'Binary'){
            output.innerHTML = Number(input).toString(2)

        } else if(select === 'Octal'){
            output.innerHTML = Number(input).toString(8)

        } else if(select === 'Hexa'){
            output.innerHTML = Number(input).toString(16)
       }


        
    })

}


export default typeSelected;