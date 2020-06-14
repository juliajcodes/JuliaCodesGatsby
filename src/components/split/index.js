import React, { useState, useEffect } from 'react';
import { Paragraph } from '../../theming/styles';
import ButtonA from '../button';
import { SplitCont } from './styles';
// import Odometer from 'react-odometerjs';
// import '../../theming/odometer.css';

const Split = () => {
    const [project, setProject] = useState(0);
    const [internship, setInternship] = useState(0);

    useEffect(() => {
        setProject(22);
        setInternship(5);
    }, []);

    return (
        <SplitCont>
            <div className='left'>
                <Paragraph>
                    Through these experiences, I've had the opportunity to
                    create memorable products that are not only enjoyable to
                    use, but are written in code thats maintainable and easy to
                    understand. I've had the opportunity to create memorable{' '}
                </Paragraph>
                <a href='/about'>
                    <ButtonA title='About Me' />
                </a>
            </div>
            <div className='right'>
                {/* <div className='leftInner'>
                    <Odometer format='d' duration={500} value={project} />
                    <Paragraph>projects & applications</Paragraph>
                </div>
                <div className='rightInner'>
                    <Odometer format='d' duration={500} value={internship} />
                    <Paragraph>internships completed</Paragraph>
                </div> */}
            </div>
        </SplitCont>
    );
};

export default Split;