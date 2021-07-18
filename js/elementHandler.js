export default class ElementHandler {
    constructor(element){
        this.element = document.getElementsByTagName(element)
        this.userData = JSON.parse(localStorage.getItem('userData')) || []
    }
    userHandler(){
        const findElment = this.userData.find(element => element.email === this.element[1].value)
        if(findElment){
            return `E-mail ${this.element[1].value} já está cadastrado!`
        }else{
            const data = {
                name: this.element[0].value,
                email: this.element[1].value,
            }
            this.userData.push(data)
            localStorage.setItem('userData', JSON.stringify(this.userData) )
            return `E-mail ${this.element[1].value} cadastrado com sucesso!`
        }
    }
}