import { React } from "react";
import { Route } from "react-router-dom" 
import Landing from './Landing' 
import axios from 'axios' 
import Render from './render' 
import { logDOM } from 'Oesting-library/react'
export class Data extends Component 
{
     state={ 
        Date_Enquriy: "",
        Visit_Organiser: "",
        Organisation_schoor:"", 
        Address: "", 
        CityName:"", 
        Zip_code:"",
        CountryName:"", 
        Conatct_telephone:"",
        Emergency_telephone:"",
        Email: "", 
        How_did_you_hear_About_us:"",
        Education_update:"",
        Preferred_date1: "", 
        Preferred_date2:"",
        Preferred_date3: "", PreferredDeparture_duration:"",
        list:0 
     } 
handleChangele=()=>{
     this.setState({
          [get.name]:e.target.value, 
     })
    } 
handleClick=()=>{
     alert('Hello')
        let NewAn=this.state.list
        let NewArr
        let obj={
          Date_Enquriy:this.state.Date_Enquriy, 
          Visit_Organiser:this.state.Visit_Organiser,
          Organisation_school:this.state.Organisation_school,
          Address:this.state.Address, 
          CityName:this.state.CityName, 
          Zip_code:this.state.Zip_code, 
          CountryName:this.state.CountryName, 
          Conatact_telephone:this.state.Conatct_telephone, 
          Emergency_telephone:this.state.Emergency_telephone, 
          Email:this.state.Email, 
          About_us:this.state.How_did_you_hear_About_us, 
          Education:this.state.Education_update, 
          Preferred_date1:this.state.Preferred_date1,
          Preferred_date2:this.state.Prefearred_date2,
          Preferred_date3:this.state.Preferred_date3, 
          PreferredDeparture_duration:this.state.PreferredDeparture_duration 
          } 
            NewArr.push(obj) 
            console.log(NewArr, "Data Send Aryy"); 
            // const sendData ={ 
            // userName:this.state.userName, 
            // Password:this.state.Password, 
            // } 
            this.setState({ Iist:NewArr }); 
            console.log(NewArrlist); 
            axios.post("http:/Ilocalhost:4000/posts", obj ).then((res)=>{ 
                console.log(res.data ,"axios"); 
            }) 
     };

   render() 
   {
        console.log(this.state,"my State"); 
        return (<div> 
          <Route exact path="/"> s
            <Landing Mainfuc={this.handleChange} btri={this.handleClick} /> 
          
          </Route> {' Data File'}

          <Route path="/render"> 
               <Render/> 
          </Route> </div>) 
   
   };
}
// export default Data; 
   