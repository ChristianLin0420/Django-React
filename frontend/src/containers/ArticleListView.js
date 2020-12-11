import React from 'react';
import axios from 'axios';

import Articles from '../components/Article'

class ArticleList extends React.Component {

    state = {
        aritcles: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    aritcles: res.data
                });
            })
    }

    render() {
        return (
            <Articles data={this.state.aritcles} />
        )
    }
}

export default ArticleList;