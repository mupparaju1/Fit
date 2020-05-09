const User = [
    {Name: 'Gopal', Username: 'mupparag1', Email: 'gopal@abc.com', Password:'Abcd@123', isAdmin:false, userID:0 },
    {Name: 'Krish', Username: 'mupparag2', Email: 'gopalmupparag1@abc.com', Password:'Abcd@123', isAdmin:false, userID:0 },
    {Name: 'Krishna', Username: 'Abc', Email: 'gopalmupparag2.com', Password:'Abcd@1234', isAdmin:true, userID:1}
];

function Login(username, password) {
  
  const user = User.find(x => x.Username == username);
  if(!user) throw Error('User not found');
  if(user.Password != password) throw Error('Password is incorrect, try again');

  return user;
};

function Get(userID){
    return User[userID]
  }
;
module.exports = {
  Login, Get, User

}