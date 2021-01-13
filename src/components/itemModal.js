import React, { Component } from 'react'
import { Form, Button, Modal, Label, Input, ModalHeader, ModalBody, FormGroup } from 'reactstrap'
import { connect } from 'react-redux'
import{addItem} from '../actions/items'

export class itemModal extends Component {

    state = {
        modal: false,
        name: '',
        price: '',
        
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }

    onSubmit = (e) => {
        e.preventDefault()
        const newProduct = {
            
            name: this.state.name,
            price: this.state.price,
            selectedFile: this.state.selectedFile
        }

        //call the action
        this.props.addItem(newProduct)
        //close the model
        this.toggle()
    }

   
    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}>

                </Button>
            Add New Product

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>please Add new product</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup >
                                <Label>name</Label>
                                <Input type="text"
                                    name="name"
                                    id="name"
                                    placeholder="name"
                                    onChange={this.onChange}></Input>
                            </FormGroup>
                            <FormGroup >
                                <Label>price</Label>
                                <Input type="text"
                                    name="price"
                                    id="price"
                                    placeholder="enter price"
                                    onChange={this.onChange}></Input>
                            </FormGroup>
                            
                            <Button color="dark" block style={{ marginTop: '2rem' }}>submit Item</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = (state)=> ({
    item:state.item
})


export default connect(mapStateToProps,{addItem})(itemModal)
