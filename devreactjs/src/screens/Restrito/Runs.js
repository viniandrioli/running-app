import React, { Component } from "react"
import ActionCreators from "../../redux/actionsCreators"
import { connect } from "react-redux"
import { Table, Button } from "semantic-ui-react";
class Runs extends Component {
    componentDidMount() {
        this.props.load()
    }
    renderRun(run) {
        <Table.Row>
            <Table.Cell>
                {run.friendly_name}
            </Table.Cell>
            <Table.Cell>
                {run.duration}
            </Table.Cell>
            <Table.Cell>
                {run.distance}
            </Table.Cell>
            <Table.Cell>
                {run.created}
            </Table.Cell>
        </Table.Row>
    }
    render() {
        const run = {
            friendly_name: "teste",
            duration: 100,
            distance: 100,
            created: "2020-01-01"
        }
        return (
            <div>
                <Button onclick={() => this.props.create(run)} />
                <h1>Corridas</h1>

                <Table celled>
                    <Table.Header>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Duração</Table.HeaderCell>
                        <Table.HeaderCell>Distância</Table.HeaderCell>
                        <Table.HeaderCell>Data</Table.HeaderCell>
                    </Table.Header>
                    <Table.Body>
                        {this.props.runs.data.map(this.renderRun)}
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        runs: state.runs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        load: () => dispatch(ActionCreators.getRunsRequest()),
        create: () => dispatch(ActionCreators.createRunRequest(run))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Runs)