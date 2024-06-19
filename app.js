let library=[]
let libraryCount={
    total:0,
    tick:0,
    cross:0
}
let statusLibrary=document.querySelector('.status')
let hasRead=document.querySelector(".has-read")
let notRead=document.querySelector(".un-read")
let totalBooks=document.querySelector(".total-books")
let tick='<svg viewBox="0 -0.5 25 25 "  xmlns="http://www.w3.org/2000/svg"><path d="M5.5 12.5L10.167 17L19.5 8"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" /></svg>'
let cross='<svg  viewBox="0 -0.5 25 25"  xmlns="http://www.w3.org/2000/svg"><path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z" /></svg>'
let dustbin='<svg  viewBox="-7.29 0 122.88 122.88" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  style="enable-background:new 0 0 108.29 122.88" xml:space="preserve"><g><path d="M77.4,49.1h-5.94v56.09h5.94V49.1L77.4,49.1L77.4,49.1z M6.06,9.06h32.16V6.2c0-0.1,0-0.19,0.01-0.29 c0.13-2.85,2.22-5.25,5.01-5.79C43.97-0.02,44.64,0,45.38,0H63.9c0.25,0,0.49-0.01,0.73,0.02c1.58,0.08,3.02,0.76,4.06,1.81 c1.03,1.03,1.69,2.43,1.79,3.98c0.01,0.18,0.02,0.37,0.02,0.55v2.7H103c0.44,0,0.75,0.01,1.19,0.08c2.21,0.36,3.88,2.13,4.07,4.37 c0.02,0.24,0.03,0.47,0.03,0.71v10.54c0,1.47-1.19,2.66-2.67,2.66H2.67C1.19,27.43,0,26.23,0,24.76V24.7v-9.91 C0,10.64,2.04,9.06,6.06,9.06L6.06,9.06z M58.07,49.1h-5.95v56.09h5.95V49.1L58.07,49.1L58.07,49.1z M38.74,49.1H32.8v56.09h5.95 V49.1L38.74,49.1L38.74,49.1z M10.74,31.57h87.09c0.36,0.02,0.66,0.04,1.03,0.1c1.25,0.21,2.4,0.81,3.27,1.66 c1.01,1,1.67,2.34,1.7,3.83c0,0.31-0.03,0.63-0.06,0.95l-7.33,78.66c-0.1,1.03-0.27,1.95-0.79,2.92c-1.01,1.88-2.88,3.19-5.2,3.19 H18.4c-0.55,0-1.05,0-1.59-0.08c-0.22-0.03-0.43-0.08-0.64-0.14c-0.31-0.09-0.62-0.21-0.91-0.35c-0.27-0.13-0.52-0.27-0.78-0.45 c-1.51-1.04-2.51-2.78-2.69-4.72L4.5,37.88c-0.02-0.25-0.04-0.52-0.04-0.77c0.05-1.48,0.7-2.8,1.7-3.79 c0.88-0.86,2.06-1.47,3.33-1.67C9.9,31.59,10.34,31.57,10.74,31.57L10.74,31.57z M97.75,36.9H10.6c-0.57,0-0.84,0.1-0.79,0.7 l7.27,79.05h0l0,0.01c0.03,0.38,0.2,0.69,0.45,0.83l0,0l0.08,0.03l0.06,0.01l0.08,0h72.69c0.6,0,0.67-0.84,0.71-1.28l7.34-78.71 C98.53,37.04,98.23,36.9,97.75,36.9L97.75,36.9z"/></g></svg>'
let addBtn=document.querySelector('.add-book')
let title=document.querySelector('#title')
let author=document.querySelector('#author')
let page=document.querySelector('#page')
let readOrNot=document.querySelector('#read')
let deleteAll=document.querySelector('.delete-all')
let table=document.querySelector('.table')


function book(name,author,page,isRead){
    this.name=name
    this.author=author
    this.page=page
    this.isRead=isRead
}

function updateStatus(){
    hasRead.innerText="Books Read: "+libraryCount['tick']
    notRead.innerText="Books Unread: "+libraryCount['cross']
    totalBooks.innerText="Total Books: "+libraryCount['total']
}


library.push(new book("The Alchemist","Paulo Coelho",208,false))
function addBook(len){
    let statusImg=[cross,tick]
    let statusClass=['cross','tick']
    libraryCount['total']++
    libraryCount[statusClass[checkRead(library[len].isRead)]]++

    let tbody=document.querySelector('tbody')
    let tr=document.createElement('tr')
    let td1=document.createElement('td')
    let td2=document.createElement('td')
    let td3=document.createElement('td')
    let td4=document.createElement('td')
    let td5=document.createElement('td')

    tr.classList.add('grid')
    tbody.appendChild(tr)
    td1.innerText=library[len].name
    tr.appendChild(td1)

    td2.innerText=library[len].author
    tr.appendChild(td2)

    td3.innerText=library[len].page
    tr.appendChild(td3)

    td4.innerHTML=statusImg[checkRead(library[len].isRead)]
    td4.classList.add(statusClass[checkRead(library[len].isRead)])
    tr.appendChild(td4)
    td4.addEventListener('click',function(){
        changeStatus(len)
        td4.innerHTML=statusImg[checkRead(library[len].isRead)]
        td4.classList.add(statusClass[checkRead(library[len].isRead)])
        td4.classList.remove(statusClass[checkRead(!library[len].isRead)])
        libraryCount[statusClass[checkRead(!library[len].isRead)]]--
        libraryCount[statusClass[checkRead(library[len].isRead)]]++
        updateStatus()
    })

    
    td5.innerHTML=dustbin
    td5.classList.add('svg')
    td5.classList.add('dustbin')
    tr.appendChild(td5)
    td5.addEventListener('click',function(){
        td5.parentElement.style.display='none'
        let index=td5.parentElement.rowIndex-1
        libraryCount['total']--
        libraryCount[statusClass[checkRead(library[index].isRead)]]--
        table.deleteRow(index)
        library.splice(index,1)
        console.log(library)
        updateStatus()
    })

    updateStatus()
}

function checkRead(v){
    return ( Number(v))
}

function changeStatus(index){
    library[index].isRead=!library[index].isRead
}

function clearForm(){
    title.value=""
    author.value=""
    page.value=""
    readOrNot.checked=""
}

addBtn.addEventListener('click',function(){
    if(title.value==(null||undefined||"")||author.value==(null||undefined||"")||page.value==(null||undefined||"")){
        alert("Enter valid title or authur or page numbers")
    }else{
        library.push(new book(title.value,author.value,page.value,readOrNot.checked))
        addBook(library.length-1)
        clearForm()
    }
})

deleteAll.addEventListener('click',function(){
    table.innerHTML=""
    libraryCount.cross=0
    libraryCount.tick=0
    libraryCount.total=0
    updateStatus()
})

updateStatus()
addBook(0)

