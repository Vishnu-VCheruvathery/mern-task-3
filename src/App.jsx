import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Person from './components/Person'
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader";


function App() {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const recordsPerPage = 10;

  const totalPages = Math.ceil(users.length / recordsPerPage);

  const startRecord = (currentPage - 1) * recordsPerPage;
  const endRecord = startRecord + recordsPerPage;
  const records = users.slice(startRecord, endRecord);

  const pages = [...Array(totalPages).keys()].map((n) => n + 1);

  const getUsers = async () => {
    try {
      const response = await axios.get(`https://602e7c2c4410730017c50b9d.mockapi.io/users`);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {

    const fetchData = async () => {
      await getUsers();
    };
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
   }, [])

  const nextPage = (event) => {
    event.preventDefault();
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const prevPage = (event) => {
    event.preventDefault();
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const changeCurrentPage = (pageNumber, event) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };

  const setSelectUser = (user) => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    // Set the selected user
    setSelectedUser(user);
  };

  return (
    <>

     {
      loading ? 
        <div style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          height: '550px'
        }}>
        <ClipLoader color='gray' loading={loading} size={150} />
        </div>
        : 
        
          <>
          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', gap: '10px' }}>
   <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '100%' }}>
          {records.map((user) => (
            <Card key={user.id} onClick={setSelectUser} user={user} selectedUser={selectedUser} />
          ))}
        </div>
        {selectedUser && <Person user={selectedUser} />}
      </div>
      <nav>
  <ul
    style={{
      display: 'flex',
      width: '50%',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '10px auto',
    }}
  >
    <li
      style={{
        listStyleType: 'none',
        display: 'inline-block',
        border: '1px solid gray',
        padding: '10px',
        textDecoration: 'none',
      }}
    >
      <a
        style={{
          textDecoration: 'none',
          color: 'black',
        }}
        href='#'
        onClick={(event) => prevPage(event)}
      >
        Prev
      </a>
    </li>
    {pages.map((pageNumber) => (
      <li
        key={pageNumber}
        style={{
          listStyleType: 'none',
          display: 'inline-block',
          border: '1px solid gray',
          padding: '10px',
          background: currentPage === pageNumber ? '#007BFF' : 'white',
        }}
      >
        <a
          style={{
            textDecoration: 'none',
            color: currentPage === pageNumber ? 'white' : 'black',
          }}
          href='#'
          onClick={(event) => changeCurrentPage(pageNumber, event)}
        >
          {pageNumber}
        </a>
      </li>
    ))}
    <li
      style={{
        listStyleType: 'none',
        display: 'inline-block',
        border: '1px solid gray',
        padding: '10px',
        textDecoration: 'none',
      }}
    >
      <a
        style={{
          textDecoration: 'none',
          color: 'black',
        }}
        href='#'
        onClick={(event) => nextPage(event)}
      >
              Next
            </a>
          </li>
        </ul>
      </nav>
      </>
        

        
      
     }

   
    </>
  );
}

export default App
