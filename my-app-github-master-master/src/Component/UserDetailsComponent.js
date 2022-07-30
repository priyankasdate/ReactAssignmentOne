
const UserDetailsComponent=()=>{
    
  let url="https://jsonplaceholder.typicode.com/users";
  const FetchData=()=>{
  fetch(url)
  .then((r)=>{
      return r.json();
  })
  .then((result)=>{
      const newResult = result.filter(function(e){
          return e.id<3
      });
     console.log(newResult);
   
  });

};
FetchData();
  return(
<div>
  <p>User Information</p>
 
</div>
  );
};
export default  UserDetailsComponent;
