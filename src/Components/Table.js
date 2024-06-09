
import "./Table.css";

const Table = (props)=>{
    
    const array=props.criminalArray;
    console.log(array)
    

    return (
      <>

<html lang="en">
<head>

<title>Prisoner Details</title>

</head>
<body className="bodyy">

<div class="container">
  <h2>Prisoner Details</h2>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Date of Birth</th>
        <th>Crime Committed</th>
        <th>Entry Date</th>
      </tr>
    </thead>
    <tbody>
      {props.criminalArray.length===0?<p style={{color:"white"}}>No Data Exists</p>:
      (array.map((data,index)=>
      <tr key={index}>
        <td>{++index}</td>
        <td>{data.Fname}</td>
        <td>{data.Lname}</td>
        <td>{data.DOB}</td>
        <td>{data.Crime}</td>
        <td>{data.Entry}</td>
      </tr>)
      )}
    </tbody>
  </table>
</div>

</body>
</html>

        </>

    )
}

export default Table;