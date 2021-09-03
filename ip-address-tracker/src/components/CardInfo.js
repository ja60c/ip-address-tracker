import { Card } from 'react-bootstrap'

function CardInfo({ information }) {
    return(
        <Card className="card flex-row bg-warning border-1 rounded-start rounded-end shadow p-3 bg-body rounded">
            <Card.Body className="card-body col-2 p-3 ">
                <Card.Title>IP Address</Card.Title>
                <Card.Text>
                    {information && <p>{information.ip}</p>}
                </Card.Text>
            </Card.Body>
            <div className="vl"></div>
            <Card.Body className="card-body col-2 p-3">
                <Card.Title>Location</Card.Title>
                <Card.Text>
                    {information && <p>{information.location}</p>}
                </Card.Text>    
            </Card.Body>
            <div className="vl"></div>
            <Card.Body className="card-body col-2 p-3">
                <Card.Title>Timezone</Card.Title>
                <Card.Text>
                    {information && <p>{information.timezone}</p>}
                </Card.Text>
            </Card.Body>
            <div className="vl"></div>
            <Card.Body className="card-body col-2 p-3">
                <Card.Title>ISP</Card.Title>
                <Card.Text>
                    {information && <p>{information.isp}</p>}
                </Card.Text>
            </Card.Body>
        </Card> 
    )
}

export default CardInfo;