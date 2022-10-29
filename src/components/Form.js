import { useState} from 'react';
import { useNavigate} from "react-router-dom";


function Form ({ villagers }) {

    //console.log(villagers)
    const navigate = useNavigate() 
    
    

    //set state to hold the data of form
    const [formData, setFormData] = useState('')
    //gain access to form input

    const handleChange = (e) => {
       setFormData(e.target.value) 
    }
           
    const handleSubmit = (e) => {
        //prevent refresh of page on form submission
        e.preventDefault() 

        //if data matches whats in search return true
        const findByBirthday = villagers.find((v) => {
            
            if (formData === v.birthday){
                return true
            } else {
                navigate('/notfound')
            }             
        })
        //console.log(findByBirthday)
        let matchedAnimal = findByBirthday
        //console.log(matchedAnimal)
        
            const bdayString = matchedAnimal["birthday-string"]
            console.log(bdayString)
            const newBdayString = bdayString.split(" ")
            const month = newBdayString[0]
            

            const birthday = matchedAnimal.birthday
            const newBirthday = birthday.split('/')
            const day = newBirthday[0]

        
            navigate(`/calendar/${month}/${day}/villager/${matchedAnimal.id}`)

        //clear form after submission
        setFormData("")
    } 

    return ( 
        <div className='box control has-icons-left'>
            <form onSubmit={handleSubmit}>
                <label className='label' name='search'>Search for your birthday match </label>
                <input 
                className='input'
                    name='search'
                    type='text' 
                    placeholder="Day/Month"
                    //connect with state to keep track 
                    value={formData} 
                    //updates state when user types
                    onChange={handleChange} 
                />
                <span className="icon is-small is-left">
                <i class="fa-solid fa-magnifying-glass"></i>
                </span>
                <input className='button' type='submit' value='submit' name='search' />
                
            </form>
        </div>
     );
}

export default Form ;