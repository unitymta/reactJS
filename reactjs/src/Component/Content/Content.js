import React, { Component } from 'react';

class Content extends Component {
    constructor(props){
        super(props);
    }
    message = () => { alert('Cach xu lyJS torng ReactJS'); }
    message2 = () => { alert('thong bao 2'); }
    message3 = (x) => { alert(x); }

    render() {
        return (
            <section>
                <div className="container">
                    <div className="row align-items-center">
                    <div className={"col-lg-6 " + this.props.order1}>
                        <div className="p-5">
                        <img className="img-fluid rounded-circle" src={"img/" + this.props.links} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <div className="p-5">
                        <h2 className="display-4">{this.props.title}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                        <div>
                            <div className="btn btn-info" onClick={this.message}>Edit</div>
                            <div className="btn btn-warning" onClick={() => this.message3('sang')}>Remove</div>
                            <div className="btn btn-warning" onClick={this.message3.bind(this,'sang 2')}>Remove 2</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;