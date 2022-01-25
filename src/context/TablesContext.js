import React, {useEffect, useState} from 'react';

const DataContext = React.createContext(null);

const useTables = () => React.useContext(DataContext);

const TablesContext = ({children}) => {
    const [tables, setTables] = useState(null);

    useEffect(() => {
        const getData = async () => {
            let data = [];
            
            data['asn'] = await fetchData('asn');
            data['domain_name'] = await fetchData('domain_name');
            data['ip_range'] = await fetchData('ip_range');
            data['contact'] = await fetchData('contact');

            setTables(data);
        }

        getData();
    }, []);

    const fetchData = async (table) => {
        try {
            const res = await fetch('/api/table/' + table);
            const data = await res.json();
            return data;
        } catch (error) {
            alert('Failed to fetch ' + table + ' data');
        }
    }

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