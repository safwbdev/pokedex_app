import { typeColors } from '../constants/typeColors';

const TypeSection = (data:any) => {

    const getBG =(getType:string):string=>{
        let getColor = '';
        typeColors.map(({type, color})=>{
          if ( getType === type){
            getColor = color;
          }
        })
    return getColor
    }   
    
  return (
    <>
        <div className='font-bold text-l mb-2'>Types</div>
            {data.data.map((val:any) =>(
            <span  
                key={val.type.name}
                className={`${getBG(val.type.name)} capitalize inline-block rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2`} >
                {val.type.name}
            </span>
            ))}
        <hr />
        </>
    );
};

export default TypeSection;
