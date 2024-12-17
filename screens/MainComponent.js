import { useState } from 'react';
import { INSPIRATIONS } from '../shared/inspirations';
import DirectoryScreen from './DirectoryScreen';

const Main = () => {
    const [inspirations, setInspirations] = useState(INSPIRATIONS);

    return <DirectoryScreen inspirations={inspirations} />;
};

export default Main;