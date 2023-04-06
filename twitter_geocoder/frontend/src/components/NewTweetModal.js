import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewTweetForm from "./NewTweetForm";

class NewTweetModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    const create = this.props.create;

    var title = "Editing Tweet";
    var button = <Button onClick={this.toggle} className="btn-sm">Edit</Button>;
    if (create) {
      title = "Creating New Tweet";

      button = (
        <Button
          color="primary"
          className="btn-sm float-right"
          onClick={this.toggle}
          style={{ minWidth: "200px" }}
        >
          Create New
        </Button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewTweetForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              tweet={this.props.tweet}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewTweetModal;