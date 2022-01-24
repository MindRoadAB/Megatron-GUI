import {useState, useEffect} from 'react';
import OrganizationTable from '../OrganizationTable';
import EditModal from '../EditModal'
import {Button, Form, Container} from 'react-bootstrap';
import { CSVLink } from 'react-csv';

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
    const [searchColumns] = useState(['id', 'name']);

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
        const res = await fetch('/api/organization');
        const data = await res.json();
        return data;
    }


    // API call to add an org, maybe should be in different file?
    const addOrganization = async (org) => {
        try{
            const res = await fetch('/api/organization',
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

    const updateOrganization = async (org, id) => {
        let copyOrg;
        try {
            
            const response = await fetch('/api/organization/' + id);
            const fetchedOrg = await response.json();
            copyOrg = fetchedOrg;
            copyOrg['organization'] = org;

        } catch (error) {
            alert('Failed to fetch organization data');
        }

        try{
            const res = await fetch('/api/organization/' + id,
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(copyOrg)
            });
            const newData = await res.json();

            setData(([...data.filter((item) => item.id !== id), newData.organization])
                .sort((a,b) => a.id - b.id));

        }catch (error) {
            alert('Failed to update organization');
        }
    }

    const deleteOrganization = async (id) => {
        try{
            await fetch('/api/organization/' + id,
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
        return rows.filter(
            (row) => 
                searchColumns.some((column) => row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1)
            );
    }

    return (
       <Container className='mt-5'>
           <h1>Organizations</h1>
           <div>
                <Button className='mb-3 m-1'
                        variant ='success'
                        onClick={handleShow}
                >
                    Add organization
                 </Button>
           </div>
           
            <div>
               <EditModal visible={showAddOrg} 
                    onEditSubmit={addOrganization} 
                    onClose={handleClose}
                    edit={false}
                />
            </div>
           <div>
               <Form.Control
                    className='mb-3'
                    type="text"
                    placeholder='Search...'
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)}
                />
                    
           </div>
           <div>
               <OrganizationTable data={search(data)} 
                    remove={deleteOrganization} 
                    edit={updateOrganization}/>
           </div>
            <div>
                <CSVLink data={search(data)}
                    filename={'organizations.csv'}
                    className='btn btn-secondary mt-2'
                    target='_blank'
                >
                    Export table
                </CSVLink>
            </div>
       </Container>
    )
}

export default Organizations
