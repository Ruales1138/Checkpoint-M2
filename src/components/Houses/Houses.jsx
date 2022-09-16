import React, { Component } from 'react';
import { connect } from 'react-redux';
import mainImg from '../../img-cp2/main-image-cp2.jpg';
import { getAllHouses } from '../../redux/actions';
import HouseCard from '../HouseCard/HouseCard';

// CUIDADOOOO. SI O SI CLASS COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR EL METODO CONNECT DE REDUX, JUNTO A MAP_STATE_TO_PROPS 
// Y MAP_DISPATCH_TO_PROPS!! <3
export class Houses extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getAllHouses()
    }
    
    render() {
        return (
            <div>
              <h1>Game of Thrones</h1>
              <img src={mainImg} alt='main-img'/>
              <h3>Houses</h3>
              {this.props.houses?.map((h) => {
                return (
                    <HouseCard
                id={h.id} 
                region={h.region} 
                name={h.name} 
                words={h.words}
                characters={h.characters}
                key={h.id}
              />
                )
              })}
            </div>
        );
    };
};

export const mapStateToProps = (state) => {
    return {
        houses: state.houses
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        getAllHouses: () => dispatch(getAllHouses())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Houses);

