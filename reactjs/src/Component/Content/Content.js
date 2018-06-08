import React, { Component } from 'react';

class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            trangThai:0
        }
    }

    renderButton = () => (
            <div>
                <div className="btn btn-info" onClick={ () => this.clickEdit() }>Edit</div>
                <div className="btn btn-warning">Remove</div>
                {/* <div className="btn btn-warning" onClick={this.message3.bind(this,'sang 2')}>Remove 2</div> */}
            </div>
        )
       
    renderForm = () => (
        <div className="row">
            <div className="form-group">
              <input ref={(dulieunhap) => {this.trunggian = dulieunhap }} defaultValue={this.props.title} type="text" name="ten" className="form-control" />
              <div className="btn btn-block btn-danger" onClick={ () => this.clickSave()}>Save</div>
            </div>
        </div>
    )
    clickEdit = () => {
        this.setState({trangThai:1});
    }
    clickSave = () => {
        this.setState({trangThai:0});
        // console.log(this.trunggian.value);
        
    }
    displayCheck = () => {
        if( this.state.trangThai === 0){
            return this.renderButton();
        }
        else{
            return this.renderForm();
        }
    }

    render() {
        return (
            <div className={"col-lg-4 " + this.props.order1}>
                <div className="p-5">
                    <img className="img-fluid rounded-circle" src={"img/" + this.props.links} alt="" />
                </div>
                <div className="p-5">
                    <h2 className="display-4">{this.props.title}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    {this.displayCheck()}
                </div>
            </div>
        );
    }
}

export default Content;