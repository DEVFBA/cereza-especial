import React, {
    Fragment
} from 'react';

import { 
    Button,
    Row,
    Col
  } from 'react-bootstrap';

const ButtonsSection = () => {

    return(
        <Fragment>
            <Row
                className =  'text-center'
            >
                <Col
                    md   = { 4 }
                >
                    <Button
                        href        = './dec42020' 
                        className   = 'mt-3'
                    >
                        Viernes 4 Diciembre 🍒
                    </Button>
                </Col>
                <Col
                    md   = { 4 }
                >
                    <Button
                        href        = '/dec62020'
                        className   = 'mt-3'
                    >
                        6 Diciembre 🌹🌺
                    </Button>
                </Col>
                <Col
                    md   = { 4 }
                >
                    <Button
                        href        = '/dec182020'
                        className   = 'mt-3'
                    >
                        Viernes 18 Diciembre 🌷
                    </Button>
                </Col>
            </Row>

            <Row
                className =  'text-center'
            >
                <Col
                    md   = { 6 }
                >
                    <Button
                        href        = '/BestSmile'
                        className   = 'mt-3'
                    >
                        El recuerdo de una de tus mejores sonrisas 😌
                    </Button>
                </Col>
                <Col
                    md   = { 6 }
                >
                    <Button
                        href        = '/SpecialInvitation'
                        className   = 'mt-3'
                    >
                        Una invitación muy especial 🚂
                    </Button>
                </Col>
            </Row>
            <Row
                className =  'text-center'
            >
                <Col
                    md   = { 6 }
                >
                    <Button
                        href        = '/may1022021'
                        className   = 'mt-3'
                    >
                        Diez de Mayo Especial 🍒🍒🍒
                    </Button>
                </Col>
            </Row>
        </Fragment>
    )
}

export { 
    ButtonsSection 
};
