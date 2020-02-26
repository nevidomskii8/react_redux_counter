import React from 'react'
import { connect } from 'react-redux'
import './AppRedux.css'
import Counter from './Counter/Counter'
import { add, sub, addNumber } from './redux/actions/actions'

class AppRedux extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div className={'AppRedux'}>
                <h1>{this.props.title}</h1>
                <h2>Cuonter <strong>{this.props.counter} </strong> </h2>

                <hr />

                <div className={'Actions'}>
                    <button onClick={this.props.onAdd}>Add 1</button>
                    <button onClick={this.props.onSUB}>subtract 1</button>
                </div>

                <div className={'Actions'}>
                    <button onClick={() => this.props.onAddNumber(15)}>Add </button>
                    <button onClick={() => this.props.onAddNumber(-15)}>subtract</button>
                </div>

                <Counter />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter1.counter
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch(add()),
        onSUB: () => dispatch(sub()),
        onAddNumber: number => dispatch(addNumber(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRedux)