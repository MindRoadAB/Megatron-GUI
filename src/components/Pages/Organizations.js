import {useState, useEffect} from 'react';
import AddOrganization from '../AddOrganization';
import OrganizationList from '../OrganizationList';
import {Button, Form, Container} from 'react-bootstrap'

const Organizations = () => {     

    // Sets the default data state and then calls setData when we change it
    const [data, setData] = useState([]);

    // Sets the default query state and changes it when we type in the search box
    const[query, setQuery] = useState('');

    // Sets what is searched for by default, id and name 
    // Is then changed when the checkboxes change
    const [searchColumns, setSearchColumns] = useState(['id', 'name']);

    const[showAddOrg, setShowAddOrg] = useState(false);

    // Gets the data when page is loaded and sets the data state
    useEffect(() => {
        const getOrganizations = async () =>{
            const organizations = await fetchOrganizations();
            setData(organizations);
        };
        getOrganizations();
    
    }, []);
    
    // API call to fetch the orgs, maybe should be in different file?
    const fetchOrganizations = async () =>{
        const res = await fetch('/organization');
        const data = await res.json();
        return data;
    }

    // API call to add an org, maybe should be in different file?
    const addOrganization = async (org) => {

        const res = await fetch('/organization',
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


    // Filter the data based on if the columns match the input from the text box (query)
    const search = (rows) =>{
        return rows.filter(
            (row) => 
                searchColumns.some((column) => row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1)
            );
    }


    return (
       <Container className='mt-5'>
           <h1>Organizations</h1>
           <div>
                <Button className='mb-3'
                        variant={showAddOrg ? 'danger' : 'success'}
                        onClick={() => setShowAddOrg(!showAddOrg)}>
                            {showAddOrg ? 'Close' : 'Add org'} 
                </Button>
           </div>
           
            <div>
               {showAddOrg && <AddOrganization onAdd={addOrganization}/>}
            </div>
           <div>
               <Form.Control
                    className='mb-3'
                    type="text"
                    placeholder='Search...'
                    value={query} onChange={(e) => setQuery(e.target.value)}/>
                    
           </div>
           <div>
               <OrganizationList data={search(data)}/>
           </div>
            
       </Container>

    )
}

export default Organizations
