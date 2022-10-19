import React from 'react';
import './Content.css';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Content = ({ctInfo}) => {
    const {title, disc, shortDisc} = ctInfo;
    return (
        <div className='content text-center'>
            <Container>
                <Title title={title? title: 'null'}/>
                 <p className='mt-2'>{disc? disc: ''}
                 <strong className='mt-2 d-block'>{shortDisc? shortDisc: ''}</strong>
                </p>
            </Container>
        </div>
    );
};

export default Content;