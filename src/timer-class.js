import React from 'react';

let interval = null
export default class Timer extends React.Component {
    state = {
        timer: '00:00'
    }

    componentDidMount() {
        console.log('componentDidMount hook calls after component added to dom');
        const changeTime = () => {
            let sec = Number(this.state.timer.split(':')[1]);
            let min = Number(this.state.timer.split(':')[0]);
            sec += 1

            if(sec === 60) {
                sec = 0;
                min += 1
            }
            this.setState({timer: `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`})
        }
        interval = setInterval(changeTime, 1000)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount hook calls before remove component from dom');
        clearInterval(interval)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate hook calls each time setState is called')
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, 'Component will not render if there will be an error')
    }

    render() {
        let {timer} = this.state
        return (
            <div className='timer'>
                {timer}
            </div>
        )
    }
}