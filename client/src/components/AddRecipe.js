import React, { Component } from "react";
import axios from "axios";

class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      ingredients: "",
      directions: "",
      showModal: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    this.handleDirectionsChange = this.handleDirectionsChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.state.name;
    const ingredients = this.state.ingredients;
    const directions = this.state.directions;
    axios
      .post("/api/add", { name, ingredients, directions })
      .then(res => res.data)
      .then(recipe => console.log(recipe));
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }
  handleClose() {
    this.setState({ showModal: false });
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleIngredientsChange(event) {
    this.setState({ ingredients: event.target.value });
  }

  handleDirectionsChange(event) {
    this.setState({ directions: event.target.value });
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-block"
          data-toggle="modal"
          data-target="#formModal"
          onClick={this.open.bind(this)}
        >
          Add Recipe
        </button>
        <br />

        {/* <!-- Modal --> */}
        <div
          show={this.state.showModal}
          class="modal fade"
          id="formModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="formModalLabel"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <form onSubmit={this.handleSubmit}>
                <div class="modal-header">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h4 class="modal-title" id="myModalLabel">
                    Add Recipe
                  </h4>
                </div>
                <div class="modal-body">
                  <div className="form-group">
                    <label>Recipe Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.handleNameChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Ingredients</label>
                    <textarea
                      className="form-control"
                      value={this.state.ingredients}
                      onChange={this.handleIngredientsChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Directions</label>
                    <textarea
                      className="form-control"
                      value={this.state.directions}
                      onChange={this.handleDirectionsChange}
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <input type="submit" class="btn btn-primary" value="Save" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddRecipe;
