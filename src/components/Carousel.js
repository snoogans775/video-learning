import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from '../styles/Components';
import { NavigationArrows as Arrows } from './Navigation';
export default function CarouselComponent({data, wrapper, seeMoreRef}) {
    const Wrapper = wrapper;
    return (
        <>
            <Carousel>
                <Arrows></Arrows>
                {data.map( item => {
                    return <Wrapper key={item.id} data={item} />
                })}
                
            </Carousel>
            {data.length > 2 && seeMoreRef && <Link to={seeMoreRef || '/'}><h3>See More...</h3></Link>}
        </>
    );
}