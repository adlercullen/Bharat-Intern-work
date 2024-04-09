import { useState } from "react"
import "./Criminal.css"


const Criminal=(props)=>{

    const[current,Set]=useState({name:"",last:"",birth:"",crime:"",entry:""})

const nameChange=(event)=>{
    Set({...current,name:event.target.value})
}
const lastChange=(event)=>{
    Set({...current,last:event.target.value})
}
const birthChange=(event)=>{
    Set({...current,birth:event.target.value})
}
const crimeChange=(event)=>{
    Set({...current,crime:event.target.value})
}
const entryChange=(event)=>{
    Set({...current,entry:event.target.value})
}





    const formSubmit=(event)=>{
        event.preventDefault();
        
        const array={
            Fname:current.name,
            Lname:current.last,
            DOB:current.birth,
            Crime:current.crime,
            Entry:current.entry
        }

        props.form(array);

        Set({name:"",last:"",birth:"",crime:"",entry:""});
    }
    
    return (
        <>
<html lang="en">
<head>

<title>Prisoner Registration Form</title>
<style>

</style>
</head>
<body className="Crime">



<form onSubmit={formSubmit}>
<h2>Prisoner Registration Form</h2>
  <label for="fname">First Name:</label>
  <input type="text" id="fname" name="firstname" onChange={nameChange} value={current.name} required />

  <label for="lname">Last Name:</label>
  <input type="text" id="lname" name="lastname" onChange={lastChange} value={current.last} required />

  <label for="dob">Date of Birth:</label>
  <input type="date" id="dob" name="dob" onChange={birthChange} value={current.birth} required />

  <label for="crime">Crime Committed:</label>
  <textarea id="crime" name="crime" rows="4" onChange={crimeChange} value={current.crime} required></textarea>

  <label for="entry_date">Entry Date:</label>
  <input type="date" id="entry_date" name="entry_date" onChange={entryChange} value={current.entry} required/>

  <input type="submit" value="Register"/>
</form>

</body>
</html>
        
        </>
    )
}

export default Criminal;