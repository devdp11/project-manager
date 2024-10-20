import React, { useState, useEffect } from 'react';
import { FaFilter, FaPlus } from "react-icons/fa";
import CardIndex from '../../../components/templates/card/generic';
import { UseAppContext } from '../../../utils/hooks/UseAppContext';

function HomeLayout() {
    const { GET, isAuthenticated } = UseAppContext();
    const [workspaces, setWorkspaces] = useState([]);
    const [sharedWorkspaces, setSharedWorkspaces] = useState([]);

    useEffect(() => {
        const fetchWorkspaces = async () => {
            try {
                const response = await GET('workspace');

                if (response.statusCode === 200) {
                    setWorkspaces(response.data.workspaces);
                    setSharedWorkspaces(response.data.sharedWorkspaces);
                } else {
                    throw new Error('Failed to fetch workspaces');
                }
            } catch (error) {
                console.error(error);
            }
        };

        if (isAuthenticated) {
            fetchWorkspaces();
        }
    }, [isAuthenticated, GET]);

    return (
        <>
            <div className='flex justify-between items-center flex-col sm:flex-row'>
                <div className='mb-5 sm:mb-0'>
                    <h1 className='text-xl font-bold'>Your Workspaces</h1>
                </div>
                <div className='grid grid-cols-2 gap-2'>
                    <button className="items-center px-2 bg-green-600 hover:bg-green-700 duration-200 text-white border border-green-600 text-sm md:text-base font-semibold h-10 flex items-center rounded-md" type="submit">
                        <FaFilter className='mr-1' />
                        Filter
                    </button>
                    <button className="px-2 bg-blue-600 hover:bg-blue-700 duration-200 text-white border border-blue-600 text-sm md:text-base font-semibold h-10 flex items-center rounded-md" type="submit">
                        <FaPlus className='mr-1' />
                        Create
                    </button>
                </div>
            </div>

            <hr className="my-5" />

            <CardIndex contents={workspaces} />

            {sharedWorkspaces.length > 0 && (
                <>
                    <div className='flex mt-20 items-center'>
                        <div>
                            <h1 className='text-xl font-bold'>Shared Workspaces</h1>
                        </div>
                    </div>

                    <hr className="my-5" />

                    <CardIndex contents={sharedWorkspaces} />
                </>
            )}
        </>
    );
}

export default HomeLayout;