// $(document).ready(function(){
// 	$('input[name="phone"]').mask('+38(099) 999-9999')
// 	// $('.input[name="phoneHead"]').mask('+38(099) 999-9999')
// });

const [...inputs] = document.querySelectorAll('#form input')
let formData ={
    name: '',
    phone: '',
	date: '',
    email: '',
	people: '',
	time: ''
}

inputs[0].oninput = function (e){
    formData.name = e.target.value
}
inputs[1].oninput = function (e){
    formData.phone = e.target.value
}
inputs[2].oninput = function (e){
    formData.date = e.target.value
}
inputs[3].oninput = function (e){
    formData.email = e.target.value
}


btnBook.onclick = function(){
    if (!formData.name){
        inputs[0].style.borderColor = 'red'
    } else {
        inputs[0].style.borderColor = '#616161'
    }
    if (formData.phone.length === 9){
        inputs[1].style.borderColor = '#616161'
    } else {
        inputs[1].style.borderColor = 'red'
    }
    if (formData.date.length >= 3 && formData.date.length < 6){
        inputs[2].style.borderColor = '#616161'
    } else {
        inputs[2].style.borderColor = 'red'
    }
    if (formData.email.length >= 5){
        inputs[3].style.borderColor = '#616161'
    } else {
        inputs[3].style.borderColor = 'red'
    }
}
console.log('hello')