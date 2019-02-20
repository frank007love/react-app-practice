import React, { Component } from "react"

class CounterComp extends Component {
    constructor(prop){
        super(prop);
        this.state = { count: 0 };
    }

    render(){
        const { count } = this.state;
        return (
            <>
                <div>This is a example: {count}.</div>
                <button onClick={() => { this.setState({ count: count + 1 }); }}>count+1</button>
            </>    
        );
    }
}

export default CounterComp