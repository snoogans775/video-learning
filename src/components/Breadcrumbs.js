import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../styles/Components';

export default function BreadcrumbsComponent(props) {
    return (
        <Link to='/'><Breadcrumbs>Back To Media Library</Breadcrumbs></Link>
    )
}