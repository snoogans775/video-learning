import React from 'react'
import { Resource } from '../../styles/Components'
import resourceImage from '../../static/resources.png'
export default function ResourceCard({data}) {
    return (
        <Resource src={resourceImage} alt="resource" />
    )
}