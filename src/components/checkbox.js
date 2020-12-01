import React,{useState} from 'react'




function Checkbox(props){
    const [chkbox,setchkbox]=useState({
        chk1:false,
        chk2:false,
        chk3:false
    })
    //const [ chk2,setchk]=useState("")
    //const [ chk3,setchk3]=useState("")

    const handleAllChecked = (e) => {       
         setchkbox({...chkbox,[e.target.name]:e.target.checked});
         console.log(chkbox);
         props.Checkboxdata(chkbox)
      
    }
    return(
        <div>
             <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="chk1" value="samsung" onChange={handleAllChecked}  />
                        <label class="form-check-label" for="defaultCheck1">
                            samsung
                     </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="realme" name="chk2" onChange={handleAllChecked} />
                        <label class="form-check-label" for="defaultCheck2">
                            realme
                    </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="apple" name="chk3" onChange={handleAllChecked} />
                        <label class="form-check-label" for="defaultCheck2">
                            apple
                    </label>
                    </div>                   
        </div>
    )
}

export default Checkbox