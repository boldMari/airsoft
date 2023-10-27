import questions from "../data"
import Question from "../components/Question"
import "./Information.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Information = () => {

    return  <Container>
		<Row>
			<Col>
            <div className="all-questions">
      {
        questions.map ( (oneQuestion) => {
          return <Question key={oneQuestion.id} {...oneQuestion}/> //rest parameter
        })
      }
    </div>
			</Col>
		</Row>
	</Container>
}


export default Information