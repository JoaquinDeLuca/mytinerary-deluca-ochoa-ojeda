import '../styles/SingInForm.css'
import {  useState } from 'react'
import { usePostUserSingInMutation } from '../features/userApi'

export default function SingInForm() {

  const [userLogin] = usePostUserSingInMutation()

  const [userLS, setUserLS] = useState(0)

  const [login, setLogin] = useState({
    mail:"",
    password:"",
    form:"form",
    role:""
  })

  const captureData = (event) => {
    const { name, value } = event.target
    setLogin({...login, [name]: value})
  }


  const saveData = (event) => {
    event.preventDefault()

    const userData = {
      mail: login.mail,
      password: login.password,
      form: login.form,
      role: login.role
    }
    // console.log(userData)

    userLogin(userData)
    .then( Response => setUserLS(localStorage.setItem('useriInfo', JSON.stringify(Response.data.response.user))))

    event.target.reset()

    window.location.replace('/')
  }

  
  return (
    <div className='SingInForm-container'>
      <form onSubmit={saveData} className='SingInForm-form'>
        <input onChange={captureData} name='mail'     className='SingInForm-input' placeholder='Email'    type='text' required/>
        <input onChange={captureData} name='password' className='SingInForm-input' placeholder='Password' type='password' required/>
        <button className='SingInFor-btn'>Sing In</button>
      </form>
    </div>
  )
}
