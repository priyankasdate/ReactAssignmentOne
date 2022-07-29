

const UserDetails = () =>{
{

    const fetchUser = async () => {
        try {
          let response = await fetch('https://jsonplaceholder.typicode.com/users');
          let json = await response.json();
          return { success: true, data: json };
        } catch (error) {
          console.log(error);
          return { success: false };
        }
      }
      fetchUser();
}

    return(
        <UserDetails/>
        
    )
}
export default UserDetails;