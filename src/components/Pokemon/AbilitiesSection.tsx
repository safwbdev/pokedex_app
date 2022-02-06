import React from 'react';

const AbilitiesSection = (data:any) => {
    const trimName =(name:string):string=> name.replace("-"," ");
    
    return (
        <>
            <div className='font-bold text-l mb-2 mt-2'>Abilities</div>
            <div className='mb-4'>
                {data.data.map((ability:any) =>{
                    return <span className='capitalize inline-block px-3 py-1' key={ability.ability.name}>{trimName(ability.ability.name)}</span>
                })}
            </div>
            <hr />
        </>
    );
};

export default AbilitiesSection;