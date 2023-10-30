import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const UserCard = ({ user }) => {
    return (
        <Card className='cardDiv' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Image.png" />
            <Card.Body>
                <Card.Title><center>{user.name}</center></Card.Title>
                <Card.Text>
                    <output><b>Street : </b> {user.address.street}</output>
                    <output><b>Suite : </b>{user.address.suite}</output>
                    <output><b>City : </b>{user.address.city}</output>
                    <output><b>Zipcode : </b>{user.address.zipcode}</output>
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item ><b>Email : </b>{user.email}</ListGroup.Item>
                <ListGroup.Item><b>Website : </b>{user.website}</ListGroup.Item>
                <ListGroup.Item><b>Phone : </b>{user.phone}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">{user.address.geo.lat}</Card.Link>
                <Card.Link href="#">{user.address.geo.lng}</Card.Link>
            </Card.Body>
        </Card>
    );
}
export default UserCard;