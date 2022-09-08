const  Datecomponent = () => {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return (  
       
        <div className='todaysDate'>{date}</div>
      
    );
}
 
export default Datecomponent;