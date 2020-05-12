export default function orderBy (contacts, filter) {
    
  return contacts.sort((a, b) => (a[filter] > b[filter]) ? 1 : (a[filter] === b[filter]) ? ((a.size > b.size) ? 1 : -1) : -1 );
};