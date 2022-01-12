import {useState, useEffect} from 'react';
import AddOrganization from '../AddOrganization';
import OrganizationTable from '../OrganizationTable';
import {Button, Form, Container} from 'react-bootstrap'

const Organizations = () => {     
    const [showAddOrg, setShowAddOrg] = useState(false);

    const handleClose = () => setShowAddOrg(false);
    const handleShow = () => setShowAddOrg(true);


    // Sets the default data state and then calls setData when we change it
    const [data, setData] = useState([]);

    // Sets the default query state and changes it when we type in the search box
    const[query, setQuery] = useState('');

    // Sets what is searched for by default, id and name 
    // Is then changed when the checkboxes change
    const [searchColumns, setSearchColumns] = useState(['id', 'name']);


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
        try{
            const res = await fetch('/organization',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(org)
            });
            
            const newData = await res.json();

            setData([...data, newData.organization]);
        } catch(error){
            alert('Could not create new organization');
        }
    }

    const deleteOrganization = async (id) => {
        try{
            await fetch('/organization/' + id,
            {
                method: 'DELETE'
            });

            setData(data.filter((org) => org.id !== id));
        } catch(error){
            alert('Could not delete organization');
        }
    }


    // Filter the data based on if the columns match the input from the text box (query)
    const search = (rows) =>{
        console.log(data);
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
                        variant ='success'
                        onClick={handleShow}
                >
                    Add organization
                </Button>
           </div>
           
            <div>
               <AddOrganization onAdd={addOrganization} visible={showAddOrg} onClose={handleClose}/>
            </div>
           <div>
               <Form.Control
                    className='mb-3'
                    type="text"
                    placeholder='Search...'
                    value={query} onChange={(e) => setQuery(e.target.value)}/>
                    
           </div>
           <div>
               <OrganizationTable data={search(data)} remove={deleteOrganization}/>
           </div>
            
       </Container>

    )
}

export default Organizations
