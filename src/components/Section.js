import React from 'react'
import { Section } from '../styles/Components'
export default function SectionDiv(props) {
    return (
        <Section >
            {props.children}
        </Section>
    )
}