import React from 'react';
import './Content.css';
import TitleHead from '../TitleHead/TitleHead';
import { Container } from 'react-bootstrap';

const Content = ({ctInfo}) => {
    const {title, disc, shortDisc} = ctInfo;
    return (
        <div className='content text-center'>
            <Container>
                <TitleHead title={title? title: ''}/>
                 <p className='mt-2'>{disc? disc: ''}
                 <strong className='mt-2 d-block'>{shortDisc? shortDisc: ''}</strong>
                </p>
            </Container>
        </div>
    );
};

export default Content;