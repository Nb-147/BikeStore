import { useParams } from 'react-router-dom';
import { ItemListContainer } from '../ItemListContainer/ItemListContainer';

export const HomeWrapper = () => {
    const { cid } = useParams();
    return <ItemListContainer key={cid} greeting="Bienvenidos a Bikestore" />;
};