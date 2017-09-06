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

    renderInstructionsCharts(data2) {
        return (
            <BarChart width={600} height={300} data={data2} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
            </BarChart>
        );
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
        const data2 = [
            { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
            { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
            { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
            { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
            { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
            { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
            { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
        ];
        return (
            <div>
                <BarChart width={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="corretas" fill="#8884d8" minPointSize={5} />
                    <Bar dataKey="erradas" fill="#82ca9d" minPointSize={10} />
                </BarChart>
                {this.renderInstructionsCharts(data2)}
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    nivelsStats: selectNivelsStats
});

export default connect(mapStateToProps, { fetchNivelsStats })(StatsPage);
