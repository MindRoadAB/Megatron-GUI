import React, {useEffect, useState} from 'react';

const DataContext = React.createContext(null);

const useTables = () => React.useContext(DataContext);

const TablesContext = ({children}) => {
    const [tables, setTables] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let data = [];
            try {
                const asnRes = await fetch('/api/table/asn');
                const fetchedAsn = await asnRes.json();
                data['asn'] = fetchedAsn;
            } catch (error) {
                alert("Failed to fetch ASN data");
            }

            try {
                const domainsRes = await fetch('/api/table/domain_names');
                const fetchedDomains = await domainsRes.json();
                data['domain_names'] = fetchedDomains;
            } catch (error) {
                alert("Failed to fetch Domain names data");
            }

            try {
                const ipRes = await fetch('/api/table/ip_range');
                const fetchedIps = await ipRes.json();
                data['ip_range'] = fetchedIps;
                
            } catch (error) {
                alert("Failed to fetch IP ranges data");
            }
            setTables(data);

        }
        fetchData();
    }, []);

    if (tables !== null) {
        return (
            <DataContext.Provider value={{tables}}>
                {children}
            </DataContext.Provider>
        );
    } else {
        return null;
    }
    
}

export { TablesContext, useTables };