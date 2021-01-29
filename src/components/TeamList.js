import React from 'react';

import Member from './Member';

const TeamList = ({ team }) => {
    return (
        <div className="flex mt-10 flex-wrap justify-around w-full">
            {
                team.map(member => {
                    return <Member key={member.name} member={member} />
                })
            }
        </div>
    );
};

export default TeamList;