import React, {useEffect, useState} from 'react';
import {useAlerts} from "./AlertContext";

const OrganizationContext = React.createContext(null);

const useOrganization = () => React.useContext(OrganizationContext);

const deepClone = (object) => JSON.parse(JSON.stringify(object));

const OrganizationDetailContext = ({orgId, children}) => {

    const { triggerAlert } = useAlerts();

    const [organization, setOrganization] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/organization/' + orgId);
                if (!response.ok) {
                    let responseText = await response.text();
                    throw responseText;
                }
                const fetchedOrg = await response.json();
                setOrganization(fetchedOrg);
            } catch (error) {
                triggerAlert("Failed to fetch organization data", error);
            }
        }
        fetchData();
    }, []);

    const syncWithDb = async (newOrganization) => {
        const postResponse = await fetch('/api/organization/' + orgId, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrganization)
        });
        if (!postResponse.ok) {
            let responseText = await postResponse.text();
            throw responseText;
        }
        return await postResponse.json();
    }

    const updateOrganizationItem = async (dataKey, editItem) => {
        try {
            let newOrganization = deepClone(organization);
            if (!editItem.id) {
                newOrganization[dataKey].push(editItem);
            } else {
                for (let i = 0;i < newOrganization[dataKey].length;i++) {
                    if (newOrganization[dataKey][i].id === editItem.id) {
                        newOrganization[dataKey][i] = editItem;
                    }
                }
            }
            const syncedOrganization = await syncWithDb(newOrganization);
            setOrganization(syncedOrganization);
        } catch (error) {
            triggerAlert("Database update failed", error);
        }
    }

    const removeOrganizationItem = async (dataKey, deleteItem) => {
        try {
            let newOrganization = deepClone(organization);
            newOrganization[dataKey] = newOrganization[dataKey].filter(it => it.id !== deleteItem.id);
            const syncedOrganization = await syncWithDb(newOrganization);
            setOrganization(syncedOrganization);
        } catch (error) {
            triggerAlert("Database delete failed", error);
        }
    }

    if (organization !== null) {
        return (
            <OrganizationContext.Provider value={{
                organization,
                updateOrganizationItem,
                removeOrganizationItem
            }}>
                { children }
            </OrganizationContext.Provider>
        );
    } else {
        return null;
    }
}

export { OrganizationDetailContext, useOrganization };