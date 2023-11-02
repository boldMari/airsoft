import { Container, Row, Col } from "react-bootstrap";
import questions from "data"
import Question from "components/Question"
import "pages/information.css"

const Information = () => {

  return <Container>
    <Row>
      <Col>
        <div className="all-questions">
          {
            questions.map((oneQuestion) => {
              return <Question key={oneQuestion.id} {...oneQuestion} /> //rest parameter
            })
          }
        </div>
      </Col>
    </Row>
  </Container>
}

export default Information