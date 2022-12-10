
import React, { useEffect, useState } from 'react';
import './table.css'
const Table = () => {
    const [datas, setDatas] = useState([])
    const state = {
        color: []    
      }
   const changeColor = (selectedRow) => e => {
        if (selectedRow){
         this.setState({color: 'blue'})
        }
      }
//   data fatch
    useEffect(() => {
        fetch('MOCK_DATA (1).json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])

    const unSort = (datas) => {
        setDatas(datas)

    }
//    sort ascending order
    const sortAscData = (datas) => {
        const strAscending = [...datas].sort((a, b) =>
            a.first_name > b.first_name ? 1 : -1,
        );
        setDatas(strAscending)

    }
    // sort desending order
      const sortDesData = (datas) => {
        const strDescending = [...datas].sort((a, b) =>
            a.first_name > b.first_name ? -1 : 1,
        );
      setDatas(strDescending)
    }
    return (
        <div className='mx-auto'>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>

                            <th className='flex items-center lg:flex-row flex-col'>
                                <span>First name</span>
                                <div className="navbar">
                                    <div className="navbar-start">
                                        <div className="dropdown">
                                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                                            </label>
                                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                                <li><a onClick={() => unSort(datas)}>Unsort</a></li>
                                                <li><a onClick={() => sortAscData(datas)}>Sort By ASC</a></li>
                                                <li><a onClick={() => sortDesData(datas)}>Sort By DESC</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <th>Last name</th>
                            <th>Status</th>
                            <th>Gender</th>

                        </tr>
                    </thead>
                    <tbody  className="tableHover">
                        {
                            datas.map((data, i) => <tr key={data.id} 
                                onClick={()=>changeColor(i)}>
                                <td>{data.first_name}</td>
                                <td>{data.last_name}</td>
                                <td >{data.status === true && <p className='text-green-600'>true</p>
                                }
                                    {
                                        data.status === false && <p className='text-red-600'>false</p>
                                    }
                                </td>
                                <td>{data.gender}</td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Table;