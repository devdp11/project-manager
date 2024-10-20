import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaFilter, FaPlus } from "react-icons/fa";

import CardIndex from '../../../components/templates/card/projects';
import { UseAppContext } from '../../../utils/hooks/UseAppContext';

function WorkspaceLayout() {

    const { GET, isAuthenticated } = UseAppContext();
    const { workspaceId } = useParams();

    const [projects, setProjects] = useState([]);
    const [sharedProjects, setSharedProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await GET(`workspace/${workspaceId}/project`);

                if (response.statusCode === 200) {
                    setProjects(response.ownerProjects);
                    setSharedProjects(response.sharedProjects);
                } else {
                    throw new Error('Failed to fetch projects');
                }
            } catch (error) {
                console.error(error);
            }
        };

        if (isAuthenticated) {
            if (workspaceId) {
                fetchProjects();
            }
        }
    }, [workspaceId, isAuthenticated, GET]);

    return (
        <>
            <div className='flex justify-between items-center flex-col sm:flex-row'>
                <div className='mb-5 sm:mb-0'>
                    <h1 className='text-xl font-bold'>Projects</h1>
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

            <CardIndex contents={projects} workspaceId={workspaceId} />

            {sharedProjects.length > 0 && (
                <>
                    <div className='flex mt-20 items-center'>
                        <div>
                            <h1 className='text-xl font-bold'>Shared Projects</h1>
                        </div>
                    </div>

                    <hr className="my-5" />

                    <CardIndex contents={sharedProjects} workspaceId={workspaceId} />
                </>
            )}
        </>
    );
}
  
export default WorkspaceLayout