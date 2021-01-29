import React from 'react';

const Member = ({ member }) => {
    return (
        <div className="p-5 mx-3 mb-10 border-4 border-purple-900 rounded-xl bg-purple-100 w-5/12">
            <div>
                <label className="font-bold text-purple-900">Name: </label> 
                <span className="text-purple-900">{ member.name }</span>
            </div>
            <div>
                <label className="font-bold text-purple-900">Age: </label> 
                <span className="text-purple-900">{ member.age }</span>
            </div>
            <div>
                <label className="font-bold text-purple-900">Favorite Game: </label>
                <span className="text-purple-900">{ member.favGame }</span>
            </div>
        </div>
    );
};

export default Member;