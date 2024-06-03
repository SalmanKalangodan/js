let datas = []

function Add (e){
    e.preventDefault()
    const data=  document.getElementById('input').value 
    const color = document.getElementById('color').value
    if(data.length !==0){
        const newData = {
            data,
            color
        }
        datas = [...datas , newData]
        document.getElementById('input').value =''
        listItems()
    }
  
}


function listItems (){
    const title = document.getElementById('title')
    title.innerHTML = ''
    datas.forEach((value , i)=>{
       const liitem = document.createElement('li')
       const button = document.createElement('button')
       const edits = document.createElement('button')
       edits.textContent = "edit"
       button.textContent = 'delete'
       edits.onclick = () => edit(i)
       button.onclick =()=> deleteItem(i)
       liitem.textContent = value.data
       liitem.style.color = value.color
       title.appendChild(liitem)
       title.appendChild(button)
       title.appendChild(edits)
    })
}


function deleteItem(id) {
    datas = datas.filter((_,i)=> i!==id)
    listItems()
}


function edit(id) {
    const data = datas[id]
    datas = datas.filter((_,i)=> i !== id)  
    listItems()
    document.getElementById('input').value = data.data
}



