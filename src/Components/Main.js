import React from 'react'
import { Container, Button, Row, Col, Modal, InputGroup, FormControl } from 'react-bootstrap';
import Goal from './Goal'
import listofgoals from './listofgoals'
import { PayPalButton } from "react-paypal-button-v2";


const styles = {

    backgroundColor: "#6290C8",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "2%",
    borderRadius: "20px"
}

class Main extends React.Component {

    constructor() {
        super()
        this.state = {
            show: false,
            inputGoal: '',
            inputDate: '',
            inputFee: '',
            //goalList: listofgoals    //in array collection of goals
            goalList: []    //in array collection of goals
        }
        this.addToList = this.addToList.bind(this)
    }

    addToList(){
        // const inputGoal = this.state.inputGoal
        // const inputDate = this.state.inputDate

        // const goal = {
        //     goal:{inputGoal}, duedate: {inputDate}
        // }

        // this.setState(prevState => {
        //     const updatedGoalList = prevState.goalList.push(goal) 
        //     console.log("goal added! " + goal)
        //     return {goalList: updatedGoalList}
        // })

        const newItem = {
            id: Math.random() * Number.MIN_SAFE_INTEGER,
            inputGoal: this.state.inputGoal.slice(),
            inputDate: this.state.inputDate.slice(),
            inputFee: this.state.inputFee.slice(),
        }

        let tempList = this.state.goalList

        if (newItem.inputGoal !== '') {
            tempList.push(newItem);
            this.setState({
                show: !this.state.show,
                inputGoal: '',
                inputDate: '',
                inputFee: '',
                goalList: tempList
            })
        } else {
            alert("Please fill out the goal field");
        }
    }

    deleteTask(id) {
        let tempList = this.state.goalList
        let tempList2 = tempList.filter((item) => item.id !== id)

        this.setState({
            goalList: tempList2
        })
    }

    updateGoal(input) {
        this.setState({
            inputGoal: input
        })
    }

    updateDate(input) {
        this.setState({
            inputDate: input
        })
    }

    updateFee(input) {
        this.setState({
            inputFee: input
        })
    }

    checkBox(event, id) {
        let tempList = this.state.goalList
        if (event.target.checked === true) {
            for (var i = 0; i < tempList.length; i++) {
                if (tempList[i].id === id) {
                    tempList[i].txtDecoration = "line-through";
                    tempList[i].color = "black";
                }
            }
        } else {
            for (var i = 0; i < tempList.length; i++) {
                if (tempList[i].id === id) {
                    tempList[i].txtDecoration = "initial";
                    tempList[i].color = "white";
                }
            }
        }
        this.setState({
            goalList: tempList
        })
    }
    
    render() {
       
        // const goals = this.state.goalList.map(goal => {
        //     return (
        //        <Goal goal={goal.goal} duedate={goal.duedate} />
        //     )
        // })
    
        return (
            <div>
                <br/><br/><br/>
                <h3>Put a check beside your goal before the deadline, else a charge will be inflicted and goes towards charity</h3> <br/>

                <Container>
                    <div style={styles}>
                        <h3 style={{ textAlign: "left", color: "white"}}>My Goals:</h3> <br/>

                        {this.state.goalList.map(task => {
                        return (
                            <div>
                                <Row style={{ textAlign: "center" }}>
                                    <Col>
                                        <label>
                                            <input type="checkbox" name="checkbox" value="value" onClick={(e) => { this.checkBox(e, task.id) }} />
                                            <strong style={{ textDecoration: task.txtDecoration, color: task.color }}> {task.inputGoal}</strong>
                                        </label>
                                    </Col>
                                    <Col style={{ textDecoration: task.txtDecoration, color: task.color }}>Finish By:<strong>{task.inputDate}</strong></Col>
                                    <Col><Button variant="danger" style={{ color: task.color }} onClick={() => this.deleteTask(task.id)}>Delete</Button></Col>
                                </Row>
                                <hr />
                            </div>
                        )
                    })}

                        {/* <div className="listofgoals"> {this.state.goalList[0] != null ? {goals}  : "No goals yet!" } </div> */}
                        <hr style={{ border: "1px solid #FFFFFF" }} />  <br/>
                        <Button variant="success" size="lg" onClick={() => { this.setState({ show: !this.state.show }) }}>ADD GOAL</Button>

                        {/* <br/><br/>
                        <PayPalButton
                            amount="2.00"
                            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                            onSuccess={(details, data) => {

                                this.setState({
                                    // orderID: data.orderID,
                                })

                                // let tempArray = [];
                                // var row = this.props.location.state.order;

                                // for (var i = 0; i < row.length; i++) {
                                //     const newItem = {
                                //         name: row[i].name.slice(),
                                //         quantity: row[i].quantity,
                                //         size: row[i].sizes[0].slice(),
                                //         imageURL: row[i].imageURL.slice()
                                //     }
                                //     tempArray.push(newItem);
                                // }

                                //POST data to backend on successful payment
                                // axios.post("/api/v1/orders", {
                                //     name: this.state.name.slice(),
                                //     orderNumber: data.orderID.slice(),
                                //     address: (this.state.address + ", " + this.state.city + ", " + this.state.province + ", " + this.state.country).slice(),
                                //     items: tempArray,
                                //     shipping: this.state.shippingCost
                                // });
                            }}
                            options={{
                                clientId: "AUO1bs3x7yVCUOHMzmzN6Mj61nbjj_5TK2N0nKoTmHoCic0fryj97PkU9sNhLXoQ2BCdEvr1UqqGuxz0"
                            }}
                        /> */}

                    </div>
                </Container>

                <Modal
                    show={this.state.show}
                    onHide={() => { this.setState({ show: !this.state.show }) }}
                    size="lg"
                    aria-labelledby="example-modal-sizes-title-lg"
                    style={{ color: "black" }}
                >
                    <Modal.Header>
                        <Modal.Title>
                            <strong>&thinsp; Add Goal</strong>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-default">Goal: </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl placeholder="What is your new goal?" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={this.state.inputGoal} onChange={(e) => this.updateGoal(e.target.value)} />
                                </InputGroup>
                        </Row>
                        <Row>
                                <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-default">Due date (YYYY-MM-DD): </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl placeholder="Goal due date" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={this.state.inputDate} onChange={(e) => this.updateDate(e.target.value)} />
                                </InputGroup>
                        </Row>
                        <Row>
                                <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-default">Penalty Fee ($): </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl placeholder="Penalty Fee" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={this.state.inputFee} onChange={(e) => this.updateFee(e.target.value)} />
                                        <InputGroup.Append>
                                            <InputGroup.Text>.00</InputGroup.Text>
                                        </InputGroup.Append>
                                </InputGroup>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="info" onClick={() => this.addToList()} size="lg" block >ADD GOAL</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}
export default Main
