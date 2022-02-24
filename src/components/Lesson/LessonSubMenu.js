import React, { useState, useEffect } from 'react';
import { SubMenu } from '../../styles/Components';

export default function LessonSubMenuComponent({lesson}) {
    const { overview, resources } = lesson;
    console.log( overview, resources );
    return ( 
        <SubMenu>
            {/* <span className="active">Overview</span> */}
            <span>Resources</span>
        </SubMenu>
    );
}