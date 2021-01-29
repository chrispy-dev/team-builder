import React from 'react';

const Form = ({ formValues, handleInputChange, onFormSubmit }) => {
    return (
        <form className="flex flex-col w-64" onSubmit={onFormSubmit}>
            <input 
                className="mb-3 py-2 px-4 border-2 border-purple-900 rounded-full focus:outline-none font-semibold text-purple-900 placeholder-purple-400"  
                onChange={handleInputChange}
                value={formValues.name} 
                placeholder="Name"
                type="text"
                name="name" />
            <input 
                className="mb-3 py-2 px-4 border-2 border-purple-900 rounded-full focus:outline-none font-semibold text-purple-900 placeholder-purple-400" 
                onChange={handleInputChange}
                value={formValues.age} 
                placeholder="Age"
                type="text" 
                name="age" />
            <input 
                className="mb-3 py-2 px-4 border-2 border-purple-900 rounded-full focus:outline-none font-semibold text-purple-900 placeholder-purple-400" 
                onChange={handleInputChange}
                value={formValues.favGame}
                placeholder="Favorite Game"
                type="text" 
                name="favGame" />
            <input 
                className="bg-purple-900 text-white p-4 rounded-full font-bold cursor-pointer focus:outline-none"
                type="submit"
                value="Create Person" />
        </form>
    );
};

export default Form;