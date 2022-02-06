import React from 'react';
import { AbilitiesSection, OtherInfo, StatSection, TypeSection } from '.';

const Pokemon = ({data}:any) => {

    const getOrderNo =(n:any)=> {
        let len = 3 - (''+n).length;
        let fullNo = (len > 0 ? new Array(++len).join('0') : '') + n
        return `# ${fullNo}`
    }

    return (<div className="flex flex-wrap">
                <div className='w-full'>
                    <h2 className="text-3xl font-bold capitalize">{getOrderNo(data.id)} | {data.name}</h2>
                </div>
                <div className='w-full md:w-1/4'>
                    <img src={data.sprites.other.home.front_default} style={{width:"100%"}} alt={data.name}/>
                </div>
                <div className='w-full md:w-1/5'>
                    <TypeSection data={data.types}/>
                    <AbilitiesSection data={data.abilities}/>
                    <OtherInfo weight={data.weight}  height={data.height} />
                </div>
                <div className='w-full md:w-1/2'>
                    <StatSection data={data.stats} />
                </div>
            </div>);
};

export default Pokemon;
