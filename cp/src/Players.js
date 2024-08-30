
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Players({input}) {
  return (
    <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" height="250px" src={input.image} />
    <Card.Body>
      <Card.Title>{input.name}</Card.Title>
      <Card.Text style={{ height: "20rem" }}>
        {input.description}
      </Card.Text>
      <Button variant="primary">{input.age}</Button>
    </Card.Body>
  </Card>
  )
}

export default Players
