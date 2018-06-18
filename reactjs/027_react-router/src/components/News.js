import React, { Component } from 'react';
import NewsItem from './NewsItem';
import dl from './dulieu.json';

class News extends Component {
   
    render() {
        return (
            <div>
                <header className="masthead tintuc">
                    <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto">
                            <h1 className="mb-5">Tin tuc</h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>
                {/* begin tintuc */}
                <div className="container">
                    <div className="row">
                        {dl.map((value, key) => (
                            <NewsItem key={key} img={value.anh} noidung={value.trichDan} title={value.tieuDe}/>
                        ))}                        
                    </div>
                </div>
            </div>

        );
    }
}

export default News;