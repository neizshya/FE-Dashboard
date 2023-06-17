/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Table, Pagination } from 'react-bootstrap';
import TagStatus from '../../elements/Tag/TagStatus';
import Income from '../../assets/icons/income.svg'
import Outcome from '../../assets/icons/outcome.svg'

// eslint-disable-next-line react/prop-types
const TableTransaction = ({ invoices }) => {
    const [sortConfig, setSortConfig] = useState({
        key: null,
        direction: 'ascending'
    });

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const sortTable = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const sortedInvoices = [...invoices].sort((a, b) => {
        if (sortConfig.key) {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
        }
        return 0;
    });

    // Calculate pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentInvoices = sortedInvoices.slice(indexOfFirstItem, indexOfLastItem);
    const showingFrom = indexOfFirstItem + 1;
    const showingTo = Math.min(indexOfLastItem, sortedInvoices.length);

    // Change page
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < Math.ceil(sortedInvoices.length / itemsPerPage)) {
        setCurrentPage(currentPage + 1);
        }
    };

    // Generate page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(sortedInvoices.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
        <Table hover className="rounded-3 bg-white">
            <thead>
                <tr>
                    <th onClick={() => sortTable('id')}>ID Invoice</th>
                    <th onClick={() => sortTable('date')}>Date</th>
                    <th onClick={() => sortTable('recipient')}>Recipient</th>
                    <th onClick={() => sortTable('amount')}>Amount</th>
                    <th onClick={() => sortTable('type')}>Type</th>
                    <th onClick={() => sortTable('location')}>Location</th>
                    <th onClick={() => sortTable('status')}>Status</th>
                </tr>
            </thead>
            <tbody>
                {currentInvoices.map((invoice) => (
                    <tr key={invoice.id}>
                        <td>{invoice.id}</td>
                        <td>{invoice.date}</td>
                        <td>{invoice.recipient}</td>
                        <td>{invoice.amount}</td>
                        {
                            invoice.type == 'Income' ? 
                            <td>
                                <img src={Income} alt="" className='mx-2 p-1' style={{ border: '2px solid var(--success-500)', borderRadius: '50%' }} />
                                {invoice.type}
                            </td>:
                            <td>
                            <img src={Outcome} alt="" className='mx-2 py-2 px-1' style={{ border: '2px solid var(--Danger-500)', borderRadius: '50%' }}/>
                            {invoice.type}
                        </td>
                        }
                        <td>{invoice.location}</td>
                        <td>
                            <TagStatus status={invoice.status}/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        <Pagination className="d-flex justify-content-between">
            <p>showing {showingFrom} to {showingTo} of {sortedInvoices.length} entries</p>
            <div className="d-flex flex-row">
                <Pagination.Prev onClick={handlePrevPage} disabled={currentPage === 1} className='me-2 rounded-3'>Previous</Pagination.Prev>
                {pageNumbers.map((number) => (
                    <Pagination.Item
                        key={number}
                        active={number === currentPage}
                        onClick={() => handlePageChange(number)}
                    >
                        {number}
                    </Pagination.Item>
                ))}
                <Pagination.Next onClick={handleNextPage} disabled={currentPage === Math.ceil(sortedInvoices.length / itemsPerPage)} className='ms-2' c>Next</Pagination.Next>
            </div>
        </Pagination>
        </>
    );
};

export default TableTransaction;
