

function Props(props){
    
 const {name, temp, feels_like, clouds} = props.test

return(
    <div>
        <h4>{name}</h4>
        <h4>{temp}</h4>
        <h4>{feels_like}</h4>
        <h4>{clouds}</h4>
        
    </div>
    )
}

export default Props

/*

cities && (
    <ol>
      {cities.map((city) => (
        <li key={city.id}>{city.name}</li>
      ))}
    </ol>
  )
*/