import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { fetchNivelsStats } from './actions';
import { selectNivelsStats } from './selectors';


class StatsPage extends Component {

    componentDidMount() {
        this.props.fetchNivelsStats();
    }

    render() {
        const nivelsStats = this.props.nivelsStats.get('nivelsStats');
        const tableRow = nivelsStats.map((item) => 
            <tr key={item._id}>
                <td className="text-center">{item.nivelId}</td>
                <td className="text-center">{item.correctAnwsers}</td>
                <td className="text-center">{item.wrongAnwsers}</td>
            </tr>
            
        );
        
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className="text-center" rowSpan="2">Nível</th>
                            <th className="text-center" colSpan="2">Respostas</th>
                        </tr>
                        <tr>
                            <th className="text-center">Corretas</th>
                            <th className="text-center">Erradas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRow}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    nivelsStats: selectNivelsStats
});

export default connect(mapStateToProps, { fetchNivelsStats })(StatsPage);
