import React from 'react';
import {render} from '@testing-library/react';
import ManageResources from '../components/ManageResources';
import ManageAccess from '../components/ManageAccess';
import {people, doors} from '../mocks';
import '@testing-library/jest-dom/extend-expect'

jest.mock('../api/ResourcesApi');
import ResourcesApi from '../api/ResourcesApi';

test('Test Manage Resources', async () => {
    const fetchUsersMock = jest.fn(() => Promise.resolve({people}));
    const fetchDoorsMock = jest.fn(() => Promise.resolve({doors})); 
    const renderApp = () => (
        <ManageResources
            fetchUsers={fetchUsersMock}
            fetchDoors={fetchDoorsMock}
            users={people}
            doors={doors}
        />
    );

    ResourcesApi.mockImplementation(() => {
        return {
            fetchUsers: fetchUsersMock,
            fetchDoors: fetchDoorsMock
        }
    });

    const {getByText} = render(renderApp());
    const resourcesApi = new ResourcesApi();
    expect(fetchUsersMock).toHaveBeenCalledTimes(1);
    expect(fetchDoorsMock).toHaveBeenCalledTimes(1);
    expect(resourcesApi.fetchUsers).toHaveBeenCalledTimes(1);
    expect(resourcesApi.fetchDoors).toHaveBeenCalledTimes(1);
    people.forEach(user => expect(getByText(user.name)).toBeInTheDocument());
    doors.forEach(door => expect(getByText(door.name)).toBeInTheDocument());      
})

test('Test Manage Access', async () => {
    const fetchUsersMock = jest.fn(() => Promise.resolve({people}));
    const fetchDoorsMock = jest.fn(() => Promise.resolve({doors}));     
    const renderApp = () => (
        <ManageAccess
            fetchUsers={fetchUsersMock}
            fetchDoors={fetchDoorsMock}
            users={people}
            doors={doors}
        />
    );   

    ResourcesApi.mockImplementation(() => {
        return {
            fetchUsers: fetchUsersMock
        }
    });
    const {getByText} = render(renderApp());  
    const resourcesApi = new ResourcesApi();

    expect(fetchUsersMock).toHaveBeenCalledTimes(1);
    expect(resourcesApi.fetchUsers).toHaveBeenCalledTimes(1);
    people.forEach(user => expect(getByText(user.name)).toBeInTheDocument());      
})