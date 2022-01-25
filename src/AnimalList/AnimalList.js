import './AnimalList';

export default function AnimalList(props){
 
  return (
    <div className='animal-farm'>
      {
        props.animals.animals.map((item) => (
          <div className='animal' key={item.name} style={{ left: `${item.left}` }}>
            <img alt={item.name} src={`/animals/${item.type}.svg`} />
            <h3>{item.name}</h3>
            <p>{item.says}</p>
          </div>
        ))
      }
    </div>
  );




}