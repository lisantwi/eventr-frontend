import React from 'react'
import Activities from './Activities'
import Photos from './Photos'


class EventCard extends React.Component{

    render(){
        return(
            <div> Event Card
                <p>{this.props.act.name}</p>
            </div>
        
        )
    }
}

export default EventCard