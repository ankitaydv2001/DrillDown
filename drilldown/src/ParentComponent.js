import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    return(
        <div>
            <h1>Parent Component</h1>
            <ChildComponent name ="Ankita" age={30} gender="Female" contact={9658546845} />
        </div>
    );
};

//const [dynamicProp, setDynamicProp] = useState({name: Ankita, age:30}); 

//const handleUpdateName = (newName) => {setUser(prevUser => ({prevUser, name: newName}));};

export default ParentComponent;

