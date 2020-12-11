import React from 'react';
import axios from 'axios';

import { Card } from 'antd';

class ArticleDetial extends React.Component {

    state = {
        aritcle: {}
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            .then(res => {
                this.setState({
                    aritcle: res.data
                });
            })
    }

    render() {
        return (
            <Card title={this.state.aritcle.title}>
                <p>{this.state.aritcle.content}</p>
            </Card>
        )
    }
}

export default ArticleDetial;