import React from 'react';

export default function Timer(props) {
    const [timer, setTimer] = React.useState('00:00')
    React.useEffect(() => {
        console.log('called after component is added to dom and each time "timer" value changed')
        const changeTime = () => {
            let sec = Number(timer.split(':')[1]);
            let min = Number(timer.split(':')[0]);
            sec += 1

            if(sec === 60) {
                sec = 0;
                min += 1
            }
            setTimer(`${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`)
        }
        setTimeout( changeTime, 1000 )
        return () => {
            console.log('called before component removed from dom and each time after "timer" changed, before privious function')
        }
    }, [timer]);

    return (
        <div className='timer'>
            {timer}
        </div>
    )
}