import { useState} from 'react';
import { useNavigate} from "react-router-dom";


function Form ({ villagers }) {

    const navigate = useNavigate() 
    
    
    //set state for search by birthday form
    const [bdayData, setBdayData] = useState('')
    
    const handleChangeBday = (e) => {
        setBdayData(e.target.value) 
    }

    
    //set state for search by name form
    const [nameData, setNameData] = useState('')
   
    const handleChangeName = (e) => {
        setNameData(e.target.value) 
     }
  
     //search by birthday form      
    const handleSubmitByDate = (e) => {
        //prevent refresh of page on form submission
        e.preventDefault() 

        //if data matches whats in search return true
        const findByBirthday = villagers.find((v) => {
            
            if (bdayData === v.birthday){
                return true
            } else {
                navigate('/notfound')
                return false
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
        setBdayData("")
    } 

        //search by name form 
        const handleSubmitByName = (e) => {
            //prevent refresh of page on form submission
            e.preventDefault() 

        //if data matches whats in search return true
        const findByName = villagers.find((v) => {
            
            if (nameData === v.name['name-USen'].toLowerCase()){
                return true
            } else {
                navigate('/notfound')
                return false
            }             
        })
        //console.log(findByBirthday)
        let matchedAnimal = findByName
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
        setNameData("")
    } 

    return ( 
        /* Search by Birthday form */
        <div className='section'>
            <form className='block' onSubmit={handleSubmitByDate}>
                <label className='label' name='search'>Search by Birthday </label>
                <p class="help"> Please enter date without any extra zeros.</p>
                <div className='field is-grouped control has-icons-left'>
                    <input 
                    className='input control'
                        name='search'
                        type='text' 
                        placeholder="Day/Month"
                        //connect with state to keep track 
                        value={bdayData} 
                        //updates state when user types
                        onChange={handleChangeBday} 
                    /> 
                <span className="icon is-small is-left">
                    <i class="fa-solid fa-cake-candles"></i>
                </span>
                    <input className='button is-primary' type='submit' value='Submit' name='search' /> 
                </div>                               
            </form>

        {/* Search by name form */}
            <form className='' onSubmit={handleSubmitByName}>
                <label className='label' name='search'>Search by Name </label>
                <div className='field is-grouped control has-icons-left'>
                    <input 
                    className='input control'
                        name='search'
                        type='text' 
                        placeholder="Name"
                        //connect with state to keep track 
                        value={nameData} 
                        //updates state when user types
                        onChange={handleChangeName} 
                    /> 
                <span className="icon is-small is-left">
                    <i class="fa-solid fa-cake-candles"></i>
                </span>
                    <input className='button is-primary' type='submit' value='Submit' name='search' /> 
                </div>                               
            </form>

        </div>
     );
}

export default Form ;