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
                        Viernes 4 Diciembre ๐
                    </Button>
                </Col>
                <Col
                    md   = { 4 }
                >
                    <Button
                        href        = '/dec62020'
                        className   = 'mt-3'
                    >
                        6 Diciembre ๐น๐บ
                    </Button>
                </Col>
                <Col
                    md   = { 4 }
                >
                    <Button
                        href        = '/dec182020'
                        className   = 'mt-3'
                    >
                        Viernes 18 Diciembre ๐ท
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
                        El recuerdo de una de tus mejores sonrisas ๐
                    </Button>
                </Col>
                <Col
                    md   = { 6 }
                >
                    <Button
                        href        = '/SpecialInvitation'
                        className   = 'mt-3'
                    >
                        Una invitaciรณn muy especial ๐
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
                        Diez de Mayo Especial ๐๐๐
                    </Button>
                </Col>

                <Col
                    md   = { 6 }
                >
                    <Button
                        href        = '/sep092021'
                        className   = 'mt-3'
                    >
                        Un dรญa de festejo especial ๐๐๐
                    </Button>
                </Col>
            </Row>
        </Fragment>
    )
}

export { 
    ButtonsSection 
};
