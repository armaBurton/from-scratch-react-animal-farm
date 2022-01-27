import './Animals.css';

export default function Animal({ name, type, says, left, top }){

  console.log(name, type, says);
  return (
    <div className='animal' style={{ left: `${left}`, top: `${top}` }}> 
      <img alt={name} src={`/animals/${type}.svg`} />
      <h3>{name}</h3>
      <p>{says}</p>
    </div>
  );
}