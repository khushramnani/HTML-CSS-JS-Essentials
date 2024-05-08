function one(){
    const name = "khush"
    function two(){
        const age = "19"

        console.log(name); //yeh run ho jaye ga kyuki inner outer se value le sackta hai (chote bache bade se ice cream le sackte hai) 
        
    }
    two()
    
    // console.log(age); yeh nahi hoga kyuki outer function inner ki value nahi le sackta 
    
    
}
one()
