import {useState, useEffect} from 'react';
import Datatable from '../Datatable/Datatable';
import AddOrganization from '../AddOrganization';
import EditModal from '../EditModal';
import {Button, Form} from 'react-bootstrap'

const Organizations = () => {     

    // Sets the default data state and then calls setData when we change it
    const [data, setData] = useState([]);

    const [contacts, setContacts] = useState([]);

    // Sets the default query state and changes it when we type in the search box
    const[query, setQuery] = useState('');

    // Sets what is searched for by default, id and name 
    // Is then changed when the checkboxes change
    const [searchColumns, setSearchColumns] = useState(['id', 'name']);

    const[showAddOrg, setShowAddOrg] = useState(false);

    const[showEditOrg, setShowEditOrg] = useState(false);

    const[editOrg, setEditOrg] = useState('');

    // Gets the data when page is loaded and sets the data state
    useEffect(() => {
        const getOrganizations = async () =>{
            const organizations = await fetchOrganizations();
            setData(organizations);
        };
        getOrganizations();

        const getContacts = async () =>{
          const contacts = await fetchContacts();
          setContacts(contacts);
        };
        getContacts();
    
    }, []);
    
    // API call to fetch the orgs, maybe should be in different file?
    const fetchOrganizations = async () =>{
        const res = await fetch('http://localhost:5000/organizations/');
        const data = await res.json();
        return data;
    }

     // API call to fetch the orgs, maybe should be in different file?
     const fetchContacts = async () =>{
        const res = await fetch('http://localhost:5000/contacts/');
        const data = await res.json();
        return data;
    }

    // API call to delete an org, maybe should be in different file?
    const deleteOrganization = async (id) => {
        await fetch('http://localhost:5000/organizations/' + id,
        {
            method: 'DELETE'
        });

        setData(data.filter((org) => org.id !== id));
    }

    // API call to delete an contact, maybe should be in different file?
    const deleteContact = async (id) => {
        await fetch('http://localhost:5000/contacts/' + id,
        {
            method: 'DELETE'
        });

        setContacts(contacts.filter((contact) => contact.id !== id));
    }

    // API call to add an org, maybe should be in different file?
    const addOrganization = async (org) => {


        const res = await fetch('http://localhost:5000/organizations/',
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(org)
        });
        
        const newData = await res.json();

        setData([...data, newData]);
    }

    const editOrganization = async (org) => {

        const oldData = data.filter((d) => d.id !== org.id);

        const res = await fetch('http://localhost:5000/organizations/' + org.id,
        {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(org)
        });

        const newData = await res.json();
        
        oldData.push(newData);

        oldData.sort((a,b) => (a.id > b.id) ? 1 : -1);

        setData([...oldData]);
    }

    const fetchOrganization = async (id) =>{
        const res = await fetch('http://localhost:5000/organizations/' + id);
        const data = await res.json();
        return data;
    }

    // Filter the data based on if the columns match the input from the text box (query)
    const search = (rows) =>{
        return rows.filter(
            (row) => 
                searchColumns.some((column) => row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1)
            );
    }

    const editOrgClick = async(id) =>{
        const organization = await fetchOrganization(id);
        setEditOrg(organization);
        setShowEditOrg(true);
    }

    const camelToSentence = (s) =>{

        //Special cases
        if(s === 'ASN')
            return 'ASN';
        else if(s === 'IPRanges')
            return 'IP Ranges';

        let res = s.replace(/([A-Z])/g, ' $1');
        res = res.charAt(0).toUpperCase() + res.slice(1);
        return res;
    }

    
    const columns = data[0] && Object.keys(data[0]);

    return (
       <div className='app-container'>
           <h1>Organizations</h1>
           <div>
                <Button className='m-1'
                        variant={showAddOrg ? 'danger' : 'success'}
                        onClick={() => setShowAddOrg(!showAddOrg)}>
                            {showAddOrg ? 'Close' : 'Add org'} 
                </Button>
           </div>
           
            <div>
               {showAddOrg && <AddOrganization onAdd={addOrganization}/>}
            </div>
           <div>
               {
                   columns && columns.map(column => 
                       <Form.Check className='m-1' 
                            checked={searchColumns.includes(column)}
                            onChange={(e) => {
                                const checked = searchColumns.includes(column);
                                setSearchColumns(prev => checked 
                                 ? prev.filter(sc => sc !== column)
                                 : [...prev, column])}}
                            label={camelToSentence(column)}
                            inline
                       />
                   )
               }
               <Form.Control
                    type="text"
                    placeholder='Filter table...'
                    className='filter-input'
                    value={query} onChange={(e) => setQuery(e.target.value)}/>
                    
           </div>
           <div>
                {showEditOrg && 
                    <EditModal onCloseClick={() => setShowEditOrg(false)} 
                        organization={editOrg}
                        onEditSubmit={editOrganization}/>}
           </div>
           <div>
               {/* Organizations */} 
               <Datatable data={search(data)} 
                    onDelete={deleteOrganization}
                    onEdit={editOrgClick}/>
           </div>
            <div>
                <h1>Contacts</h1>
            </div>
            <div>
                {/* Contacts */} 
                <Datatable data={contacts} 
                    onDelete={deleteContact}
                    onEdit={editOrgClick}/>
            </div>
            
       </div>

    )
}

export default Organizations
