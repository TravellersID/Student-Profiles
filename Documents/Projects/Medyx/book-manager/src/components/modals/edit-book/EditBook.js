import React from 'react';
import './style.css';
import { Fragment } from 'react';
import { Dialog, Button } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

export default class EditBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //todo
      id: props.bookInfo,
      title: props.bookInfo.title,
      published: props.bookInfo.publishingYear,
      author: props.bookInfo.author,
      description: props.bookInfo.description,
    };

    //this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput = (event, field) => {
    //alert(field);
    this.setState({ [field]: event.target.value });
  };

  // handleBookChange = (field, value) => {
  //   console.log(field);
  //   alert(value);
  //   this.setState({ [field]: value });
  // };

  render() {
    return (
      <Fragment id="edit_book_fragment">
        <Dialog
          /* open={this.state.open}
        onClose={this.handleToggle} */
          open={true}
          //onClose={() => props.closeDialog}
          id="addWalletDialog"
          fullWidth={true}
          maxWidth={'md'}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle className="text-center" id="form-dialog-title">
            Book Info
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="ID"
              label="ID"
              value={this.state.publishingYear}
              onChange={(e) => this.handleUserInput(e, 'id')}
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              value={this.state.title}
              onChange={(e) => this.handleUserInput(e, 'title')}
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="author"
              label="Author"
              value={this.state.author}
              onChange={(e) => this.handleUserInput(e, 'author')}
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="published"
              label="published"
              value={this.state.published}
              onChange={(e) => this.handleUserInput(e, 'published')}
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              rows={3}
              rowsMax={Infinity}
              multiline={true}
              value={this.state.description}
              onChange={(e) => this.handleUserInput(e, 'description')}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleDialog} color="primary">
              Save
            </Button>
            <Button
              onClick={this.props.handleDialog}
              color={'secondary'}
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
