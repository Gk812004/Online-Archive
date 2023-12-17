
window.onload = function() {
  let branch = "{{ branch }}";
  let semester = "{{ semester }}";
  document.getElementById("selected-branch").innerHTML = "Branch: " + branch;
  document.getElementById("selected-semester").innerHTML = "Semester: " + semester;
}
 

        
        // Define subject data based on branch and semester
        if (branch === 'CSE' && (semester === '6')) {
          // Display the "pyq", "books", and "notes" buttons
          const buttonsContainer = document.querySelector('#pdf-buttons');
          const pdfLists = {};
        
          const createPdfTable = (pdfData) => {
            const pdfTable = document.createElement('table');
            const headerRow = pdfTable.insertRow();
            const nameHeader = headerRow.insertCell();
            const linkHeader = headerRow.insertCell();
            nameHeader.textContent = 'PDF Name';
            linkHeader.textContent = 'Download Link';
        
            pdfData.forEach((pdf) => {
              const pdfRow = pdfTable.insertRow();
              const nameCell = pdfRow.insertCell();
              const linkCell = pdfRow.insertCell();
              nameCell.textContent = pdf.name;
              const pdfLink = document.createElement('a');
              pdfLink.href = pdf.url;
              pdfLink.textContent = 'Download';
              linkCell.appendChild(pdfLink);
            });
        
            return pdfTable;
          };
        const pyqButton = document.createElement('button');
        pyqButton.textContent = 'PYQ';
        pyqButton.addEventListener('click', () => {
          const pyqData = [{ name: 'CC Endsem (2019)', url: '/pdfs/pyq1.pdf' }, { name: 'CC Endsem (2020)', url: '/pdfs/pyq2.pdf' }  ,  { name: 'CC Endsem (2021)', url: '/pdfs/pyq1.pdf' }, { name: 'CC Endsem (2022)', url: '/pdfs/pyq1.pdf' },
      { name: 'SPM Endsem (2019)', url: '/pdfs/pyq1.pdf' }, { name: 'SPM Endsem (2020)', url: '/pdfs/pyq2.pdf' }  ,  { name: 'SPM Endsem (2021)', url: '/pdfs/pyq1.pdf' }, { name: 'SPM Endsem (2022)', url: '/pdfs/pyq1.pdf' },
      { name: 'CD Endsem (2019)', url: '/pdfs/pyq1.pdf' }, { name: 'CD Endsem (2020)', url: '/pdfs/pyq2.pdf' }  ,  { name: 'CD Endsem (2021)', url: '/pdfs/pyq1.pdf' }, { name: 'CD Endsem (2022)', url: '/pdfs/pyq1.pdf' },
      { name: 'SE Endsem (2019)', url: '/pdfs/pyq1.pdf' }, { name: 'SE Endsem (2020)', url: '/pdfs/pyq2.pdf' }  ,  { name: 'SE Endsem (2021)', url: '/pdfs/pyq1.pdf' }, { name: 'SE Endsem (2022)', url: '/pdfs/pyq1.pdf' }, 
      { name: 'DA Endsem (2019)', url: '/pdfs/pyq1.pdf' }, { name: 'DA Endsem (2020)', url: '/pdfs/pyq2.pdf' }  ,  { name: 'DA Endsem (2021)', url: '/pdfs/pyq1.pdf' }, { name: 'DA Endsem (2022)', url: '/pdfs/pyq1.pdf' },
      { name: 'ML Endsem (2019)', url: '/pdfs/pyq1.pdf' }, { name: 'ML Endsem (2020)', url: '/pdfs/pyq2.pdf' }  ,  { name: 'ML Endsem (2021)', url: '/pdfs/pyq1.pdf' }, { name: 'ML Endsem (2022)', url: '/pdfs/pyq1.pdf' },
      ];
          const pdfTable = createPdfTable(pyqData, 'PYQ');
          document.querySelector('#pdf-list').innerHTML = '';
          document.querySelector('#pdf-list').appendChild(pdfTable);
        });
        buttonsContainer.appendChild(pyqButton);
        
        const booksButton = document.createElement('button');
        booksButton.textContent = 'Books';
        booksButton.addEventListener('click', () => {
          const booksData = [{ name: 'Book1', url: '/pdfs/book1.pdf' }, { name: 'Book2', url: '/pdfs/book2.pdf' }];
          const pdfTable = createPdfTable(booksData, 'Books');
          document.querySelector('#pdf-list').innerHTML = '';
          document.querySelector('#pdf-list').appendChild(pdfTable);
        });
        buttonsContainer.appendChild(booksButton);
        
        const notesButton = document.createElement('button');
        notesButton.textContent = 'Notes';
        notesButton.addEventListener('click', () => {
          const notesData = [{ name: 'Note1', url: '/pdfs/note1.pdf' }, { name: 'Note2', url: '/pdfs/note2.pdf' }];
          const pdfTable = createPdfTable(notesData, 'Notes');
          document.querySelector('#pdf-list').innerHTML = '';
          document.querySelector('#pdf-list').appendChild(pdfTable);
        });
        buttonsContainer.appendChild(notesButton);
        
          // Call createPdfList function with initial data
          const initialPdfData = [{ name: 'PYQ1', url: '/pdfs/pyq1.pdf' }, { name: 'PYQ2', url: '/pdfs/pyq2.pdf' }];
          const pdfTable = createPdfTable(initialPdfData);
          document.querySelector('#pdf-list').innerHTML = '';
          document.querySelector('#pdf-list').appendChild(pdfTable);
        }
        
        

        // Make sure that the JavaScript code is loaded after the HTML has been rendered
// document.addEventListener("DOMContentLoaded", function() {
//   // Get the values of branch and semester from the HTML template
//   let branch = "{{ branch }}";
//   let semester = "{{ semester }}";
//   // Find the elements on the page and update their contents
//   document.getElementById("selected-branch").textContent = "Branch: " + branch;
//   document.getElementById("selected-semester").textContent = "Semester: " + semester;

