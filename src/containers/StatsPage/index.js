import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

import { fetchNivelsStats } from "./actions";
import { selectNivelsStats } from "./selectors";

class StatsPage extends Component {
    componentDidMount() {
        this.props.fetchNivelsStats();
    }

    formatBarData(nivelsStats) {
        let data = [];
        nivelsStats.map(item => {
            let obj = {};
            obj.name = `Nível ${item.nivelId}`;
            obj.corretas = item.correctAnwsers;
            obj.erradas = item.wrongAnwsers;
            data.push(obj);
        });
        return data;
    }

    renderInstructionsCharts(nivelsStats) {
        const instructionsCharts = nivelsStats.map(item => (
            <div className="col-lg-4">
                <div className="well" key={item.nivelId}>
                    Nível {item.nivelId}
                    <BarChart
                        width={300}
                        height={150}
                        barSize={20}
                        data={item.totalInstructions}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <XAxis dataKey="numOccurrence" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="numInstructions" fill="#8884d8" />
                    </BarChart>
                </div>
            </div>
        ));
        return <div>{instructionsCharts}</div>;
    }

    render() {
        const nivelsStats = this.props.nivelsStats.get("nivelsStats");
        const tableRow = nivelsStats.map(item => (
            <tr key={item._id}>
                <td className="text-center">{item.nivelId}</td>
                <td className="text-center">{item.correctAnwsers}</td>
                <td className="text-center">{item.wrongAnwsers}</td>
            </tr>
        ));

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
