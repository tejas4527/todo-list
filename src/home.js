import { useState } from "react"
import { BiEdit } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";
const Todolist = () => {
     const [Title, setTitle] = useState('');
     const [Items, setItems] = useState([]);

     const[Isedit,setIsedit] = useState(false);
     const[editid,seteditid] = useState()
     const listofitem = () =>{
          if(Isedit !== true){
               setItems([...Items,Title]);
               setTitle('');
          }
          else{
               const update = [...Items];
               update[editid] = Title;
               setItems(update);
               setTitle('');
               seteditid('')
               setIsedit(false);
          }
     }
     const edit = (eId) =>{
          const update = Items.find((val, ind) => ind === eId);
          setTitle(update)
          seteditid(eId)
          setIsedit(true)
     }
     const clear = (dId) =>{
          const updata = Items.filter((val,i)=>{
               return i !== dId
          })
          setItems(updata);     
     }
     return (
          <div className="app">
               <div className="todolist">
                    <div className="data">
                         <h2>Todolist</h2>
                         <input type="text" placeholder="Add your new todo"  onChange={(e) => setTitle(e.target.value)} value={Title}/>
                         <button className="btn4" type="button" onClick={listofitem}>Add</button>
                         <ul>
                              {
                                   Items.map((items,index)=>{
                                        return(
                                        <li>{items}
                                             <div>
                                                  <button className="btn5 edit" onClick={()=>{edit(index)}}><BiEdit></BiEdit></button>
                                                  <button className="btn5" onClick={()=>{clear(index)}}><MdOutlineDeleteOutline></MdOutlineDeleteOutline></button>
                                             </div>
                                        </li>     
                                        )
                                   })
                              }
                         </ul>
                    </div>
               </div>
          </div>
     )
}
export default Todolist