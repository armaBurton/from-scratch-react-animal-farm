import Animal from '../Animals/Animals';

export default function AnimalList(props){


  return (
    <div className='animal-farm'>
      {
        props.animals.map((item, i) => (
          // <div className='animal' key={item.name + i} style={{ left: `${item.left}`, top: `${item.top}` } }>
            
          <Animal key={item.name + i} {...item} />
          // </div>
        ))
      }
    </div>
  );
}