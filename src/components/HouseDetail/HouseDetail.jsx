import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHouse } from '../../redux/actions';
import CharacterCard from '../CharacterCard/CharacterCard';

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
const HouseDetail = (props) => {

  const dispatch = useDispatch();
  const houseId = props.match.params.houseId;
  const house = useSelector((state) => state.house);

  React.useEffect(() => {
    dispatch(getHouse(houseId))
  }, [dispatch, houseId])
    
    return (
        <div>
          <p>{house.name}</p>
          <p>{house.words}</p>
          {house.characters.map((pj) => 
          <CharacterCard
            key={pj.id}
            id={pj.id}
            fullName={pj.fullName}
            title={pj.title}
            family={pj.family}
            imageUrl={pj.imageUrl}
            houseId={pj.houseId}
          />)}
        </div>
    );
};

export default HouseDetail;
