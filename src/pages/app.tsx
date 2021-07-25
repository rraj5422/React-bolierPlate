import { utility } from "../utils/dispatch_utility";
import { connect } from "react-redux";
import { Component } from "react";
import * as React from 'react';
import AddToCalendar from 'react-add-to-calendar';
interface IAppProps {
    router?: any;
    location: any;
    Dispatch: any;
    history: any;
    PageLocation: any;
}
const data = [{
    title: 'Sample Event',
    description: 'This is the sample event provided as an example only',
    location: 'Portland, OR',
    startTime: '2021-07-26T20:15:00-04:00',
    endTime: '2021-07-29T21:45:00-04:00'
}, {
    title: 'Sample Event 2',
    description: 'This is the sample event provided as an example only',
    location: 'Portland, OR',
    startTime: '2021-07-26T20:15:00-04:00',
    endTime: '2021-07-30T06:45:00-07:00'
}];

class App extends Component<IAppProps, any> {
    constructor(props) {
        super(props);
        this.state = {
            event: data
        }
    }
    render() {
        let { event } = this.state;
        return (
            <div className="app">
                {event.map((item, i) => {
                    var date = new Date(item.startTime).getDate()
                    var startTime = new Date(item.startTime).getTime();
                    var endTime = new Date(item.endTime).getTime();
                    return (
                        <div className="card_div" key={i}>
                            <div>
                                <p className="time">{date}. {startTime}-{endTime}</p>
                                <p className="title">{item.description}</p>
                            </div>
                            <AddToCalendar event={item} />
                        </div>
                    )
                })}
            </div>
        );
    }
}
function mapStoreToProps(store): Partial<IAppProps> {
    return {
        PageLocation: store.router.location,
    };
}
export default connect(mapStoreToProps, utility.mapDispatchToProps)(App);
