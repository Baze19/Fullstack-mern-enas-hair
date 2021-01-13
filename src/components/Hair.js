import React, { Component } from 'react'
import { Button, ListGroup, Container, ListGroupItem } from 'reactstrap'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { v4 as uuid } from "uuid"
import { connect } from 'react-redux'
import { getItems, deleteItem } from '../actions/items'
import propTypes from 'prop-types'
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import insta from '../images/insta.png'
import what from '../images/what.png'
export class Hair extends Component {
    componentDidMount() {
        //whenever we bring in an action in a component we have to call itas props when the component mount
        this.props.getItems()

    }
    onDeleteClick = (id) => {
        this.props.deleteItem(id)
    }
    render()
    //destructure the items array from the state
    //below we return a prompt which will instruct to add new product and the price.then we check if both are entered
    //i want to set the data in the state by copp

    {
        const { items } = this.props.item
        return (
            <div>
                <Container>

                    <ListGroup>
                        <TransitionGroup>
                            {items.map(({ _id, name, price,  }) => (
                                <CSSTransition key={_id} timeout={500} xm={12}>
                                    <ListGroupItem>
                                        <Button size="small" color="danger" className="remove-btn"
                                            onClick={this.onDeleteClick.bind(this, _id)}>
                                            X
                                  </Button>
                                        {name} {''} {price} 
                                        
                                    </ListGroupItem>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ListGroup>
                </Container>
                <>
        <Card className=" bg-danger">
            <CardBody>
              <CardTitle className=" text-white" tag="h3">
                ENA'S HAIR
              </CardTitle>
              <blockquote className=" blockquote  mb-0">
                <p>
                 ENA'S HAIR is ready to render affordable services and sell quality hair.
                 <p className="text-warning">kindly follow  <img src={insta} className="flex" width="50px"></img> Enahair.524 to view more images of new and quality products</p>
                </p>
                <p> Chat us <img src= {what} className="flex" width="50px"></img>08094809021 </p>
                <footer className=" blockquote-footer text-danger">
                  Kindly Place your orders <cite title="Source Title">,we deliver everywhere across the country</cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </>
            </div>
        )
    }
}


Hair.propTypes = {
    getItems: propTypes.func.isRequired,
    item: propTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { getItems, deleteItem })(Hair)

