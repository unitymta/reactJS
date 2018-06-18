import React, { Component } from 'react';

class NewsItem extends Component {
    render() {
        return (
            <div className="col-4">
                <div className="card-deck">
                    <div className="card">
                        <a href="/tin-chi-tiet"><img className="card-img-top" src={this.props.img} alt="demo" /></a>
                        <div className="card-body">
                        <h4 className="card-title">{this.props.title}</h4>
                        <p className="card-text">{this.props.noidung}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;