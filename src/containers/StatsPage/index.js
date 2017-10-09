import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { fetchNivelsStats } from './actions';
import { selectNivelsStats } from './selectors';

class StatsPage extends Component {
    componentDidMount() {
        this.props.fetchNivelsStats();
    }

    formatBarData(nivelsStats) {
        let data = [];
        data = nivelsStats.map(item => {
            let obj = {};
            obj.name = `Nível ${item.nivelId}`;
            obj.corretas = item.correctAnwsers;
            obj.erradas = item.wrongAnwsers;
            return obj;
        });
        return data;
    }

    renderInstructionsCharts(nivelsStats) {
        // const orderedNivelStats = nivelsStats.sort(function(a, b) {
        //     if (a.numInstructions < b.numInstructions) return -1;
        //     if (a.numInstructions > b.numInstructions) return 1;
        //     return 0;
        // });
        const instructionsCharts = nivelsStats.map(item => (
            <div className="col-lg-4" key={item.nivelId}>
                <div className="well">
                    <span className="label label-default">Nível {item.nivelId}</span>
                    <BarChart
                        width={300}
                        height={150}
                        barSize={20}
                        data={item.totalInstructions}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <XAxis dataKey="numInstructions" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip payload={[{ name: 'numOccurrence', value: 'Instruções' }]} />
                        <Legend
                            payload={[{ id: 'numInstructions', value: 'Instruções', type: 'rect', color: '#8884d8' }]}
                        />
                        <Bar dataKey="numOccurrence" fill="#8884d8" />
                    </BarChart>
                </div>
            </div>
        ));
        return <div>{instructionsCharts}</div>;
    }

    render() {
        const nivelsStats = this.props.nivelsStats.get('nivelsStats');
        // const tableRow = nivelsStats.map(item => (
        //     <tr key={item._id}>
        //         <td className="text-center">{item.nivelId}</td>
        //         <td className="text-center">{item.correctAnwsers}</td>
        //         <td className="text-center">{item.wrongAnwsers}</td>
        //     </tr>
        // ));

        const data = this.formatBarData(nivelsStats);

        return (
            <div>
                <div className="row">
                    <div className="col-md-2 col-md-offset-2">
                        <BarChart
                            width={600}
                            height={300}
                            data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="corretas" fill="#8884d8" minPointSize={5} />
                            <Bar dataKey="erradas" fill="#82ca9d" minPointSize={10} />
                        </BarChart>
                    </div>
                </div>
                <div className="row">{this.renderInstructionsCharts(nivelsStats)}</div>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    nivelsStats: selectNivelsStats
});

export default connect(mapStateToProps, { fetchNivelsStats })(StatsPage);
