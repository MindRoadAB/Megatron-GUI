import Modal from 'react-modal'
import Button from './Button'
import { useState } from "react"

const EditModal = ({onCloseClick, organization, onEditSubmit}) => {
    // Styling
    const modalStyle = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

    // Date
    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

    // States
    const [name, setName] = useState(organization.name);
    const [id] = useState(organization.id);
    const [prio, setPrio] = useState(organization.prio);
    const [ASN, setAsn] = useState(organization.ASN);
    const [domains, setDomains] = useState(organization.domains);
    const [IPRanges, setIpRanges] = useState(organization.IPRanges);
    const [regNo, setRegistrationNumber] = useState(organization.regNo);
    const [countryCode, setCountryCode] = useState(organization.countryCode);
    const [languageCode, setLanguageCode] = useState(organization.languageCode);
    const [description, setDescirtpion] = useState(organization.description);
    const [status, setStatus] = useState(organization.status);
    const [lastModified] = useState(date);
    const [comments] = useState(organization.comments);

    // Submit method
    const onSubmit = (e) =>{
        e.preventDefault();

        if(!name){
            alert('Please add a name to the org');
            return;
        }

        onEditSubmit({id, name, regNo, IPRanges, domains, ASN, 
                    prio, countryCode, languageCode, status, 
                    description, lastModified, comments});
        onCloseClick();
    }

    // Modal form
    return (
        <Modal isOpen={true} 
            ariaHideApp={false} 
            style={modalStyle}> 
        <h1>{name}</h1>
        <form onSubmit={onSubmit}>
        <div>
            <label>Organization name: </label>
            <input 
                type='text'  
                placeholder='Organization name' 
                value={name}
                onChange={(e) => setName(e.target.value) }
            />
        </div>
        <div>
            <label>AS Number: </label>
            <input 
                type='text'  
                placeholder='AS Number' 
                value={ASN} 
                onChange={(e) => setAsn(e.target.value) }
            />
        </div>
        <div>
            <label>Prio: </label>
            <select onChange={(e) => setPrio(e.target.value)}>
                <option value="Organization Category 1 [95]">Organization Category 1 [95]</option>
                <option value="Organization Category 2 [90]">Organization Category 2 [90]</option>
                <option value="Organization Category 3 [80]">Organization Category 3 [80]</option>
                <option value="Organization Category 4 [70]">Organization Category 4 [70]</option>
                <option value="Organization Category 5 [65]">Organization Category 5 [65]</option>
                <option value="Organization Category 6 [60]">Organization Category 6 [60]</option>
                <option value="Organization Category 7 [50]">Organization Category 7 [50]</option>
                <option value="Organization Category 8 [45]">Organization Category 8 [45]</option>
                <option value="Organization Category 9 [40]">Organization Category 9 [40]</option>
                <option value="Organization Category 10 [30]">Organization Category 10 [30]</option>
                <option value="Organization Category 11 [20]">Organization Category 11 [20]</option>
                <option value="ISP [10]">ISP [10]</option>
                <option value="Parked with no prio [0]">No prio [0]</option>
            </select>
        </div>
        <div>
            <label>Domains: </label>
            <input 
                type='text'  
                placeholder='Domains' 
                value={domains} 
                onChange={(e) => setDomains(e.target.value) }
            />
        </div>
        <div>
            <label>IP ranges: </label>
            <input 
                type='text'  
                placeholder='IP ranges' 
                value={IPRanges} 
                onChange={(e) => setIpRanges(e.target.value) }
            />
        </div>
        <div>
            <label>Registartion number: </label>
            <input 
                type='text'  
                placeholder='Registration number'
                value={regNo} 
                onChange={(e) => setRegistrationNumber(e.target.value) }
            />
        </div>
        <div>
            <label>Country code: </label>
            <input 
                type='text'
                placeholder='Country Code'
                value={countryCode} 
                onChange={(e) => setCountryCode(e.target.value) }
                />
        </div>
        <div>
            <label>Language code: </label>
            <input 
                type='text'
                placeholder='Language Code'
                value={languageCode} 
                onChange={(e) => setLanguageCode(e.target.value) }
                />
        </div>
        <div>
            <label>Description: </label>
            <textarea 
                type='text'  
                placeholder='Description...'
                value={description} 
                onChange={(e) => setDescirtpion(e.target.value) }
                />
        </div>
        <div>
            <label>Enabled</label>
            <input 
                type='checkbox' 
                checked={status}
                value={status}
                onChange={(e) => setStatus(e.currentTarget.checked) }
            />
        </div>
        
        <input type='submit' style={{'backgroundColor':'green'}} value='Save' />
        <Button text={'Cancel'} color={'red'} onClick={onCloseClick}/>
    </form>
        </Modal>
    )
}

export default EditModal