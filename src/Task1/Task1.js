import React , {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import './task.css';

function Task2(){
  const [show , setShow] = useState(false);
  const modalClose = () => setShow(false);
  const modalshow = () => setShow(true);

  const [array1,array1changevalue] = useState([{Title:'1'}]);
  const [array2,array2changevalue] = useState([{Title:'2'}]);
  const [array3,array3changevalue] = useState([{Title:'3'}]);
  const [array4,array4changevalue] = useState([{Title:'4'}]);

  let getinputvalue = "";
  const Titlevalue = (e) => {
    getinputvalue = e.target.value;
  };
  const addedtask = () => {
    if(getinputvalue.length > 0){
      array1changevalue([...array1, {Title:getinputvalue} ])
    }else{
      alert('Please enter valid value') 
    }
    setShow(false)
  }

  const deletetask = (data) =>{
    if(data.parent == 1){
      const filterarray = array1.filter((value,index) => index != data.id);
      array1changevalue(filterarray)
    } else if(data.parent == 2){
      const filterarray = array2.filter((value,index) => index != data.id)
      array2changevalue(filterarray) 
    }else if(data.parent == 3){
      const filterarray = array3.filter((value,index) => index != data.id)
      array3changevalue(filterarray) 
    }else if(data.parent == 4){
      const filterarray = array4.filter((value,index) => index != data.id)
      array4changevalue(filterarray)
    }
  }
  const movetask = (data) =>{
    if(data.moveto == 2 ){
      array2changevalue([...array2 , {Title:data.title}]) 
      const filterarray = array1.filter((value,index) => index != data.id)
      array1changevalue(filterarray)
    } else if(data.moveto == 3 ){
      array3changevalue([...array3 , {Title:data.title}]) 
      const filterarray = array2.filter((value,index) => index != data.id)
      array2changevalue(filterarray)
    }else if(data.moveto == 4 ){
        array4changevalue([...array4 , {Title:data.title}]) 
        const filterarray = array3.filter((value,index) => index != data.id)
        array3changevalue(filterarray)
      }
  }
  const backtask = (data) =>{
    if(data.moveto == 1){
        array1changevalue([...array1, {Title:data.title}])
        const filterarray = array2.filter((value,index) => index != data.id)
        array2changevalue(filterarray)
    }else if(data.moveto == 2){
        array2changevalue([...array2 , {Title:data.title}])
        const filterarray = array3.filter((value,index) => index != data.id)
        array3changevalue(filterarray)
    }else if(data.moveto == 3){
        array3changevalue([...array3,{Title:data.title}])
        const filterarray = array4.filter((value,index) => index != data.id)
        array4changevalue(filterarray);
    }
  }


    return(
      <>
        <div className=" mb-4 text-end">
          <button className="btn btn-primary" onClick={modalshow}> Add Task</button>
        </div>

        <div className='row'>
          <div className='col-lg-3'>
            <div className='card'>
              <h4>step 1</h4>
              <div id='task1'>
                {
                 array1.map((value,index) =>{
                  return(
                    <div className='cardbox' key={index}>
                      <div className='cardbox_title_box'>
                        <p className="cardbox_title">{value.Title}</p>
                        <button className='text-danger' onClick={()=> deletetask({parent:1,id:index})}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                        </button>
                      </div>
                      <div className="cardbox_footer justify-content-end">
                        <button onClick={() => movetask({title:value.Title,id:index,moveto:2})}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                        </button>
                      </div>
                    </div>
                  )
                 }) 
                }
              </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='card'>
              <h4>step 2</h4>
              <div id='task2'>
                {
                  array2.map((value,index) =>{
                    return(
                    <div className='cardbox' key={index}>
                      <div className='cardbox_title_box'>
                        <p className="cardbox_title">{value.Title}</p>
                        <button className='text-danger' onClick={()=> deletetask({parent:2,id:index})}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
                        </button>
                      </div>
                      <div className="cardbox_footer">
                        <button onClick={() => backtask({title:value.Title,id:index,moveto:1})}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                        </button>
                        <button onClick={() => movetask({title:value.Title,id:index,moveto:3})}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                        </button>
                      </div>
                    </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='card'>
              <h4>step 3</h4>
              <div id='task3'>
                {
                  array3.map((value,index) =>{
                    return(
                      <div className='cardbox' key={index}>
                        <div className='cardbox_title_box'>
                          <p className="cardbox_title">{value.Title}</p>
                          <button className='text-denger' onClick={()=> deletetask({parent:3,id:index})}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
                          </button>
                        </div>
                        <div className="cardbox_footer">
                        <button onClick={() => backtask({title:value.Title,id:index,moveto:2})}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                        </button>
                        <button onClick={() => movetask({title:value.Title,id:index,moveto:4})}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                        </button>
                      </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='card'>
              <h4>step 4</h4>
              <div id='task4'>
                {
                  array4.map((value,index) =>{
                    return(
                      <div className='cardbox' key={index}>
                        <div className='cardbox_title_box'>
                          <p className="cardbox_title">{value.Title}</p>
                          <button className='text-danger' onClick={()=> deletetask({parent:4,id:index})}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
                          </button>
                        </div>
                        <div className="cardbox_footer">
                        <button onClick={() => backtask({title:value.Title,id:index,moveto:3})}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                        </button>    
                      </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>

        <Modal show={show} onHide={modalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='form-group mb-3'>
            <label>Title</label>
            <input className='form-control' onChange={Titlevalue} />
          </div>
          </Modal.Body>
        <Modal.Footer>
          <button onClick={addedtask} className='btn btn-primary'>Add Task</button>
        </Modal.Footer>
      </Modal>
      </>
    );
}

export default Task2;